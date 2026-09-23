export interface LeadSubmissionPayload {
  sourceForm: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  service?: string;
  tier?: string;
  scope?: string;
  timeline?: string;
  budget?: string;
  hearAbout?: string;
  notes?: string;
}

export async function handleLeadEmail(data: LeadSubmissionPayload): Promise<{ success: boolean; error?: string; messageId?: string }> {
  const {
    sourceForm,
    name,
    phone,
    email,
    address,
    service,
    tier,
    scope,
    timeline,
    budget,
    hearAbout,
    notes,
  } = data || {};

  if (!name?.trim() || !phone?.trim()) {
    return {
      success: false,
      error: "Full name and phone number are required.",
    };
  }

  try {
    const nodemailer = await import("nodemailer");

    const host = process.env.SMTP_HOST || "smtppro.zoho.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = (process.env.SMTP_SECURE ?? "true") === "true";
    const user = process.env.SMTP_USER || "eva@stellrit.com";
    const pass = process.env.SMTP_PASS || "JqdnnPXn5VUu";
    const fromName = process.env.SMTP_FROM_NAME || "Progress Interior Designs";
    const recipient = process.env.LEAD_NOTIFICATION_EMAIL || "eva@stellrit.com";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "full",
      timeStyle: "short",
    });

    const subject = `[New Lead - ${sourceForm}] ${name} - ${service || "Consultation Request"}`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead Notification</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f0; color: #1c1917; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e7e2d7; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
    .header { background: #1c1917; color: #FAF8F5; padding: 28px 32px; border-bottom: 3px solid #C2A878; }
    .header h1 { margin: 0 0 6px; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; color: #ffffff; }
    .header p { margin: 0; font-size: 13px; color: #C2A878; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; }
    .content { padding: 32px; }
    .badge { display: inline-block; background: #f4efe6; color: #917545; padding: 6px 14px; border-radius: 999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table td { padding: 12px 14px; border-bottom: 1px solid #f0ece3; font-size: 14px; vertical-align: top; }
    .table td.label { width: 35%; font-weight: 600; color: #78716c; text-transform: uppercase; font-size: 11px; letter-spacing: 0.8px; }
    .table td.value { width: 65%; color: #1c1917; font-weight: 500; }
    .notes-box { background: #faf8f5; border-left: 4px solid #C2A878; padding: 16px 20px; border-radius: 8px; margin-top: 10px; font-size: 14px; line-height: 1.6; color: #292524; }
    .footer { background: #fdfcfb; padding: 20px 32px; border-top: 1px solid #f0ece3; text-align: center; font-size: 12px; color: #a8a29e; }
    .cta-btn { display: inline-block; background: #C2A878; color: #1c1917 !important; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 13px; margin: 4px; }
    .cta-btn-outline { display: inline-block; background: #f5f5f4; color: #1c1917 !important; font-weight: 600; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 13px; border: 1px solid #d6d3d1; margin: 4px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <p>Progress Interior Designs</p>
      <h1>New Customer Inquiry / Proposal Request</h1>
    </div>
    <div class="content">
      <div class="badge">Source Form: ${sourceForm || "Website"}</div>
      <table class="table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${name}</strong></td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="value"><a href="tel:${phone}" style="color: #917545; font-weight: 700; text-decoration: none;">${phone}</a></td>
        </tr>
        ${email ? `
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${email}" style="color: #917545; text-decoration: none;">${email}</a></td>
        </tr>` : ""}
        ${address ? `
        <tr>
          <td class="label">Property / Location</td>
          <td class="value">${address}</td>
        </tr>` : ""}
        ${service ? `
        <tr>
          <td class="label">Service Focus</td>
          <td class="value"><strong>${service}</strong></td>
        </tr>` : ""}
        ${tier ? `
        <tr>
          <td class="label">Investment Tier</td>
          <td class="value">${tier}</td>
        </tr>` : ""}
        ${scope ? `
        <tr>
          <td class="label">Project Scope / Size</td>
          <td class="value">${scope}</td>
        </tr>` : ""}
        ${budget ? `
        <tr>
          <td class="label">Estimated Budget</td>
          <td class="value">${budget}</td>
        </tr>` : ""}
        ${timeline ? `
        <tr>
          <td class="label">Target Timeline</td>
          <td class="value">${timeline}</td>
        </tr>` : ""}
        ${hearAbout ? `
        <tr>
          <td class="label">Referral Source</td>
          <td class="value">${hearAbout}</td>
        </tr>` : ""}
        <tr>
          <td class="label">Timestamp</td>
          <td class="value">${formattedDate} (CT)</td>
        </tr>
      </table>

      ${notes ? `
        <div style="font-weight: 700; font-size: 11px; text-transform: uppercase; color: #78716c; letter-spacing: 0.8px; margin-top: 20px;">
          Client Notes & Vision:
        </div>
        <div class="notes-box">
          ${notes.replace(/\n/g, "<br>")}
        </div>
      ` : ""}

      <div style="margin-top: 28px; text-align: center;">
        <a href="tel:${phone}" class="cta-btn">Call: ${phone}</a>
        ${email ? `<a href="mailto:${email}" class="cta-btn-outline">Email Client</a>` : ""}
      </div>
    </div>
    <div class="footer">
      Delivered directly to <strong>${recipient}</strong> via Progress Interior Designs server & Zoho Mail.
    </div>
  </div>
</body>
</html>
`;

    const textContent = `
NEW LEAD SUBMISSION - Progress Interior Designs
================================================
Source Form: ${sourceForm || "Website"}
Date: ${formattedDate} (CT)

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Property Location: ${address || "Not provided"}
Service Requested: ${service || "Not specified"}
Investment Tier: ${tier || "N/A"}
Project Scope: ${scope || "N/A"}
Budget: ${budget || "N/A"}
Target Timeline: ${timeline || "N/A"}
Referral Source: ${hearAbout || "N/A"}

Client Notes & Vision:
${notes || "None provided."}
================================================
`;

    const info = await transporter.sendMail({
      from: `"${fromName}" <${user}>`,
      to: recipient,
      replyTo: email?.trim() ? email.trim() : undefined,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return { success: true, messageId: info.messageId };
  } catch (err: any) {
    console.error("[Email Dispatch Error]:", err);
    return {
      success: false,
      error: err?.message || "Failed to deliver email through mail server.",
    };
  }
}
