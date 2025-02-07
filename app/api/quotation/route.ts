

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from '@/app/utils/db';
import Quotation from '@/app/models/Quotation';
import { generateQuotationEmail } from '@/app/templates/generateQuotationEmail';

dotenv.config();





export async function POST(request: Request) {
  try {
    const { name, email, phone, date, time, message, service } = await request.json();

    // Save to database
    const newQuotation = new Quotation({ name, email, phone, date, time, message, service });
    await newQuotation.save();

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


  const emailContent = generateQuotationEmail(name, email, phone, date, time, service, message);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Quotation Request from ${name} - CleanJet`,
      text: emailContent.text,
      html: emailContent.html,
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Quotation request sent and saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process the request' },
      { status: 500 }
    );
  }
}
