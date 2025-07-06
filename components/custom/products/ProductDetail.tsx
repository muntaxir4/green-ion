"use client";

import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import { isLoggedIn, cartItems, CartItem } from "@/store/atom";
import { getProductById } from "@/lib/products";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, ArrowLeft, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const loggedIn = useRecoilValue(isLoggedIn);
  const [cart, setCart] = useRecoilState(cartItems);
  const router = useRouter();
  const product = getProductById(productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Set initial quantity to minimum order when component loads
  useState(() => {
    setQuantity(product.minOrder);
  });

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Crore`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} Lakh`;
    } else if (price >= 1000) {
      return `₹${(price / 1000).toFixed(1)}K`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'in-stock': return 'bg-green-500';
      case 'limited': return 'bg-yellow-500';
      case 'pre-order': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
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
    
    // Show success message or redirect to cart
    router.push('/cart');
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= product.minOrder) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => router.back()}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <Badge className={getAvailabilityColor(product.availability)}>
                {product.availability}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              {product.description}
            </p>
            
            {loggedIn && (
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary mb-2">
                  {formatPrice(product.pricePerUnit)}
                </p>
                <p className="text-muted-foreground">{product.unit}</p>
                <p className="text-sm text-muted-foreground">
                  Minimum order: {product.minOrder} {product.unit.includes('unit') ? 'units' : 'MT'}
                </p>
              </div>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between">
                  <span className="font-medium">Origin:</span>
                  <span className="text-muted-foreground">{product.origin}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {loggedIn ? (
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Quantity:</label>
                      <div className="flex items-center space-x-2 mt-2">
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
                          className="w-24 text-center"
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
                      <p className="text-sm text-muted-foreground mt-2">
                        Total: {formatPrice(product.pricePerUnit * quantity)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
                <Button size="lg" className="flex-1" onClick={addToCart}>
                <Button variant="outline" size="lg">
                  Request Quote
                </Button>
              </Link>
            </div>
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground mb-4">
                  Please login to view pricing and place orders
                </p>
                <Link href="/login">
                  <Button className="w-full">Login to Continue</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}