import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const scrollRef = useRef(null); // 🔹 1. create scroll container ref

    const fetchCategory = async () => {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategories(data);
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    // 🔹 2. scroll functions
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -160, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 160, behavior: 'smooth' });
    };

    return (
        <div id='category' className=' shadow-2xs max-w-[1200px] mx-auto mt-28'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>What's on your Mind?</h1>
                <div className='flex gap-2'>
                    <button
                        onClick={scrollLeft}
                        className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex justify-center items-center'
                    >
                        <FaArrowLeftLong className='text-lg' />
                    </button>
                    <button
                        onClick={scrollRight}
                        className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex justify-center items-center'
                    >
                        <FaArrowRight className='text-lg' />
                    </button>
                </div>
            </div>

            {/* 🔹 3. scrollable container */}
            <div
                ref={scrollRef}
                className='flex gap-4 overflow-hidden mt-4 no-scrollbar'
            >
                {categories.map((cat, index) => (
                    <div key={index} className='min-w-[150px]'>
                        <img
                            src={"http://localhost:5000/images/" + cat.image}
                            className='w-full h-auto object-contain'
                            alt={`category-${index}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
