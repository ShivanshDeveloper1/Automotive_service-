import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone, vehicle, service, message } = data;

    const { error } = await resend.emails.send({
      from: "Pegcity Website <onboarding@resend.dev>",
      to: ["Pegcitycustomz@gmail.com"],
      replyTo: email,
      subject: `New service inquiry${service ? ` - ${service}` : ""}`,
      html: `
        <h2>New Pegcity Website Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Vehicle:</strong> ${vehicle || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not selected"}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error(error);
      return Response.json({ error: "Email failed" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}