import { stripe } from '@/lib/stripe'
import { CardProduct } from '@/shared/components/CardProduct'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'

export interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <main
      ref={slideRef}
      className="keen-slider ml-auto mt-8 flex min-h-[656px] w-full max-w-homeContainer flex-row"
    >
      {products.map((product) => {
        return (
          <CardProduct
            productImage={product.imageUrl}
            productName={product.name}
            productPrice={product.price}
            customClass="keen-slider__slide"
            productId={product.id}
            reference={product.id}
          />
        )
      })}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
