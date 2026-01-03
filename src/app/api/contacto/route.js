import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const { name, email, phone, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'donkhengrag@gmail.com',
        pass: process.env.SMTP_PASS || process.env.NEXT_PUBLIC_PASS_TOKEN,
      },
    });

    // Create email content
    const emailBody = `
Nuevo mensaje desde el formulario de contacto de Cristalsarabia.com

Nombre: ${name}
Correo: ${email}
${phone ? `Teléfono: ${phone}` : 'Teléfono: No proporcionado'}

Mensaje:
${message}
    `.trim();

    const mailOptions = {
      from: process.env.SMTP_USER || 'donkhengrag@gmail.com',
      replyTo: email,
      to: 'info@cristalsarabia.com',
      subject: 'Nuevo mensaje desde Cristalsarabia.com',
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c267c0;">Nuevo mensaje desde el formulario de contacto</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>` : '<p><strong>Teléfono:</strong> No proporcionado</p>'}
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #c267c0; margin: 20px 0;">
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el correo' },
      { status: 500 }
    );
  }
};

export const OPTIONS = () => {
  return NextResponse.json({ message: 'Método no permitido' }, { status: 405 });
};
