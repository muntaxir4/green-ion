"use client";

import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartItems, userEmail, userOrders, isCheckingOut, Order } from "@/store/atom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CreditCard, Truck } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface ShippingAddress {
  company: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export default function Checkout() {
  const [cart, setCart] = useRecoilState(cartItems);
  const [orders, setOrders] = useRecoilState(userOrders);
  const [checking, setChecking] = useRecoilState(isCheckingOut);
  const email = useRecoilValue(userEmail);
  const router = useRouter();

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    company: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    pincode: ""
  });

  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    } else if (price >= 1000) {
      return `₹${(price / 1000).toFixed(1)}K`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const generateOrderId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ORD-${timestamp}-${random}`;
  };

  const generateTrackingNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    return `GI${timestamp}`;
  };

  const calculateEstimatedDelivery = () => {
    const today = new Date();
    const deliveryDate = new Date(today.getTime() + (21 * 24 * 60 * 60 * 1000)); // 21 days from now
    return deliveryDate.toISOString().split('T')[0];
  };

  const handlePlaceOrder = async () => {
    if (!shippingAddress.company || !shippingAddress.address || !shippingAddress.city) {
      toast.error("Please fill in all required shipping information");
      return;
    }

    setChecking(true);

    try {
      // Simulate order processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      const newOrder: Order = {
        id: generateOrderId(),
        customerEmail: email,
        products: cart.map(item => ({
          productId: item.productId,
          name: item.name,
          quantity: item.quantity,
          priceAtTime: item.price,
          unit: item.unit
        })),
        totalAmount: getTotalAmount(),
        status: 'confirmed',
        orderDate: new Date().toISOString().split('T')[0],
        estimatedDelivery: calculateEstimatedDelivery(),
        shippingAddress,
        trackingNumber: generateTrackingNumber()
      };

      // Add order to user's orders
      setOrders(prevOrders => [newOrder, ...prevOrders]);

      // Clear cart
      setCart([]);

      toast.success("Order placed successfully! Redirecting to dashboard...");

      // Redirect to dashboard after a short delay
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);

    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    } finally {
      setChecking(false);
    }
  };

  if (cart.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={() => router.back()}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Cart
      </Button>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shipping Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Shipping Information
              </CardTitle>
              <CardDescription>
                Enter your delivery address details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Company Name *</label>
                <Input
                  value={shippingAddress.company}
                  onChange={(e) => setShippingAddress(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Your company name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Address *</label>
                <Textarea
                  value={shippingAddress.address}
                  onChange={(e) => setShippingAddress(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Street address, building, floor"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">City *</label>
                  <Input
                    value={shippingAddress.city}
                    onChange={(e) => setShippingAddress(prev => ({ ...prev, city: e.target.value }))}
                    placeholder="City"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">State *</label>
                  <Input
                    value={shippingAddress.state}
                    onChange={(e) => setShippingAddress(prev => ({ ...prev, state: e.target.value }))}
                    placeholder="State"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Country</label>
                  <Input
                    value={shippingAddress.country}
                    onChange={(e) => setShippingAddress(prev => ({ ...prev, country: e.target.value }))}
                    placeholder="Country"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">PIN Code</label>
                  <Input
                    value={shippingAddress.pincode}
                    onChange={(e) => setShippingAddress(prev => ({ ...prev, pincode: e.target.value }))}
                    placeholder="PIN Code"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="bank-transfer"
                    checked={paymentMethod === "bank-transfer"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>Bank Transfer (Recommended for B2B)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="credit-terms"
                    checked={paymentMethod === "credit-terms"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>30-Day Credit Terms</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="letter-of-credit"
                    checked={paymentMethod === "letter-of-credit"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>Letter of Credit</span>
                </label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Special Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="Any special delivery instructions or requirements..."
                rows={3}
              />
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.map((item) => (
                <div key={item.productId} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity} × {formatPrice(item.price)}
                    </p>
                  </div>
                  <p className="font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
              
              <div className="space-y-2 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{formatPrice(getTotalAmount())}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-green-600">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance:</span>
                  <span className="text-green-600">Included</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>{formatPrice(getTotalAmount())}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  • Estimated delivery: 15-21 business days
                </p>
                <p className="text-sm text-muted-foreground">
                  • Full insurance coverage included
                </p>
                <p className="text-sm text-muted-foreground">
                  • Quality guarantee with certificates
                </p>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={handlePlaceOrder}
                disabled={checking}
              >
                {checking ? "Processing Order..." : `Place Order - ${formatPrice(getTotalAmount())}`}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}