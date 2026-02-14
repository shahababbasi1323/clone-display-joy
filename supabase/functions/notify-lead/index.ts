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
    const { name, email, phone, website, service, message, source } = await req.json();

    const subject =
      source === "free_seo_audit"
        ? `🔍 New Free SEO Audit Request from ${name}`
        : `📩 New Contact Form Submission from ${name}`;

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h2 style="color:#6366f1;border-bottom:2px solid #6366f1;padding-bottom:10px;">
          ${source === "free_seo_audit" ? "New SEO Audit Request" : "New Contact Form Lead"}
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

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Shahab Abbasi Website <onboarding@resend.dev>",
        to: ["shahababbasi987@gmail.com"],
        subject,
        html: htmlBody,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
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
