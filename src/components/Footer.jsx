import React from 'react';

const Footer = () => {
  return (
    <div id='Footer' className=' flex gap-50  max-w-[1200px] mx-auto py-6 border-t'>
      <div className=' text-center'>
        <div className='flex justify-center items-center'>
        <img
          className='h-15 w-15 mx-auto  mb-2 rounded-xl'
          src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ"
          alt="Swiggy Logo"
        />
        <h1 style={{ color: '#fc8019' }} className='ml-3 text-2xl font-bold'>Swiggy</h1>
        </div>
        <h3 className='text-sm text-gray-600'>© 2025 Swiggy Limited</h3>
      </div>
      <ul className='space-y-2'>
      <div className='mt-5 my-2  font-bold'>Company</div>
        <li>About us</li>
        <li>Swiggy Corporate</li>
        <li>Teams</li>
        <li>Swiggy One</li>
        <li>Swiggy Instamart</li>
        <li>Swiggy Dineout</li>
        <li>Swiggy Genie</li>
      </ul>
      <ul className='space-y-2'>
      <div className='mt-5 my-2  font-bold'>Contact us</div>
        <li>Help & Support</li>
        <li>Partner with us</li>
        <li>Ride with us</li>
        
      </ul>
      <ul className='space-y-2'>
      <div className='mt-5 my-2  font-bold'>Availaible in:</div>
        <li>Pune</li>
        <li>Mumbai</li>
        <li>Banglore</li>
        <li>Hyderabad</li>
        <li>Delhi</li>
        <li>Chennai</li>
        <li>Swiggy Genie</li>
      </ul>
    </div>
  );
}

export default Footer;
