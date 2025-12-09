import { transporter, sender } from "../lib/nodemailer.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";
import { ENV } from "../lib/env.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
    try {
        const fromEmail = sender.email || ENV.MY_EMAIL;
        const fromName = sender.name || 'Convofy';

        const info = await transporter.sendMail({
            from: `${fromName} <${fromEmail}>`,
            to: email,
            subject: "Welcome to Convofy!",
            html: createWelcomeEmailTemplate(name, clientURL),
        });

        console.log("Welcome Email sent successfully");
        return info;
    } catch (error) {
        console.error("Error sending welcome email:", error.message);
        throw new Error("Failed to send welcome email");
    }
};
