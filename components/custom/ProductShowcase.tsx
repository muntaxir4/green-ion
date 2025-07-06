"use client";

import { useRecoilValue } from "recoil";
import { isLoggedIn } from "@/store/atom";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "./products/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductShowcase() {
  const loggedIn = useRecoilValue(isLoggedIn);
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div id="products" className="m-2 p-2">
      <h2 className="text-center font-semibold text-2xl m-2 mb-4">
        Our Lithium Products
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        Premium lithium products from Kashmir's untapped reserves
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featuredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            showPricing={loggedIn} 
          />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link href="/products">
          <Button size="lg">
            View All Products
          </Button>
        </Link>
      </div>
    </div>
  );
}