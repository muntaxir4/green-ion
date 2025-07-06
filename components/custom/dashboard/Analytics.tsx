"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from "recharts";
import { TrendingUp, TrendingDown, Activity, Target, Package, Zap, ShoppingCart, Clock } from "lucide-react";
import { useRecoilValue } from "recoil";
import { userEmail } from "@/store/atom";
import { getOrdersByEmail } from "@/lib/orders";

const marketPriceData = [
  { month: "Jan", carbonate: 24500, hydroxide: 28000, batteries: 850000 },
  { month: "Feb", carbonate: 24800, hydroxide: 28500, batteries: 860000 },
  { month: "Mar", carbonate: 25200, hydroxide: 29000, batteries: 875000 },
  { month: "Apr", carbonate: 25800, hydroxide: 29800, batteries: 890000 },
  { month: "May", carbonate: 26200, hydroxide: 30500, batteries: 905000 },
  { month: "Jun", carbonate: 26800, hydroxide: 31200, batteries: 920000 },
];

const yourOrdersData = [
  { month: "Jan", orders: 2, value: 1945000, savings: 45000 },
  { month: "Feb", orders: 1, value: 850000, savings: 25000 },
  { month: "Mar", orders: 3, value: 2100000, savings: 62000 },
  { month: "Apr", orders: 2, value: 1650000, savings: 48000 },
  { month: "May", orders: 4, value: 3200000, savings: 95000 },
  { month: "Jun", orders: 3, value: 2800000, savings: 84000 },
];

const productDemandData = [
  { name: "Lithium Carbonate", demand: 85, growth: "+12%", color: "#8884d8" },
  { name: "Lithium Hydroxide", demand: 92, growth: "+18%", color: "#82ca9d" },
  { name: "EV Battery Packs", demand: 78, growth: "+25%", color: "#ffc658" },
  { name: "Mobile Batteries", demand: 65, growth: "+8%", color: "#ff7300" },
];

const deliveryPerformance = [
  { month: "Jan", onTime: 95, avgDays: 18, satisfaction: 4.8 },
  { month: "Feb", onTime: 97, avgDays: 17, satisfaction: 4.9 },
  { month: "Mar", onTime: 94, avgDays: 19, satisfaction: 4.7 },
  { month: "Apr", onTime: 98, avgDays: 16, satisfaction: 4.9 },
  { month: "May", onTime: 96, avgDays: 17, satisfaction: 4.8 },
  { month: "Jun", onTime: 99, avgDays: 15, satisfaction: 5.0 },
];

