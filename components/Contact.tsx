"use client";
import React from 'react';
import SectionHeading from './Section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { SendEmail } from '@/actions/SendEmail';
import SubmitBtn from './SubmitBtn';
import  toast  from 'react-hot-toast';

export default function Contact() {

    const { ref } = useSectionInView("Contact");
    
    return (
        <motion.section
            id="contact"
            ref={ref}
            className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading title="Contact me!" />
            <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a className='underline' href='mailto:juan.bellavitis@gmail.com'>juan.bellavitis@gmail.com</a> or through this form.</p>

            <form
                className='mt-10 flex flex-col dark:text-black'
                action={async (formData) => {
                    const {data, error} = await SendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email was sent successfully!")
                }}
            >
                <input
                    type='email'
                    name='senderEmail'
                    className='h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                    placeholder='Your email'
                    required maxLength={500} />
                <textarea
                    name='message'
                    className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                    placeholder='Your message'
                    required
                    maxLength={5000} />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
