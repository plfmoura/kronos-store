import Headline from "@/components/Headline";
import ProductsHome from "@/components/home/ProductsHome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Headline />
      <ProductsHome />
    </main>
  );
}
