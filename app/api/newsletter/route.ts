import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Newsletter Subscription - CleanJet',
      text: `A new user has subscribed to the newsletter: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: #e3f2fd;">
          <h2 style="color: #1e88e5; text-align: center;">New Newsletter Subscription</h2>
          <p style="text-align: center; font-size: 16px; color: #424242;"><strong>Email:</strong> ${email}</p>
        </div>
      `,
    };

    // Confirmation Email to Subscriber
    const subscriberMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to CleanJet Newsletter!',
      text: `Thank you for subscribing to CleanJet! Stay tuned for updates and offers.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: #e8f5e9;">
          <h2 style="color: #2e7d32; text-align: center;">Welcome to CleanJet!</h2>
          <p style="text-align: center; font-size: 16px; color: #424242;">Thank you for subscribing to our newsletter. You'll receive updates, special offers, and cleaning tips straight to your inbox.</p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(subscriberMailOptions);

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
