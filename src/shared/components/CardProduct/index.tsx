import Image from 'next/image';
import React from 'react';

interface CardProductProps {
  productImage: StaticImageData;
  productName: string;
  customClass: string;
}

export const CardProduct = ({ productImage, productName, customClass}: CardProductProps) => {
  return (
    <a className={`flex flex-col 
    items-center 
    relative justify-center 
    cursor-pointer p-1 
    rounded-lg bg-gradient-to-b from-gradientGreen 
    to-gradientPurple 
    shadow-md group 
    card-product ${customClass}`}
    >
      <Image src={productImage} width={520} height={480} alt="" className='object-cover' />
      <footer className='flex justify-between items-center transform translateY-110 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 absolute bottom-1 left-1 right-1 p-8 bg-footerBackground rounded-md'>
        <strong className='text-lg text-gray300'>{productName}</strong>
        <span className='font-bold text-base text-green500'>R$ 79,90</span>
      </footer>
    </a>
  );
};
