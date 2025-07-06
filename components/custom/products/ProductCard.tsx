"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { cartItems, CartItem } from "@/store/atom";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

interface ProductCardProps {
  product: Product;
  showPricing: boolean;
}

export default function ProductCard({ product, showPricing }: ProductCardProps) {
  const [cart, setCart] = useRecoilState(cartItems);
  const [quantity, setQuantity] = useState(product.minOrder);

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

  const addToCart = () => {
    const existingItem = cart.find(item => item.productId === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.productId === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      const newItem: CartItem = {
        productId: product.id,
        name: product.name,
        price: product.pricePerUnit,
        quantity: quantity,
        unit: product.unit,
        image: product.image
      };
      setCart([...cart, newItem]);
    }
    
    // Reset quantity to minimum order
    setQuantity(product.minOrder);
    
    // Show success toast
    toast.success(`Added ${quantity} ${product.unit.includes('unit') ? 'units' : 'MT'} of ${product.name} to cart!`);
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= product.minOrder) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
          <Image 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full"
            width={400}
            height={300}
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
          {showPricing && (
            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium">Quantity:</label>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(quantity - 1)}
                  disabled={quantity <= product.minOrder}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => updateQuantity(parseInt(e.target.value) || product.minOrder)}
                  className="w-20 text-center"
                  min={product.minOrder}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Total: {formatPrice(product.pricePerUnit * quantity)}
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
          <Button className="flex-1" onClick={addToCart}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}