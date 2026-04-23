"use client";

import { useProductStore } from "../store/useProductStore";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const products = useProductStore((state) => state.products);
  const getTotal = useProductStore((state) => state.getTotal);
  const hydrated = useProductStore((state) => state.hydrated);

  if (!hydrated) return null;

  const total = getTotal();

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-red-600 text-white px-8 py-6">
        <h1 className="text-4xl font-bold">Cart</h1>
      </div>

      {products.length === 0 ? (
        <p className="px-8 py-10 text-center text-zinc-500">
          Your cart is empty.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-zinc-200">
                <th className="px-8 py-4 text-left text-xl font-bold text-zinc-900">Product</th>
                <th className="px-8 py-4 text-left text-xl font-bold text-zinc-900">Price</th>
                <th className="px-8 py-4 text-left text-xl font-bold text-zinc-900">Quantity</th>
                <th className="px-8 py-4 text-left text-xl font-bold text-zinc-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </tbody>
          </table>
          <div className="border-t-2 border-zinc-200 px-8 py-6 flex justify-end">
            <div className="text-right">
              <div className="mb-2 text-lg font-semibold text-zinc-900">
                Total: <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
