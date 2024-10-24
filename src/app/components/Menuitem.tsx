import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
    const productImages = [
        "https://img.freepik.com/premium-photo/hamburger-with-cheese-tomato-sauce-it_339895-449.jpg?w=740",
        "https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-cheese-tomato-generative-ai_188544-8466.jpg?t=st=1729715193~exp=1729718793~hmac=575f1d46987a2c363ee993436b7fd19faec82708ca774430ede7e3ada2cb4009&w=740",
        "https://img.freepik.com/premium-photo/floating-hamburger-with-meat-cheese-tomatoes-lettuce-splash-sauce-isolated-dark-backgroun_1049834-1572.jpg?w=740",
        "https://img.freepik.com/free-photo/grilled-gourmet-cheeseburger-sesame-seed-bun-generated-by-ai_188544-25972.jpg?t=st=1729718603~exp=1729722203~hmac=9b2669a6a90f76196a441977d58412df11cbde5c39bfd1c2d4cda098bb3c508b&w=740",
        "https://img.freepik.com/premium-photo/delicious-burger-with-fresh-ingredients-tasty-cheeseburger-splash-sauce_1206137-184.jpg?w=740",
        "https://img.freepik.com/free-photo/view-3d-burger-meal-with-french-fries_23-2150914759.jpg?t=st=1729715413~exp=1729719013~hmac=6295feb317c453862aa3963f5de2149a92f1ae4eb2675b64552cb9fe08799b14&w=826",
    ];

    return (
        <div className="relative text-center p-4 md:p-10">
            <div className="absolute inset-0"
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-vector/restaurant-mural-wallpaper-concept_23-2148671800.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.1,
                }} 
            />
            <h1 className="font-bold sm:text-2xl md:text-4xl mb-4 text-white z-10 relative"> Most Requested Items</h1>
            <h1 className="sm:text-xl md:text-3xl text-white z-10 relative">Order Now..</h1>
            <section 
                id="project"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-10 gap-x-5 md:gap-y-20 md:gap-x-14 mt-10 mb-5"
            >
                {Array.from({ length: 6 }).map((_, index) => (
                    <div 
                        key={index}
                        className="w-full sm:w-60 md:w-70 lg:w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
                    >
                        <a href="#">
                            <img 
                                src={productImages[index]} 
                                alt={`product ${index + 1}`}
                                className="w-full h-auto object-cover rounded-t-xl" 
                            />
                            <div className="px-4 py-3 w-full">
                                <span className="text-slate-500 mr-3 uppercase text-xs">Category</span>
                                <p className="text-lg font-bold text-red-700 truncate block capitalize">Burger Name {index + 1}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black my-3 cursor-auto">$149</p>
                                    <del>
                                        <p className="text-sm text-blue-800 cursor-auto ml-2">$199</p>
                                    </del>
                                    <div className="ml-auto">
                                        <FaShoppingCart className="w-5 h-5 text-blue-800" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProductCardGrid;
