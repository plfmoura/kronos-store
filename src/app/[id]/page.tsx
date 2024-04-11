/* eslint-disable react-hooks/rules-of-hooks */
import ProductDetails from "./ui/ProductDetails";

export default function page({ params }: { params: { id: string } }) {

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <ProductDetails id={params.id}/>
    </main>

  )
}

