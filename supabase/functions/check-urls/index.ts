const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface UrlResult {
  url: string;
  statusCode: number | null;
  status: string;
  issue: string;
  severity: 'ok' | 'warning' | 'error';
  redirectUrl?: string;
}

async function checkUrl(url: string): Promise<UrlResult> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEOToolBot/1.0)',
        'Accept': 'text/html,application/xhtml+xml,*/*',
      },
    });
    clearTimeout(timeout);

    const statusCode = res.status;
    const finalUrl = res.url;
    const redirected = res.redirected || finalUrl !== url;

    if (statusCode >= 200 && statusCode < 300) {
      if (redirected) {
        // Check if redirect leads to an error-like page
        const body = await res.text();
        const is404Page = /<title[^>]*>.*404.*<\/title>/i.test(body) || 
                          /class="[^"]*404[^"]*"/i.test(body) ||
                          /page\s*not\s*found/i.test(body.slice(0, 5000));
        if (is404Page) {
          return {
            url, statusCode: 404, status: 'Soft 404',
            issue: `Page returns 200 but displays 404 content. Redirected to: ${finalUrl}`,
            severity: 'error', redirectUrl: finalUrl,
          };
        }
        return {
          url, statusCode, status: `Redirected (${statusCode})`,
          issue: `Redirected to: ${finalUrl}`,
          severity: 'warning', redirectUrl: finalUrl,
        };
      }
      // Check for soft 404
      const body = await res.text();
      const is404Page = /<title[^>]*>.*404.*<\/title>/i.test(body) ||
                        /page\s*not\s*found/i.test(body.slice(0, 5000));
      if (is404Page) {
        return {
          url, statusCode: 404, status: 'Soft 404',
          issue: 'Page returns 200 but displays 404/not-found content',
          severity: 'error',
        };
      }
      return { url, statusCode, status: 'OK', issue: 'No issues detected', severity: 'ok' };
    } else if (statusCode >= 300 && statusCode < 400) {
      return {
        url, statusCode, status: `Redirect (${statusCode})`,
        issue: `Redirects to: ${res.headers.get('location') || 'unknown'}`,
        severity: 'warning', redirectUrl: res.headers.get('location') || undefined,
      };
    } else if (statusCode === 404) {
      return { url, statusCode, status: '404 Not Found', issue: 'Page does not exist', severity: 'error' };
    } else if (statusCode === 403) {
      return { url, statusCode, status: '403 Forbidden', issue: 'Access denied by server', severity: 'error' };
    } else if (statusCode === 500) {
      return { url, statusCode, status: '500 Server Error', issue: 'Internal server error', severity: 'error' };
    } else if (statusCode === 502) {
      return { url, statusCode, status: '502 Bad Gateway', issue: 'Bad gateway error', severity: 'error' };
    } else if (statusCode === 503) {
      return { url, statusCode, status: '503 Unavailable', issue: 'Service temporarily unavailable', severity: 'warning' };
    } else {
      return {
        url, statusCode, status: `HTTP ${statusCode}`,
        issue: `Returned status code ${statusCode}`,
        severity: statusCode >= 400 ? 'error' : 'warning',
      };
    }
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return { url, statusCode: null, status: 'Timeout', issue: 'Request timed out after 10 seconds', severity: 'warning' };
    }
    const msg = err.message || 'Unknown error';
    if (msg.includes('dns') || msg.includes('DNS') || msg.includes('getaddrinfo')) {
      return { url, statusCode: null, status: 'DNS Error', issue: 'Domain does not resolve — may not exist', severity: 'error' };
    }
    if (msg.includes('certificate') || msg.includes('SSL') || msg.includes('TLS')) {
      return { url, statusCode: null, status: 'SSL Error', issue: 'SSL/TLS certificate issue', severity: 'error' };
    }
    if (msg.includes('refused') || msg.includes('ECONNREFUSED')) {
      return { url, statusCode: null, status: 'Connection Refused', issue: 'Server refused the connection', severity: 'error' };
    }
    return { url, statusCode: null, status: 'Unreachable', issue: msg, severity: 'error' };
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { urls } = await req.json();

    if (!Array.isArray(urls) || urls.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'URLs array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Limit to 50 URLs per request
    const limitedUrls = urls.slice(0, 50);

    // Check URLs in parallel batches of 5
    const results: UrlResult[] = [];
    for (let i = 0; i < limitedUrls.length; i += 5) {
      const batch = limitedUrls.slice(i, i + 5);
      const batchResults = await Promise.all(batch.map((u: string) => {
        let url = u.trim();
        if (!/^https?:\/\//.test(url)) url = `https://${url}`;
        return checkUrl(url);
      }));
      results.push(...batchResults);
    }

    return new Response(
      JSON.stringify({ success: true, results }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Failed to check URLs' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
