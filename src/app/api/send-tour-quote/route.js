import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log("📩 Tour Quote API called");

    const form = await req.formData();
    const token = form.get("recaptcha");

    // 🔐 Verify reCAPTCHA v3
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
      }
    );

    const result = await verifyRes.json();
    console.log("🛡️ Captcha result:", result);

    if (!result.success || result.score < 0.5) {
      console.error("❌ reCAPTCHA failed");
      return NextResponse.json({ error: "reCAPTCHA failed" }, { status: 400 });
    }

    // 📦 Extract form data
    const data = {
      tour: form.get("tour"),
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      adults: form.get("adults"),
      children: form.get("children"),
      arrival: form.get("arrival"),
      departure: form.get("departure"),
      country: form.get("country"),
      message: form.get("message"),
    };

    console.log("📦 Form data:", data);

    // 📧 Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST, // smtp.zoho.com / smtp.zoho.in
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS, // APP PASSWORD
      },
      logger: true,
      debug: true,
    });

    console.log("🔌 Verifying SMTP...");
    await transporter.verify();
    console.log("✅ SMTP verified");

    // ✉️ Send email
    const info = await transporter.sendMail({
      from: `"Beach Walk Tours" <${process.env.ZOHO_SMTP_USER}>`,
      to: "info@beachwalktours.com",
      replyTo: data.email,
      subject: "New Tour Quote Request",
      html: `
        <h2>New Tour Quote Request</h2>
        <p><b>Tour:</b> ${data.tour}</p>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Adults:</b> ${data.adults}</p>
        <p><b>Children:</b> ${data.children}</p>
        <p><b>Arrival:</b> ${data.arrival}</p>
        <p><b>Departure:</b> ${data.departure}</p>
        <p><b>Country:</b> ${data.country}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });

    console.log("📤 Email sent:", info);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("🔥 MAIL ERROR FULL:", err);
    return NextResponse.json(
      { error: "Email failed", details: err.message },
      { status: 500 }
    );
  }
}
