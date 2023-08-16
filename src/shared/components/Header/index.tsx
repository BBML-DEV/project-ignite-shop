import React from 'react'
import LogoImg from "@/assets/logo.svg"

export const Header = () => {
  return (
    <header className='py-2 w-full max-w-container my-0 mx-auto'>
        <img src={LogoImg.src} alt="" />
    </header>
  )
}
