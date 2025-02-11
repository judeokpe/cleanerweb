export const generateQuotationEmail = ( name: string, email: string, phone: string, date: string, time: string, service: string, message: string, subPackage:string) => ({
    text: `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phone}
      Preferred Date: ${date}
      Preferred Time: ${time}
      Service Requested: ${service}
      Message: ${message}
      Package: ${subPackage}
    `,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Quotation Request</title>
    </head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: #06e; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #43a047; text-align: center;">Quotation Request from Sparkle</h2>
      <div style="background: white; padding: 15px; border-radius: 8px;">
      <h2 style="color: #424242; text-align: center;">Quotation Details</h2>
      <p style="color: #424242; text-align:center; font-weight:bold">Contact Details,</p>
        <p style="color: #1e88e5;"><strong>Name:</strong> ${name}</p>
        <p style="color: #2e7d32;"><strong>Email:</strong> ${email}</p>
        <p style="color: #424242;"><strong>Phone Number:</strong> ${phone}</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
        <p style="color: #424242; text-align:center; font-weight:bold">Preferred Date & Time,</p>
        <p style="color: #424242;"><strong>Preferred Date:</strong> ${date}</p>
        <p style="color: #424242;"><strong>Preferred Time:</strong> ${time}</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
        <p style="color: #424242; text-align:center; font-weight:bold">Service Details</p>
        <p style="color: #424242;"><strong>Service Requested:</strong> ${service}</p>
        <p style="color: #424242;"><strong>Package:</strong> ${subPackage}</p>
        <p style="color: #424242;"><strong>Message:</strong> ${message}</p>
      </div>
      <p style="text-align: center; color: #f5f5f5; font-size: 14px;">Sparkle Team✅</p>
    </body>
    </html>
    `,
  });