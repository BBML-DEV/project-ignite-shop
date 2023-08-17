import Image from "next/image";
import Camiseta1 from "@/assets/1.png"
import Camiseta2 from "@/assets/2.png"
import Camiseta3 from "@/assets/3.png"
import { CardProduct } from "@/shared/components/CardProduct";

export default function Home() {
  return (
   <main className="flex flex-row w-full max-w-homeContainer gap-12 ml-auto mt-8">
    <CardProduct productImage={Camiseta1} productName="Produto1"/>
    <CardProduct productImage={Camiseta2} productName="Produto2"/>
    <CardProduct productImage={Camiseta3} productName="Produto3"/>
   </main>
  )
}
