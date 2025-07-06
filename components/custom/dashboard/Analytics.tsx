"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from "recharts";
import { TrendingUp, TrendingDown, Activity, Target, DollarSign, Users } from "lucide-react";

const monthlyData = [
  { month: "Jan", orders: 12, revenue: 2400000, lithium: 45 },
  { month: "Feb", orders: 19, revenue: 3800000, lithium: 72 },
  { month: "Mar", orders: 15, revenue: 2900000, lithium: 58 },
  { month: "Apr", orders: 22, revenue: 4200000, lithium: 89 },
  { month: "May", orders: 28, revenue: 5100000, lithium: 105 },
  { month: "Jun", orders: 35, revenue: 6800000, lithium: 142 },
];

const productData = [
  { name: "Lithium Carbonate", value: 45, color: "#8884d8" },
  { name: "Lithium Hydroxide", value: 30, color: "#82ca9d" },
  { name: "EV Batteries", value: 15, color: "#ffc658" },
  { name: "Mobile Batteries", value: 10, color: "#ff7300" },
];

const regionData = [
  { region: "North America", orders: 45, revenue: 8500000 },
  { region: "Europe", orders: 32, revenue: 6200000 },
  { region: "Asia Pacific", orders: 28, revenue: 5800000 },
  { region: "India", orders: 25, revenue: 4900000 },
  { region: "Others", orders: 15, revenue: 2800000 },
];

const performanceMetrics = [
  { metric: "Order Fulfillment Rate", value: 98.5, trend: "up", change: "+2.1%" },
  { metric: "Customer Satisfaction", value: 94.2, trend: "up", change: "+1.8%" },
  { metric: "Average Order Value", value: 185000, trend: "up", change: "+12.5%" },
  { metric: "Delivery Time (Days)", value: 14.2, trend: "down", change: "-1.3%" },
];

export default function Analytics() {
  const formatCurrency = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    if (value >= 1000) return `₹${(value / 1000).toFixed(1)}K`;
    return `₹${value}`;
  };

  return (
    <div className="space-y-6">
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {performanceMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
              {metric.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {metric.metric.includes("Value") ? formatCurrency(metric.value) : 
                 metric.metric.includes("Rate") || metric.metric.includes("Satisfaction") ? `${metric.value}%` :
                 metric.metric.includes("Time") ? `${metric.value} days` : metric.value}
              </div>
              <p className={`text-xs ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue Trend</CardTitle>
            <CardDescription>Revenue growth over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => formatCurrency(value)} />
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), "Revenue"]} />
                <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Product Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Product Sales Distribution</CardTitle>
            <CardDescription>Breakdown by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Orders vs Lithium Production */}
        <Card>
          <CardHeader>
            <CardTitle>Orders vs Lithium Production</CardTitle>
            <CardDescription>Monthly correlation between orders and lithium output (MT)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="orders" fill="#8884d8" name="Orders" />
                <Line yAxisId="right" type="monotone" dataKey="lithium" stroke="#82ca9d" strokeWidth={3} name="Lithium (MT)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Regional Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Regional Performance</CardTitle>
            <CardDescription>Orders and revenue by region</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(value) => formatCurrency(value)} />
                <YAxis dataKey="region" type="category" width={80} />
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), "Revenue"]} />
                <Bar dataKey="revenue" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics Table */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Breakdown</CardTitle>
          <CardDescription>Detailed performance metrics by region</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Region</th>
                  <th className="text-right p-2">Orders</th>
                  <th className="text-right p-2">Revenue</th>
                  <th className="text-right p-2">Avg Order Value</th>
                  <th className="text-right p-2">Market Share</th>
                </tr>
              </thead>
              <tbody>
                {regionData.map((region, index) => {
                  const totalRevenue = regionData.reduce((sum, r) => sum + r.revenue, 0);
                  const marketShare = ((region.revenue / totalRevenue) * 100).toFixed(1);
                  const avgOrderValue = region.revenue / region.orders;
                  
                  return (
                    <tr key={index} className="border-b">
                      <td className="p-2 font-medium">{region.region}</td>
                      <td className="text-right p-2">{region.orders}</td>
                      <td className="text-right p-2">{formatCurrency(region.revenue)}</td>
                      <td className="text-right p-2">{formatCurrency(avgOrderValue)}</td>
                      <td className="text-right p-2">{marketShare}%</td>
                    </tr>
                  );
                })}
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
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-sm">Revenue growth of 183% over the last 6 months, driven by increased EV battery demand.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-sm">North America remains our strongest market with 31% market share.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <p className="text-sm">Lithium carbonate accounts for 45% of total sales volume.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <p className="text-sm">Customer satisfaction improved by 1.8% with faster delivery times.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <p className="text-sm">Expand production capacity to meet growing demand in Asia Pacific region.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <p className="text-sm">Invest in lithium hydroxide production to capture premium battery market.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
              <p className="text-sm">Develop strategic partnerships with European EV manufacturers.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
              <p className="text-sm">Optimize supply chain to reduce delivery times below 14 days.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}