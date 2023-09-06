import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

interface CardProductProps {
  productImage: string
  productName: string
  productPrice: string
  customClass: string
  productId: string
  reference: string
}

export const CardProduct = ({
  productImage,
  productName,
  customClass,
  productPrice,
  productId,
  reference,
}: CardProductProps) => {
  return (
    <Link href={`/product/${reference}`} key={productId}>
      <div
        className={twMerge(
          `card-product group relative flex cursor-pointer flex-col`,
          `items-center justify-center rounded-lg bg-gradient-to-b from-gradientGreen to-gradientPurple`,
          `p-1 shadow-md ${customClass}`,
        )}
      >
        <Image
          src={productImage}
          width={520}
          height={480}
          alt=""
          className="object-cover"
        />
        <footer
          className={twMerge(
            'translateY-110 absolute bottom-1 left-1 right-1 flex transform items-center ',
            'justify-between rounded-md bg-footerBackground p-8 opacity-0',
            'transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100',
          )}
        >
          <strong className="text-lg text-gray300">{productName}</strong>
          <span className="text-base font-bold text-green500">
            {productPrice}
          </span>
        </footer>
      </div>
    </Link>
  )
}
