export const generateQuotationEmail = (name: string, email: string, phone: string, date: string, time: string, service: string, message: string) => ({
    text: `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phone}
      Preferred Date: ${date}
      Preferred Time: ${time}
      Service Requested: ${service}
      Message: ${message}
    `,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Quotation Request</title>
    </head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: linear-gradient(to bottom right, #f1f8e9, #e3f2fd); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #43a047; text-align: center;">Quotation Request from CleanJet</h2>
      <div style="background: white; padding: 15px; border-radius: 8px;">
        <p style="color: #1e88e5;"><strong>Name:</strong> ${name}</p>
        <p style="color: #2e7d32;"><strong>Email:</strong> ${email}</p>
        <p style="color: #424242;"><strong>Phone Number:</strong> ${phone}</p>
        <p style="color: #424242;"><strong>Preferred Date:</strong> ${date}</p>
        <p style="color: #424242;"><strong>Preferred Time:</strong> ${time}</p>
        <p style="color: #424242;"><strong>Service Requested:</strong> ${service}</p>
        <p style="color: #424242;"><strong>Message:</strong> ${message}</p>
      </div>
      <p style="text-align: center; color: #757575; font-size: 14px;">Thank you for reaching out to CleanJet!</p>
    </body>
    </html>
    `,
  });