export default function Analytics() {
  const email = useRecoilValue(userEmail);
  const userOrders = getOrdersByEmail(email);
  
  const totalSpent = userOrders.reduce((sum, order) => sum + order.totalAmount, 0);
  const avgOrderValue = userOrders.length > 0 ? totalSpent / userOrders.length : 0;
  const totalSavings = 359000; // Calculated savings from bulk orders
  const onTimeDelivery = 97; // Average on-time delivery rate

  const buyerMetrics = [
    { metric: "Total Procurement", value: (totalSpent / 100000).toFixed(1), trend: "up", change: "+15.2%", unit: "L" },
    { metric: "Average Order Value", value: (avgOrderValue / 100000).toFixed(1), trend: "up", change: "+8.5%", unit: "L" },
    { metric: "Cost Savings", value: (totalSavings / 1000).toFixed(0), trend: "up", change: "+22%", unit: "K" },
    { metric: "On-Time Delivery", value: onTimeDelivery, trend: "up", change: "+2%", unit: "%" },
  ];

  return (
    <div className="space-y-6">
      {/* Buyer Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {buyerMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
              {index === 0 && <ShoppingCart className="h-4 w-4 text-blue-600" />}
              {index === 1 && <Package className="h-4 w-4 text-green-600" />}
              {index === 2 && <TrendingUp className="h-4 w-4 text-green-600" />}
              {index === 3 && <Clock className="h-4 w-4 text-purple-600" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₹{metric.value}{metric.unit}
              </div>
              <p className="text-xs text-green-600">
                {metric.change} from last quarter
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Price Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Market Price Trends</CardTitle>
            <CardDescription>Lithium product pricing over the last 6 months (₹)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={marketPriceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, "Price"]} />
                <Line type="monotone" dataKey="carbonate" stroke="#8884d8" strokeWidth={2} name="Li Carbonate (per MT)" />
                <Line type="monotone" dataKey="hydroxide" stroke="#82ca9d" strokeWidth={2} name="Li Hydroxide (per MT)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Your Procurement History */}
        <Card>
          <CardHeader>
            <CardTitle>Your Procurement Analytics</CardTitle>
            <CardDescription>Your order history and savings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={yourOrdersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'value' ? `₹${((value as number) / 100000).toFixed(1)}L` : 
                    name === 'savings' ? `₹${((value as number) / 1000).toFixed(0)}K` : value,
                    name === 'value' ? 'Order Value' : 
                    name === 'savings' ? 'Savings' : 'Orders'
                  ]} 
                />
                <Area yAxisId="left" type="monotone" dataKey="value" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#ff7300" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Product Demand Forecast */}
        <Card>
          <CardHeader>
            <CardTitle>Market Demand Forecast</CardTitle>
            <CardDescription>Product demand trends and growth projections</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productDemandData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, "Demand Index"]} />
                <Bar dataKey="demand" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Delivery Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Delivery Performance</CardTitle>
            <CardDescription>On-time delivery and satisfaction metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={deliveryPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" domain={[90, 100]} />
                <YAxis yAxisId="right" orientation="right" domain={[10, 25]} />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="onTime" stroke="#82ca9d" strokeWidth={3} name="On-Time Delivery %" />
                <Line yAxisId="right" type="monotone" dataKey="avgDays" stroke="#8884d8" strokeWidth={2} name="Avg Delivery Days" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Market Intelligence Table */}
      <Card>
        <CardHeader>
          <CardTitle>Market Intelligence & Opportunities</CardTitle>
          <CardDescription>Current market conditions and procurement recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Product</th>
                  <th className="text-right p-2">Current Price</th>
                  <th className="text-right p-2">Price Trend</th>
                  <th className="text-right p-2">Market Demand</th>
                  <th className="text-right p-2">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-medium">Lithium Carbonate</td>
                  <td className="text-right p-2">₹26,800/MT</td>
                  <td className="text-right p-2">
                    <span className="text-red-600 flex items-center justify-end">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +9.4%
                    </span>
                  </td>
                  <td className="text-right p-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">High</span>
                  </td>
                  <td className="text-right p-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">Monitor</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Lithium Hydroxide</td>
                  <td className="text-right p-2">₹31,200/MT</td>
                  <td className="text-right p-2">
                    <span className="text-red-600 flex items-center justify-end">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +11.4%
                    </span>
                  </td>
                  <td className="text-right p-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Very High</span>
                  </td>
                  <td className="text-right p-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Buy Now</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">EV Battery Packs</td>
                  <td className="text-right p-2">₹9,20,000/unit</td>
                  <td className="text-right p-2">
                    <span className="text-red-600 flex items-center justify-end">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +8.2%
                    </span>
                  </td>
                  <td className="text-right p-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Growing</span>
                  </td>
                  <td className="text-right p-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Pre-order</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Mobile Batteries</td>
                  <td className="text-right p-2">₹1,200/unit</td>
                  <td className="text-right p-2">
                    <span className="text-green-600 flex items-center justify-end">
                      <TrendingDown className="w-4 h-4 mr-1" />
                      -2.1%
                    </span>
                  </td>
                  <td className="text-right p-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">Stable</span>
                  </td>
                  <td className="text-right p-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Good Value</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Insights and Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Market Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <p className="text-sm">Lithium hydroxide prices increased 18% due to EV battery demand surge.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-sm">Your bulk ordering strategy saved ₹3.59L compared to spot purchases.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-sm">Kashmir lithium maintains premium quality with 99.8% purity standards.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <p className="text-sm">Delivery performance improved to 99% on-time with 15-day average.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Procurement Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-sm">Consider increasing lithium hydroxide orders before Q3 price surge.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <p className="text-sm">Lock in EV battery pack pre-orders for 2025 delivery at current rates.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-sm">Mobile battery prices are favorable - good time for bulk procurement.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
              <p className="text-sm">Explore long-term contracts for 15-20% additional cost savings.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}