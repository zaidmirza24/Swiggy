import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ data }) => {
  return (
    <div
      className='min-w-[250px] bg-white rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105'
    >
      <div className='relative h-[150px]'>
        {/* Image */}
        <img
          className='object-cover w-full h-full'
          src={`http://localhost:5000/images/${data.image}`}
          alt={data.title}
        />

        {/* Black gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>

        {/* Offer text */}
        {data.offer && (
          <div className=' absolute bottom-2 left-2 text-white text-base font-bold'>
            {data.offer}
          </div>
        )}
      </div>

      <div className='p-3'>
        <h2 className='font-bold text-lg'>{data.title}</h2>
        <div className='flex items-center gap-1 text-sm text-gray-600 mt-1'>
          <FaStar className='text-green-600 text-base' />
          <span className='font-medium text-black'>{data.rating}</span>
          <span className='font-bold'>• {data.minTime}-{data.maxTime} mins</span>
        </div>
        <p className='text-sm text-gray-600 mt-1'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.place}</p>
      </div>
    </div>
  );
};

export default Card;
