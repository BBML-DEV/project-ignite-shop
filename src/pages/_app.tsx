import { Header } from '@/shared/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'




export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col items-start min-h-screen justify-center'>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
