// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request: Request) {
//   try {
//     const { name, email, phone, date, time, message } = await request.json();

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: `Quotation Request from ${name} - CleanJet`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Phone Number: ${phone}
//         Preferred Date: ${date}
//         Preferred Time: ${time}
//         Message: ${message}
//       `,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: linear-gradient(to bottom right, #f1f8e9, #e3f2fd); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
//           <h2 style="color: #43a047; text-align: center;">Quotation Request from CleanJet</h2>
//           <div style="background: white; padding: 15px; border-radius: 8px;">
//             <p style="color: #1e88e5;"><strong>Name:</strong> ${name}</p>
//             <p style="color: #2e7d32;"><strong>Email:</strong> ${email}</p>
//             <p style="color: #424242;"><strong>Phone Number:</strong> ${phone}</p>
//             <p style="color: #424242;"><strong>Preferred Date:</strong> ${date}</p>
//             <p style="color: #424242;"><strong>Preferred Time:</strong> ${time}</p>
//             <p style="color: #424242;"><strong>Message:</strong> ${message}</p>
//           </div>
//           <p style="text-align: center; color: #757575; font-size: 14px;">Thank you for reaching out to CleanJet!</p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json(
//       { message: 'Quotation request sent successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to send email' },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from 'next/server'; 
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, date, time, message, service } = await request.json(); // Assuming 'service' is the dropdown value

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
      subject: `Quotation Request from ${name} - CleanJet`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phone}
        Preferred Date: ${date}
        Preferred Time: ${time}
        Service Requested: ${service}   // Added this line for the dropdown value
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: linear-gradient(to bottom right, #f1f8e9, #e3f2fd); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #43a047; text-align: center;">Quotation Request from CleanJet</h2>
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <p style="color: #1e88e5;"><strong>Name:</strong> ${name}</p>
            <p style="color: #2e7d32;"><strong>Email:</strong> ${email}</p>
            <p style="color: #424242;"><strong>Phone Number:</strong> ${phone}</p>
            <p style="color: #424242;"><strong>Preferred Date:</strong> ${date}</p>
            <p style="color: #424242;"><strong>Preferred Time:</strong> ${time}</p>
            <p style="color: #424242;"><strong>Service Requested:</strong> ${service}</p> <!-- Added this line -->
            <p style="color: #424242;"><strong>Message:</strong> ${message}</p>
          </div>
          <p style="text-align: center; color: #757575; font-size: 14px;">Thank you for reaching out to CleanJet!</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Quotation request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
