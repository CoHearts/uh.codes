import { NextResponse, NextRequest } from "next/server";
import Mailjet from "node-mailjet";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY,
    apiSecret: process.env.MJ_SECRET_KEY,
  });

  try {
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MY_GMAIL || "",
            Name: "Portfolio Contact Form",
          },
          To: [
            {
              Email: process.env.MY_GMAIL || "",
              Name: "From Portfolio Visitor",
            },
          ],
          Subject: `📩 Portfolio Message from:  ${name}`,
          TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          HTMLPart: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body { margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Arial', sans-serif; }
                .container { max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden; }
                .card-header { background-color: #4a90e2; color: white; padding: 15px; text-align: center; }
                .card-content { padding: 20px; color: #333; }
                .card-content p { margin: 10px 0; line-height: 1.6; }
                .card-content a { color: #4a90e2; text-decoration: none; }
                .card-footer { background-color: #f8f9fa; padding: 10px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e0e0e0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="card-header">
                  <h2>New Contact Form Submission</h2>
                </div>
                <div class="card-content">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p><strong>Message:</strong><br>${message}</p>
                </div>
                <div class="card-footer">
                  ✨ Sent via your portfolio contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.
                </div>
              </div>
            </body>
            </html>
          `,
        },
      ],
    });

    await request;
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Mailjet error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
