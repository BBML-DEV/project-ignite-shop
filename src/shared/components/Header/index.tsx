import React from 'react'
import LogoImg from "@/assets/logo.svg"
import Image from 'next/image'

export const Header = () => {
  return (
    <header className='py-2 w-full max-w-container my-0 mx-auto'>
        <Image src={LogoImg} alt=""/>
    </header>
  )
}
