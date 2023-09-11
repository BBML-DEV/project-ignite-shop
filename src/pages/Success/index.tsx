import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Stripe from 'stripe'
import { twMerge } from 'tailwind-merge'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

const Success = ({ customerName, product }: SuccessProps) => {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="mx-auto flex h-[656px] w-full max-w-[590px] flex-col items-center justify-center">
        <h1 className="text-[32px] font-bold text-gray100">Compra efetuada!</h1>
        <div
          className={twMerge(
            'flex h-36 w-full max-w-[130px] flex-col items-center justify-center',
            'mb-8 mt-16 px-[6.174px] py-[19.45px]',
            'rounded-lg bg-gradient-to-b from-gradientGreen to-gradientPurple',
          )}
        >
          <Image src={product.imageUrl} width={120} height={110} alt="" />
        </div>

        <p className="text-center text-2xl font-normal text-gray300">
          Uhuul <span className="font-bold">{customerName}</span>,{' '}
          <span className="font-bold">sua {product.name}</span> já está a
          caminho da sua casa.{' '}
        </p>

        <Link
          href="/"
          className="mt-[88px] text-xl font-bold text-green500 hover:text-green300"
        >
          Voltar ao catálogo
        </Link>
      </main>
    </>
  )
}

export default Success

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const response = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = response.customer_details?.name || 'Cliente'
  const product = (response.line_items?.data[0]?.price
    ?.product as Stripe.Product) || {
    name: 'Produto',
    images: [''],
  }
  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
