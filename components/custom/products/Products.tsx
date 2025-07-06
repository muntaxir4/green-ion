"use client";

import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isLoggedIn } from "@/store/atom";
import { PRODUCTS, getProductsByCategory } from "@/lib/products";
import ProductCard from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Products() {
  const loggedIn = useRecoilValue(isLoggedIn);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts = selectedCategory === "all" 
    ? PRODUCTS 
    : getProductsByCategory(selectedCategory);

  if (!loggedIn) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Lithium Products</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Premium lithium products from Kashmir's untapped reserves
          </p>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Login Required</CardTitle>
              <CardDescription>
                Please login to view pricing and place orders
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} showPricing={false} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Our Lithium Products</h1>
        <p className="text-lg text-muted-foreground">
          Premium lithium products from Kashmir's untapped reserves
        </p>
      </div>

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="raw-lithium">Raw Lithium</TabsTrigger>
          <TabsTrigger value="processed">Processed</TabsTrigger>
          <TabsTrigger value="battery">Batteries</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} showPricing={true} />
        ))}
      </div>
    </div>
  );
}