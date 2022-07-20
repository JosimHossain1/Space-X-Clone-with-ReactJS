import React from 'react';

const Footer = () => {

    const FooterItems =  [
        {name : "Twitter"},
        {name : "YouTube"},
        {name : "Instagram"},
        {name : "Flickr"},
        {name : "LinkedIn"},
        {name : "Privacy Policy"},
        {name : "Supplies"}
    ];

    return (
        <div className='bg-black '>
            <ul className='flex justify-center items-center text-white py-6'>
                <li className='mr-6 text-gray-400 text-[12px] cursor-pointer'> SPACEX &copy; 2022</li>
            {
                FooterItems.map((item, index) => (
                    <li className='list-none pr-6 text-[13px] uppercase font-semibold cursor-pointer' key={index}>{item.name}</li>
                ))
            }
            </ul>
        </div>
    );
};

export default Footer;