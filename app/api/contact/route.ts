import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, phone } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Enquiry message from ${name} to CleanJet`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Phone number: ${phone}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: linear-gradient(to bottom right, #e3f2fd, #e8f5e9); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1e88e5; text-align: center;">Enquiry message from CleanJet website</h2>
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <p style="color: #2e7d32;"><strong>Name:</strong> ${name}</p>
            <p style="color: #1565c0;"><strong>Email:</strong> ${email}</p>
            <p style="color: #424242;"><strong>Message:</strong> ${message}</p>
            <p style="color: #424242;"><strong>Phone Number:</strong> ${phone}</p>
          </div>
          <p style="text-align: center; color: #757575; font-size: 14px;">Thank you for reaching out!</p>
        </div>
      `,
    };
    

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}