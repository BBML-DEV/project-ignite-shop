import Camiseta1 from '@/assets/1.png'
import Camiseta2 from '@/assets/2.png'
import Camiseta3 from '@/assets/3.png'
import Camiseta4 from '@/assets/4.png'
import { CardProduct } from '@/shared/components/CardProduct'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Home() {
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
      <CardProduct
        productImage={Camiseta1}
        productName="Produto1"
        customClass="keen-slider__slide"
      />
      <CardProduct
        productImage={Camiseta2}
        productName="Produto2"
        customClass="keen-slider__slide"
      />
      <CardProduct
        productImage={Camiseta3}
        productName="Produto3"
        customClass="keen-slider__slide"
      />
      <CardProduct
        productImage={Camiseta4}
        productName="Produto4"
        customClass="keen-slider__slide"
      />
    </main>
  )
}
