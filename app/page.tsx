import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-100 font-sans min-h-screen py-8 px-4">
      <main className="flex flex-1 w-full flex-col items-center">
        <ProductList />
      </main>
    </div>
  );
}
