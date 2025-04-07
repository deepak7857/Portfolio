import nodemailer from 'nodemailer';


export async function POST(request) {
  const body = await request.json();

  const { fullName, email, message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: '"Portfolio Contact" <no-reply@example.com>',
      to: email,
      replyTo: process.env.SMTP_USER, 
      subject: "Thank You for Reaching Out",
      text: "Thank you for reaching out! I'll be in touch with you shortly.",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for your message:</p>
        <blockquote>${message}</blockquote>
        <p>I truly appreciate you taking the time to contact me. I’ll get back to you as soon as possible.</p>
        <p>Best regards,<br/>Deepak</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error('Error sending email:', error);

    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

  
