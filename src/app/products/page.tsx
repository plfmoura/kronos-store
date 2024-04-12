import Promotion from "@/components/Promotion";
import ProductsGallery from "../../components/products/ProductsGallery";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
        <Promotion />
        <ProductsGallery />
    </main>

  )
}
