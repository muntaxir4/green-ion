"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IndianRupee, Package, Truck, TrendingUp } from "lucide-react";

//import required custom components
import Overview from "@/components/custom/dashboard/Overview";
import RecentOrders from "@/components/custom/dashboard/RecentOrders";
import OrdersTable from "@/components/custom/dashboard/OrdersTable";
import { useRecoilValue } from "recoil";
import { isLoggedIn, userEmail } from "@/store/atom";
import { useEffect } from "react";
import { getOrdersByEmail } from "@/lib/orders";

export default function Dashboard() {
  const loggedIn = useRecoilValue(isLoggedIn);
  const email = useRecoilValue(userEmail);
  const userOrders = getOrdersByEmail(email);
  
  useEffect(() => {
    if (!loggedIn) {
      window.location.href = "/login";
    }
  }, [loggedIn]);

  const totalSpent = userOrders.reduce((sum, order) => sum + order.totalAmount, 0);
  const activeOrders = userOrders.filter(order => 
    ['pending', 'confirmed', 'processing', 'shipped', 'in-transit'].includes(order.status)
  ).length;
  const deliveredOrders = userOrders.filter(order => order.status === 'delivered').length;

  return (
    <div className="mx-2 my-4">
      <div className="m-4">
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome back, {email.split('@')[0]} 👋
        </h2>
        <p className="text-muted-foreground">
          Here's your lithium business overview
        </p>
      </div>
      <Tabs defaultValue="overview">
        <TabsList className="mx-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">
            Orders
          </TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="m-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Spent
                </CardTitle>
                <IndianRupee />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ₹{(totalSpent / 100000).toFixed(1)}L
                </div>
                <p className="text-xs text-muted-foreground">
                  Across {userOrders.length} orders
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Orders
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeOrders}</div>
                <p className="text-xs text-muted-foreground">
                  In progress
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Delivered Orders
                </CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{deliveredOrders}</div>
                <p className="text-xs text-muted-foreground">
                  Successfully completed
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Growth Rate
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+23%</div>
                <p className="text-xs text-muted-foreground">
                  Month over month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-4 md:col-span-3">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  Your latest lithium orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentOrders />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="orders" className="m-4">
          <OrdersTable orders={userOrders} />
        </TabsContent>
        <TabsContent value="analytics" className="m-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Detailed insights into your lithium procurement patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Advanced analytics features coming soon...
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
