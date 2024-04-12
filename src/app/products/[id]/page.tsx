/* eslint-disable react-hooks/rules-of-hooks */
import ProductsShortcut from "@/components/products/ProductsShortcut";
import ProductDetails from "../../../components/products/ProductDetails";

export default function page({ params }: { params: { id: string } }) {

  return (
    <main className="flex min-h-screen flex-col items-center p-10 gap-10">
      <ProductDetails id={params.id} />
      <ProductsShortcut quantity={4} />
    </main>
  )
}

