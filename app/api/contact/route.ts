import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { fullName, address, phone, message } = await req.json();

  if (!fullName || !address || !phone || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com", // e.g., smtp.gmail.com
    port: 465,
    secure: true,
    auth: {
      user: "your-email@example.com",
      pass: "your-email-password", // App Password if Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: `"DMS Contact Form" <your-email@example.com>`,
      to: "adamseid2@gmail.com",
      subject: "DMS Contact Form",
      text: `
Full Name: ${fullName}
Email: ${address}
Phone: ${phone}
Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}