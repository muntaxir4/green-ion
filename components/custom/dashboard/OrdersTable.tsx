"use client";

import { Order } from "@/lib/orders";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Truck } from "lucide-react";

interface OrdersTableProps {
  orders: Order[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-500';
      case 'in-transit': return 'bg-blue-500';
      case 'processing': return 'bg-yellow-500';
      case 'shipped': return 'bg-purple-500';
      case 'confirmed': return 'bg-cyan-500';
      case 'pending': return 'bg-orange-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const formatAmount = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Orders</CardTitle>
        <CardDescription>
          Complete history of your lithium orders
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold">Order #{order.id}</h3>
                  <p className="text-sm text-muted-foreground">
                    Placed on {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{formatAmount(order.totalAmount)}</p>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-sm font-medium">Shipping Address:</p>
                  <p className="text-sm text-muted-foreground">
                    {order.shippingAddress.company}<br/>
                    {order.shippingAddress.city}, {order.shippingAddress.state}<br/>
                    {order.shippingAddress.country}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Delivery Info:</p>
                  <p className="text-sm text-muted-foreground">
                    Expected: {new Date(order.estimatedDelivery).toLocaleDateString()}
                  </p>
                  {order.trackingNumber && (
                    <p className="text-sm text-muted-foreground">
                      Tracking: {order.trackingNumber}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {order.products.length} item(s)
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                  {order.trackingNumber && (
                    <Button variant="outline" size="sm">
                      <Truck className="w-4 h-4 mr-1" />
                      Track Order
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}