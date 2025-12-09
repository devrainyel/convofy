import nodemailer from 'nodemailer';
import 'dotenv/config';
import { ENV } from './env.js';

const port = parseInt(ENV.SMTP_PORT || '587');
const isSecurePort = port === 465;

export const transporter = nodemailer.createTransport({
    host: ENV.SMTP_HOST || 'smtp.gmail.com',
    port: port,
    secure: isSecurePort, // false for 587 (STARTTLS), true for 465 (SSL)
    auth: {
        user: ENV.MY_EMAIL,
        pass: ENV.APP_PASSWORD,
    },
    tls: {
        // rejectUnauthorized: false means Node.js will accept SSL/TLS certificates
        // even if they're self-signed, expired, or from untrusted authorities.
        // Set to true in production for better security (requires valid certificates).
        // For Gmail and most major providers, false is fine as they have valid certs.
        rejectUnauthorized: ENV.NODE_ENV === 'production' ? true : false,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log('SMTP connection error:', error.message);
    } else {
        console.log('SMTP server is ready to send emails');
    }
});

export const sender = {
    email: ENV.MY_EMAIL,
    name: ENV.EMAIL_FROM_NAME,
};


