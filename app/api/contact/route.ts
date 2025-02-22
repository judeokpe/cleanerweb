

import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';
import { connectDB } from '@/app/utils/db';
import Inquiry from '@/app/models/Contact';

export async function POST(request: Request) {
  try {
    const { name, email, message, phone } = await request.json();

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    await connectDB()

    // Save to database
    const newInquiry = new Inquiry({ name, email, message, phone });
    await newInquiry.save();

    // Send email notification
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
      subject: `Enquiry message from ${name} to Sparkle`,
      text: `
        Name: ${name}
        Email: ${email}
         Phone number: ${phone}
        Message: ${message}
       
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: linear-gradient(to bottom right, #e3f2fd, #e8f5e9); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1e88e5; text-align: center;">Enquiry message from Sparkle website</h2>
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <p style="color: #2e7d32;"><strong>Name:</strong> ${name}</p>
            <p style="color: #1565c0;"><strong>Email:</strong> ${email}</p>
            <p style="color: #424242;"><strong>Phone Number:</strong> ${phone}</p>
            <p style="color: #424242;"><strong>Message:</strong> ${message}</p>
            
          </div>
          <p style="text-align: center; color: #757575; font-size: 14px;">Thank you for reaching out!</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Inquiry saved and email sent successfully✅' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process inquiry❌' },
      { status: 500 }
    );
  }
}
