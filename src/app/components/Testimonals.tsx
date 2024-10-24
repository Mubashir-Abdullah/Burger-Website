import React from "react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "This burger place has the best burgers I've ever tasted! The service is quick, and the quality is top-notch.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Jane Smith",
            feedback: "I’m a regular customer now! The variety and freshness of the burgers are what keeps me coming back.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Mike Johnson",
            feedback: "Amazing experience! The delivery was super fast, and the burger was still warm and delicious. Highly recommended!",
            image: "https://randomuser.me/api/portraits/men/47.jpg",
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <h2 className="text-center text-3xl font-bold mb-8">What Our Customers Say</h2>
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto px-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                        <img 
                            src={testimonial.image} 
                            alt={`${testimonial.name}'s photo`} 
                            className="w-20 h-20 rounded-full mb-4"
                        />
                        <p className="text-lg font-semibold mb-2">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
