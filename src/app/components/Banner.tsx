import React from "react";

export default function Banner() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7">
            <div className="absolute inset-0 opacity-20">
                <img src="https://as2.ftcdn.net/v2/jpg/08/36/84/47/1000_F_836844719_StLMz78Zmd2gcfAQmn4Z0HVjkGrr0G4H.jpg"
                    alt="delicious burger banner"
                    className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
                <h2 className="text-white sm:text-5xl font-bold mb-4">
                    Discover our Menu
                </h2>
                <p className="test-white text-lg text-center mb-6m max-w-xl">
                    shop Now For Exclusive burger Discount!
                </p>
                <button
                    type="button"
                    className="bg-blue-900 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-xl hover:bg-blue-500 transition duration-300" >
                    Exciting Deals Launch at 12PM!


                </button>


            </div>

        </div>

    )
}