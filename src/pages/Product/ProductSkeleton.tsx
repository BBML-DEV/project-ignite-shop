import React from 'react'
import { twMerge } from 'tailwind-merge'

const ProductSkeleton = () => {
  return (
    <main className="mx-auto mb-0 mt-8 grid w-full max-w-container grid-cols-2 items-stretch gap-16">
      <div
        className={twMerge(
          'flex h-[calc(656px-0.5rem)] w-full max-w-xl items-center',
          'animate-pulse justify-center rounded-lg bg-gray-700',
          'object-cover p-1',
        )}
      ></div>

      <div className="flex flex-col ">
        <div className="mb-4 h-12 w-2/3 animate-pulse rounded bg-gray-700 text-[2rem] text-gray-700"></div>
        <div className="mt-4 h-8 w-1/2 animate-pulse rounded bg-gray-700 text-[2rem] text-gray-700"></div>
        <div className="mt-4 h-32 w-4/5 animate-pulse rounded bg-gray-700 text-base text-gray-700"></div>
        <button className="mt-auto cursor-pointer rounded-lg bg-gray-700 p-9 font-bold text-gray-300 hover:bg-gray-200"></button>
      </div>
    </main>
  )
}

export default ProductSkeleton
