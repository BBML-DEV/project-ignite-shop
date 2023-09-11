import { stripe } from '@/lib/stripe'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { twMerge } from 'tailwind-merge'
import { ProductSkeleton } from './ProductSkeleton'
import axios from 'axios'
import { useState } from 'react'
import Head from 'next/head'

export interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  const { isFallback } = useRouter()

  if (isFallback) {
    return <ProductSkeleton />
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <main className="mx-auto mb-0 mt-8 grid max-w-container grid-cols-2 items-stretch gap-16">
        <div
          className={twMerge(
            'flex h-[calc(656px-0.5rem)] w-full max-w-xl items-center',
            'justify-center rounded-lg bg-gradient-to-b from-gradientGreen to-gradientPurple',
            'object-cover p-1',
          )}
        >
          <Image src={product.imageUrl} width={520} height={520} alt="" />
        </div>

        <div className="flex flex-col ">
          <h1 className="text-[2rem] text-gray300">{product.name}</h1>
          <span className="mt-4 block text-[2rem] text-green300">
            {product.price}
          </span>

          <p className="mt-4 block text-base text-gray300">
            {product.description}
          </p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
            className={twMerge(
              'mt-auto cursor-pointer rounded-lg border-0 ',
              'bg-green500 p-5 font-bold text-white',
              'hover:bg-green300 disabled:cursor-not-allowed disabled:opacity-75',
            )}
            type="button"
          >
            Comprar agora
          </button>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_OTSrnvuTjPV0Ab' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params || !params.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount ? price.unit_amount / 100 : 0),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
