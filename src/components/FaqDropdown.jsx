import React from 'react'
import { useState } from 'react';
import { Questions } from '../assets/Questions';
import Question from './Question';

export default function FaqDropdown() {
    const [question] = useState(Questions);
    return (
        <>
            <section className="mx-auto max-w-7xl px-2 md:px-0">
                {question.map((question, index) => {
                    return <Question {...question} key={index} />
                })}
            </section>
            
        </>
    )
}