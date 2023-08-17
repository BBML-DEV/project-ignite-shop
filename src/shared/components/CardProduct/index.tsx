import Image from 'next/image';
import React from 'react';

interface CardProductProps {
  productImage: StaticImageData; // Use StaticImageData para tipar imagens importadas
  productName: string;
}

export const CardProduct = ({ productImage, productName }: CardProductProps) => {
  return (
    <div>
      <Image src={productImage} width={520} height={480} alt="" />
      <footer>
        <strong>{productName}</strong>
        <span>R$ 79,90</span>
      </footer>
    </div>
  );
};
