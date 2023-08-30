"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
    {
        id: 1,
        title: "always fresh & always tasty",
        image: "/slide1.jpg",
        alt: "burger",
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in Surabaya",
        image: "/slide2.jpg",
        alt: "burger and fries delivery",
    },
    {
        id: 3,
        title: "the best fried mix to share with your family & friends",
        image: "/slide3.jpg",
        alt: "special mix",
    },
    {
        id: 4,
        title: "Try our italian pasta",
        image: "/slide4.jpg",
        alt: "bolognese",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(
                currentSlide === data.length - 1 ? 0 : currentSlide + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    });
    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-100">
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold p-4">
                <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
                    {data[currentSlide].title}
                </h1>
                <button className="bg-red-500 text-white py-4 px-8 border-x-2 rounded-full">
                    Order Now
                </button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="w-full relative flex-1">
                <Image
                    src={data[currentSlide].image}
                    alt={data[currentSlide].alt}
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
};

export default Slider;
