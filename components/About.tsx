"use client";
import React, {useEffect} from 'react'
import SectionHeading from './Section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';


export default function About() {

    const { ref } = useSectionInView("About");

    return (
        <motion.section 
            className='mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28 sm:mb-40'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{ delay: 0.175 }}
            id="about"
            ref={ref}
        >
            <SectionHeading title="About me!" />
            <p
                className='mb-3'
            >
                After graduating from high school in communication from the school,
                I decided to pursue my passion for programming.
                I enrolled in the Programming Technician career where I learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Node.js, and PostgreSQL
                </span>
                . I am also familiar with TypeScript and Prisma. I am always looking to
                learn new technologies. I currently work for 
                <span className="font-medium"> Identity on Field</span>,
                 in a full time position as a software developer.
            </p>
            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and going to the gym. I also enjoy{" "}
                <span className="font-medium">learning new things</span>.
            </p>
        </motion.section>
    )
}
