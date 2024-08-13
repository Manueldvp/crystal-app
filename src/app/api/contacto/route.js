import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  const { name, email, message } = await req.json();

  // Crear el transportador de Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'donkhengrag@gmail.com',
      pass: process.env.NEXT_PUBLIC_PASS_TOKEN,
    },
  });

  // Crear el correo electrónico
  const mailOptions = {
    from: email,
    to: 'info@cristalsarabia.com',
    subject: 'Nuevo mensaje desde Cristalsarabia.com',
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
};

export const OPTIONS = () => {
  return NextResponse.json({ message: 'Método no permitido' }, { status: 405 });
};
