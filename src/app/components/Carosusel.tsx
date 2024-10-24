import React from "react";

export default function Carousel(): JSX.Element {
    return (
        <div>
            <section className="bg-gradient-to-r from-black to-gray-700">
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
                            <a href="#"
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://media.istockphoto.com/id/495204032/photo/fresh-tasty-burger.jpg?s=1024x1024&w=is&k=20&c=QZM9s-dFrWW6uIteg19_t8BCBFLdo-_kBOj6Mb46ST8="
                                    alt="Burger 1"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                    Classic Basic
                                </h3>
                            </a>
                        </div>

                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700">
                            <a href="#"
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <img src="https://as1.ftcdn.net/v2/jpg/08/19/91/24/1000_F_819912413_dYZzO1UhLqdhLCG615r7SoRzDYM8hv0d.jpg"
                                    alt="Burger 2"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                    Gourmet Grills
                                </h3>
                            </a>

                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                <a href="#"
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="https://img.freepik.com/free-photo/view-delicious-burger-with-buns-cheese_23-2150887889.jpg"
                                        alt="Burger 3"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                        Spicy Masala
                                    </h3>
                                </a>

                                <a href="#"
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pt-40">
                                    <img src="https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg"
                                        alt="Burger 4"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                        Veggle
                                    </h3>
                                </a>
                            </div>
                        </div>

                        <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
                            <a href="#"
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg"
                                    alt="Burger 5"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                    Cheesy Deli
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
