"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();
  const handleRoute = (id: number) => {
    router.push(`/products/${id}`);
  };
  return (
    <div>
      products
      <Button onClick={() => handleRoute(1)}>محصول ۱</Button>
      <Button onClick={() => handleRoute(2)}>محصول ۲</Button>
    </div>
  );
}
