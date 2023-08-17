import Image from 'next/image';
import React from 'react';

interface CardProductProps {
  productImage: StaticImageData; // Use StaticImageData para tipar imagens importadas
  productName: string;
}

export const CardProduct = ({ productImage, productName }: CardProductProps) => {
  return (
    <div className='p-1 rounded-lg bg-gradient-to-b from-gradientGreen to-gradientPurple shadow-md "]'>
      <Image src={productImage} width={520} height={480} alt="" />
      <footer className='flex flex-row justify-between py-8 px-10 bg-gray800 rounded-md'>
        <strong className='text-sm text-gray300'>{productName}</strong>
        <span className='font-normal text-base text-green300'>R$ 79,90</span>
      </footer>
    </div>
  );
};
