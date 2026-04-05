import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "RESEND_API_KEY not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, phone, website, service, message, source, downloadUrl, resourceTitle } = await req.json();

    // --- 1. Admin notification email ---
    const subject =
      source === "free_seo_audit"
        ? `New Free SEO Audit Request from ${name}`
        : source === "welcome-popup"
        ? `New Welcome Offer Lead: ${email}`
        : source?.startsWith("resource_")
        ? `New Resource Download: ${resourceTitle || message}`
        : source === "pricing_custom_quote"
        ? `New Custom Quote Request from ${name}`
        : `📩 New Contact Form Submission from ${name}`;

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h2 style="color:#6366f1;border-bottom:2px solid #6366f1;padding-bottom:10px;">
          ${source === "free_seo_audit" ? "New SEO Audit Request" : source?.startsWith("resource_") ? "New Resource Download" : "New Contact Form Lead"}
        </h2>
        <table style="width:100%;border-collapse:collapse;margin:20px 0;">
          <tr><td style="padding:8px 0;font-weight:bold;width:120px;">Name:</td><td>${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;font-weight:bold;">Phone:</td><td>${phone}</td></tr>` : ""}
          ${website ? `<tr><td style="padding:8px 0;font-weight:bold;">Website:</td><td>${website}</td></tr>` : ""}
          ${service ? `<tr><td style="padding:8px 0;font-weight:bold;">Service:</td><td>${service}</td></tr>` : ""}
        </table>
        ${message ? `<div style="background:#f4f4f5;padding:15px;border-radius:8px;margin-top:10px;"><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</div>` : ""}
        <p style="color:#888;font-size:12px;margin-top:20px;">Source: ${source || "unknown"} · Received at ${new Date().toISOString()}</p>
      </div>
    `;

    const adminEmail = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Shahab Abbasi Website <contact@shahababbasi.com>",
        to: ["shahababbasi987@gmail.com"],
        subject,
        html: htmlBody,
      }),
    });

    // --- 2. Auto-reply emails based on source ---
    let userEmail: Promise<Response> | null = null;

    // Welcome popup discount confirmation
    if (source === "welcome-popup" && email) {
      const discountHtml = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#ffffff;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#1a1a2e;margin:0;">Shahab Abbasi</h1>
            <p style="color:#6366f1;font-size:14px;margin-top:4px;">Digital Marketing Agency</p>
          </div>
          
          <div style="background:linear-gradient(135deg,#00C853,#00E676);border-radius:12px;padding:30px;text-align:center;color:#ffffff;margin-bottom:24px;">
            <h2 style="margin:0 0 8px 0;font-size:28px;">Your 25% Discount is Confirmed!</h2>
            <p style="margin:0;opacity:0.9;font-size:16px;">Use it on your first project with us</p>
          </div>
          
          <p style="color:#374151;font-size:16px;line-height:1.6;">
            Hi there! Thank you for your interest. Here's your exclusive discount code:
          </p>
          
          <div style="text-align:center;margin:30px 0;">
            <div style="display:inline-block;background:#f0fdf4;border:2px dashed #00C853;border-radius:12px;padding:20px 40px;">
              <p style="margin:0;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Your Discount Code</p>
              <p style="margin:8px 0 0;font-size:32px;font-weight:bold;color:#00C853;letter-spacing:3px;">WELCOME25</p>
            </div>
          </div>
          
          <p style="color:#374151;font-size:15px;line-height:1.6;">
            Simply mention this code when you reach out, and we'll apply <strong>25% off</strong> your first project. This offer is valid for <strong>30 days</strong>.
          </p>

          <div style="text-align:center;margin:30px 0;">
            <a href="https://shahababbasi.com/free-seo-audit" style="display:inline-block;background:#6366f1;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:bold;font-size:16px;">
              Get Your Free Growth Audit
            </a>
          </div>
          
          <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-top:24px;">
            <h3 style="color:#1a1a2e;margin:0 0 12px 0;font-size:16px;">What we can help with:</h3>
            <ul style="color:#6b7280;font-size:14px;line-height:2;margin:0;padding-left:20px;">
              <li>SEO & Content Strategy</li>
              <li>PPC & Google Ads Management</li>
              <li>Web Design & Development</li>
              <li>Social Media Management</li>
            </ul>
          </div>
          
          <div style="text-align:center;margin:24px 0;">
            <p style="color:#374151;font-size:14px;margin:0 0 8px;">Prefer to chat directly?</p>
            <a href="https://wa.me/923041316771?text=Hi%20Shahab%2C%20I%20have%20the%20WELCOME25%20discount%20code!" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;padding:10px 24px;border-radius:24px;font-weight:bold;font-size:14px;">
              WhatsApp Us
            </a>
          </div>
          
          <div style="border-top:1px solid #e5e7eb;margin-top:30px;padding-top:20px;text-align:center;">
            <p style="color:#9ca3af;font-size:12px;margin:0;">
              © ${new Date().getFullYear()} Shahab Abbasi · <a href="https://shahababbasi.com" style="color:#9ca3af;">shahababbasi.com</a>
            </p>
          </div>
        </div>
      `;

      userEmail = fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Shahab Abbasi <contact@shahababbasi.com>",
          to: [email],
          subject: "Your 25% Discount Code: WELCOME25",
          html: discountHtml,
        }),
      });
    }

    // Resource delivery email
    if (source?.startsWith("resource_") && downloadUrl && resourceTitle) {
      const userHtml = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#ffffff;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#1a1a2e;margin:0;">Shahab Abbasi</h1>
            <p style="color:#6366f1;font-size:14px;margin-top:4px;">SEO Strategist & GEO Expert</p>
          </div>
          
          <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:12px;padding:30px;text-align:center;color:#ffffff;margin-bottom:24px;">
            <h2 style="margin:0 0 8px 0;font-size:24px;">Your Resource is Ready! </h2>
            <p style="margin:0;opacity:0.9;font-size:16px;">${resourceTitle}</p>
          </div>
          
          <p style="color:#374151;font-size:16px;line-height:1.6;">
            Hi there! Thanks for downloading <strong>${resourceTitle}</strong>. Click the button below to get your PDF:
          </p>
          
          <div style="text-align:center;margin:30px 0;">
            <a href="${downloadUrl}" style="display:inline-block;background:#6366f1;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:bold;font-size:16px;">
              Download Your PDF
            </a>
          </div>
          
          <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-top:24px;">
            <h3 style="color:#1a1a2e;margin:0 0 12px 0;font-size:16px;">Want more free resources?</h3>
            <p style="color:#6b7280;margin:0;font-size:14px;line-height:1.6;">
              I have 16 professional SEO templates, guides, and AI prompt packs — all free.<br/>
              <a href="https://shahababbasi.com/free-seo-resources" style="color:#6366f1;font-weight:bold;">Browse All Resources →</a>
            </p>
          </div>
          
          <div style="border-top:1px solid #e5e7eb;margin-top:30px;padding-top:20px;text-align:center;">
            <p style="color:#9ca3af;font-size:12px;margin:0;">
              Need help with SEO? <a href="https://shahababbasi.com/free-seo-audit" style="color:#6366f1;">Get a Free SEO Audit</a><br/>
              © ${new Date().getFullYear()} Shahab Abbasi · <a href="https://shahababbasi.com" style="color:#9ca3af;">shahababbasi.com</a>
            </p>
          </div>
        </div>
      `;

      userEmail = fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Shahab Abbasi <contact@shahababbasi.com>",
          to: [email],
          subject: `Your download: ${resourceTitle}`,
          html: userHtml,
        }),
      });
    }

    // Send both emails in parallel
    const results = await Promise.all([adminEmail, ...(userEmail ? [userEmail] : [])]);
    
    const adminRes = results[0];
    const adminData = await adminRes.json();
    if (!adminRes.ok) {
      throw new Error(`Resend API error [${adminRes.status}]: ${JSON.stringify(adminData)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
