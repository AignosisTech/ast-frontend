import React, { useState } from 'react';

const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: "How many sessions should I choose for my child?",
            answer:
                "The number of sessions depends on your child's specific needs and goals. Our team can help guide you to select the ideal package based on an initial consultation.",
        },
        {
            question: "Are your prices competitive with in-person therapy costs?",
            answer:
                "Yes, our online sessions are designed to be affordable and often cost less than in-person therapy while maintaining high standards of care and convenience.",
        },
        {
            question: "How long is the validity of my purchased sessions?",
            answer:
                "Purchased sessions are valid for six months, giving you the flexibility to schedule them at your convenience within that period.",
        },
        {
            question: "What are the payment options available?",
            answer:
                "We accept credit/debit cards, bank transfers, and various secure online payment methods. Details are provided at checkout for easy payment processing.",
        },
        {
            question: "I completed the payment but haven’t received a confirmation. What should I do?",
            answer:
                "If you haven’t received a confirmation, please allow a few minutes. If the issue persists, contact our support team for assistance.",
        },
    ];

    return (
        <>
            <div className='bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center p-6'>
                <h2 className="text-[#F6E8FB] text-[40px] font-bold font-manrope">Frequently Asked Questions</h2>
                <div className=" w-[55vw] max-sm:w-auto bg-[#564A5957] rounded-3xl p-8  mx-auto mt-10">
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-gray-400">
                                <div
                                    onClick={() => toggleQuestion(index)}
                                    className="flex items-center justify-between py-4 cursor-pointer"
                                >
                                    <p className="text-lg text-[#F6E8FB] font-raleway">{index + 1}. {item.question}</p>
                                    <button className="text-xl font-semibold text-gray-300">
                                        {openQuestion === index ? "−" : "+"}
                                    </button>
                                </div>
                                {openQuestion === index && (
                                    <p className="text-gray-300 font-montserrat text-sm mt-2 mb-4">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8 text-gray-400 cursor-pointer">View All</div>
                </div>
            </div>
        </>
    );
}

export default Faq;
