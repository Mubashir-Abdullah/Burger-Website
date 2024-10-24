'use client'
import React from "react";

type offer = {
    title: string,
    description: string,
}

const specialoffers: React.FC = () => {
    const offers: offer[] = [
        {
            title: 'Happy Hour',
            description: 'SPM se 7pm tk tamam drinks par  50%  off hasil kren'
        },

        {
            title: 'Happy Meal Deal',
            description: '2 main courses order karen aur famiy deal coupon hasil kren'
        },
        {
            title: 'Weekly Brunch',
            description: 'EK complimentry drink la luft utaen'
        },
    ];

    const handleofferClick = (description: string) => {
        alert(description);
    }
    return (
        <section className="py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-white ">Special offer,s</h2>
                <div className="grid grid-cols-1 md:grid-col-2 lg-grid-col-3 gap-6" >
                    {offers.map((offer, index) => (
                        <button key={index}
                            onClick={() => handleofferClick(offer.description)}
                            className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold text-red-700">{offer.title}</h3>
                            <p className="text-cyan-700 mt-3">{offer.description}</p>
                        </button>
                    )
                    )}
                </div>
            </div>
        </section>
    )
}

export default specialoffers