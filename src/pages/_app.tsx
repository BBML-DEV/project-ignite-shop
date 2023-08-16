import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LogoImg  from "@/assets/logo.svg"



export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col items-start min-h-screen justify-center'>
      <header className='py-2 w-full max-w-container my-0 mx-auto'>
        <img src={LogoImg.src} alt="" />
      </header>
      <Component {...pageProps} />
    </div>
  )
}
