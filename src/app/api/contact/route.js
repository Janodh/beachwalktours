import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message, token } = await req.json();

    // 1️⃣ VERIFY RECAPTCHA v3
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=6Lf2yBAsAAAAAEgw6zdLbQuu5PKkcsBHR1vupUO6&response=${token}`;

    const captchaRes = await fetch(verifyUrl, { method: "POST" }).then((r) =>
      r.json()
    );

    if (!captchaRes.success || captchaRes.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA failed. Try again." },
        { status: 400 }
      );
    }

    // 2️⃣ SEND EMAIL USING RESEND
    await resend.emails.send({
      from: "Beach Walk Tours<onboarding@resend.dev>", // add email
      to: "janodhjeewantha@gmail.com",
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
