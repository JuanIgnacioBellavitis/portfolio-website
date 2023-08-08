import React from 'react'

export default function SectionHeading({title}: {title: string}) {
    return (
        <h2
            className='text-2xl !leading-[1.5] font-medium capitalize mb-8'
        >
            {title}
        </h2>
    )
}
