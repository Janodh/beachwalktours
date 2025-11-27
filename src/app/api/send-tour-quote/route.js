import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const form = await req.formData();

  const token = form.get("recaptcha"); // 🔹 reCAPTCHA token

  // 🔹 Validate reCAPTCHA v3 with Google
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=6LeGmxgsAAAAAPkfskZwL60YurWQ6PV1ierLSx6k&response=${token}`,
    }
  );

  const result = await verifyRes.json();

  if (!result.success || result.score < 0.5) {
    return new Response("reCAPTCHA failed", { status: 400 });
  }

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

  try {
    await resend.emails.send({
      from: "Beach Walk Tours <onboarding@resend.dev>",
      to: "janodhjeewantha@gmail.com",
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

    return new Response("OK", { status: 200 });
  } catch (err) {
    return new Response("Email failed", { status: 500 });
  }
}
