import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log("📩 Vehicle Quote API called");

    const form = await req.formData();
    const recaptchaToken = form.get("recaptcha");

    console.log("🧩 reCAPTCHA token:", recaptchaToken);

    // 🔐 Verify reCAPTCHA
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET}&response=${recaptchaToken}`,
      }
    );

    const verifyData = await verifyRes.json();
    console.log("🛡️ Captcha result:", verifyData);

    if (!verifyData.success || verifyData.score < 0.5) {
      console.error("❌ Captcha failed");
      return NextResponse.json({ error: "reCAPTCHA failed" }, { status: 400 });
    }

    // 📦 Extract form data
    const data = {
      vehicle: form.get("vehicle"),
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

    // 📧 Zoho SMTP transport
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
      subject: "New Vehicle Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><b>Vehicle:</b> ${data.vehicle}</p>
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
      { error: "Email sending failed", details: err.message },
      { status: 500 }
    );
  }
}
