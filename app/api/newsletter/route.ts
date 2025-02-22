import Newsletter from "@/app/models/Newsletter";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

await connectDB()

    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 400 }
      );
    }

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Newsletter Subscription - Sparkle',
      text: `A new user has subscribed to the newsletter: ${email}`,
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: #e3f2fd;">
          <h2 style="color: #1e88e5; text-align: center;">New Newsletter Subscription</h2>
          <p style="text-align: center; font-size: 16px; color: #424242;"><strong>Email:</strong> ${email}</p>
        </div>`
    };

    const subscriberMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Sparkle Newsletter!',
      text: 'Thank you for subscribing to Sparkle! Stay tuned for updates and offers.',
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: #e8f5e9;">
          <h2 style="color: #2e7d32; text-align: center;">Welcome to Sparkle!</h2>
          <p style="text-align: center; font-size: 16px; color: #424242;">Thank you for subscribing to our newsletter. You'll receive updates, special offers, and cleaning tips straight to your inbox.</p>
        </div>`
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(subscriberMailOptions);

    return NextResponse.json(
      { message: 'Subscription successful✅' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process subscription❌' },
      { status: 500 }
    );
  }
}
