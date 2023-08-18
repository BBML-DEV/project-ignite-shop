import React from 'react'
import LogoImg from '@/assets/logo.svg'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="mx-auto my-0 w-full max-w-container py-2">
      <Image src={LogoImg} alt="" />
    </header>
  )
}
