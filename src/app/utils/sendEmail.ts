import nodemailer from 'nodemailer';
import config from '../config';
export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      user: 'captainlevi9111@gmail.com',
      pass: 'ohxz zaug rlgn kewr',
    },
  });

  await transporter.sendMail({
    from: 'captainLevi9111@gmail.com', // sender address
    to,
    subject: 'Forgot Password?', // Subject line
    text: 'Reset Password within 10 minutes', // plain text body
    html,
  });
};
