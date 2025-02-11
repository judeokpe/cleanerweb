

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import { connectDB } from '@/app/utils/db';
// import Quotation from '@/app/models/Quotation';
// import { generateQuotationEmail } from '@/app/templates/generateQuotationEmail';

// dotenv.config();





// export async function POST(request: Request) {
//   try {
//     connectDB()
//     const { name, email, phone, date, time, message, service } = await request.json();

//  if(!name || !email || !phone || !date || !time || !message || !service ){
//   throw new Error("All fields are required")
//  }
//     const newQuotation = new Quotation({ name, email, phone, date, time, message, service });
//     await newQuotation.save();

//     // Configure Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });


//   const emailContent = generateQuotationEmail(name, email, phone, date, time, service, message);

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: `Quotation Request from ${name} - CleanJet`,
//       text: emailContent.text,
//       html: emailContent.html,
//     }

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json(
//       { message: 'Quotation request sent and saved successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error:', error);
//     return NextResponse.json(
//       { error: 'Failed to process the request' },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { connectDB } from '@/app/utils/db';
import Quotation from '@/app/models/Quotation';
import { generateQuotationEmail } from '@/app/templates/generateQuotationEmail';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request: Request) {
  try {
    await connectDB();

    const { name, email, phone, date, time, message, service, subPackage } = await request.json();
    const LocalTime = time.toLocaleString()
    if (!name || !email || !phone || !date || !time || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Save to database
    const newQuotation = new Quotation({ name, email, phone, date, time: LocalTime, message, service, subPackage });
    await newQuotation.save();

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Generate email content
    // const emailContent = generateQuotationEmail(name, email, phone, date, time, service, message, subPackage);
    const emailContent = generateQuotationEmail(name, email, phone, date, LocalTime, service, message, subPackage);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Quotation Request from ${name} - Sparkle`,
      text: emailContent.text,
      html: emailContent.html,
    };

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
