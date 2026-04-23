"use client";

import { useState } from "react";
import { useProductStore, type Product } from "../store/useProductStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProductItem({ product }: { product: Product }) {
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const updateQuantity = useProductStore((state) => state.updateQuantity);
  const [draft, setDraft] = useState(String(product.quantity));

  return (
    <tr className="border-b border-zinc-200 hover:bg-zinc-50">
      <td className="px-8 py-4 text-lg font-medium text-zinc-900">{product.name}</td>
      <td className="px-8 py-4 text-lg text-zinc-900">${product.price.toFixed(2)}</td>
      <td className="px-8 py-4">
        <Input
          type="number"
          min={0}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="w-24 h-10 text-lg"
        />
      </td>
      <td className="px-8 py-4">
        <Button
          variant="destructive"
          size="sm"
          onClick={() => deleteProduct(product.id)}
          aria-label={`Remove ${product.name}`}
        >
          Remove
        </Button>
      </td>
    </tr>
  );
}
