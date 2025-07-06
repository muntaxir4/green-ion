"use client";

import { Product } from "@/lib/products";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  showPricing: boolean;
}

export default function ProductCard({ product, showPricing }: ProductCardProps) {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'in-stock': return 'bg-green-500';
      case 'limited': return 'bg-yellow-500';
      case 'pre-order': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    } else if (price >= 1000) {
      return `₹${(price / 1000).toFixed(1)}K`;
    }
    return `₹${price}`;
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <Badge className={getAvailabilityColor(product.availability)}>
            {product.availability}
          </Badge>
        </div>
        <CardDescription className="text-sm">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            <strong>Origin:</strong> {product.origin}
          </p>
          {product.purity && (
            <p className="text-sm text-muted-foreground">
              <strong>Purity:</strong> {product.purity}
            </p>
          )}
          {showPricing && (
            <div className="mt-4">
              <p className="text-2xl font-bold text-primary">
                {formatPrice(product.pricePerUnit)}
              </p>
              <p className="text-sm text-muted-foreground">{product.unit}</p>
              <p className="text-xs text-muted-foreground">
                Min order: {product.minOrder} {product.unit.includes('unit') ? 'units' : 'MT'}
              </p>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Link href={`/product/${product.id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </Link>
        {showPricing && (
          <Button className="flex-1">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}