"use server";
import EmailTemplate from "@/email/EmailTemplate";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import { createElement } from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData: FormData) => {
    
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

   if (!validateString(senderEmail, 500) || !validateString(message, 5000)) {
        return {
            error: "Invalid email or message"
        };
   }
    
    let data;
    try{
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['juan.bellavitis@gmail.com'],
            subject: 'Message from Portfolio Contact form',
            reply_to: senderEmail as string,
            react: createElement(EmailTemplate, {message: message as string, senderEmail: senderEmail as string})
        });
    }
    catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data,
    };
};