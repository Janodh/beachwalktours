import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log("📩 Contact API called");

    const body = await req.json();
    console.log("📦 Request body:", body);

    const { name, email, subject, message, token } = body;

    // 🔐 reCAPTCHA
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=6LeGmxgsAAAAAPkfskZwL60YurWQ6PV1ierLSx6k&response=${token}`;

    const captchaRes = await fetch(verifyUrl, { method: "POST" }).then((r) =>
      r.json()
    );
    console.log("🛡️ Captcha result:", captchaRes);

    if (!captchaRes.success || captchaRes.score < 0.5) {
      console.error("❌ Captcha failed");
      return NextResponse.json({ error: "Captcha failed" }, { status: 400 });
    }

    // 📧 SMTP Transport
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
      logger: true, // 🔥 SHOW SMTP LOGS
      debug: true, // 🔥 SHOW FULL DEBUG
    });

    console.log("🔌 Verifying SMTP...");
    await transporter.verify();
    console.log("✅ SMTP verified");

    // ✉️ Send mail
    const info = await transporter.sendMail({
      from: `"Beach Walk Tours" <${process.env.ZOHO_SMTP_USER}>`,
      to: "info@beachwalktours.com",
      replyTo: email,
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("📤 Email sent info:", info);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("🔥 MAIL ERROR FULL:", err);
    return NextResponse.json(
      { error: "Email sending failed", details: err.message },
      { status: 500 }
    );
  }
}
