"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from "recharts";
import { TrendingUp, TrendingDown, Activity, Target, Package, Zap } from "lucide-react";

const monthlyProductionData = [
  { month: "Jan", carbonate: 45, hydroxide: 28, batteries: 12, rawOre: 180 },
  { month: "Feb", carbonate: 52, hydroxide: 32, batteries: 15, rawOre: 210 },
  { month: "Mar", carbonate: 48, hydroxide: 30, batteries: 18, rawOre: 195 },
  { month: "Apr", carbonate: 58, hydroxide: 38, batteries: 22, rawOre: 240 },
  { month: "May", carbonate: 65, hydroxide: 42, batteries: 28, rawOre: 280 },
  { month: "Jun", carbonate: 72, hydroxide: 48, batteries: 35, rawOre: 320 },
];

const productDistribution = [
  { name: "Lithium Carbonate", value: 45, tons: 72, color: "#8884d8" },
  { name: "Lithium Hydroxide", value: 30, tons: 48, color: "#82ca9d" },
  { name: "EV Battery Packs", value: 15, tons: 35, color: "#ffc658" },
  { name: "Raw Lithium Ore", value: 10, tons: 320, color: "#ff7300" },
];

const qualityMetrics = [
  { product: "Li Carbonate", purity: 99.5, grade: "Battery", demand: "High" },
  { product: "Li Hydroxide", purity: 99.8, grade: "Premium", demand: "Very High" },
  { product: "EV Batteries", purity: 99.2, grade: "Commercial", demand: "Growing" },
  { product: "Raw Ore", purity: 6.8, grade: "Concentrate", demand: "Stable" },
];

const extractionData = [
  { month: "Jan", extracted: 180, processed: 73, efficiency: 40.6 },
  { month: "Feb", extracted: 210, processed: 84, efficiency: 40.0 },
  { month: "Mar", extracted: 195, processed: 78, efficiency: 40.0 },
  { month: "Apr", extracted: 240, processed: 96, efficiency: 40.0 },
  { month: "May", extracted: 280, processed: 107, efficiency: 38.2 },
  { month: "Jun", extracted: 320, processed: 120, efficiency: 37.5 },
];

const performanceMetrics = [
  { metric: "Extraction Efficiency", value: 38.2, trend: "down", change: "-1.2%", unit: "%" },
  { metric: "Product Purity", value: 99.6, trend: "up", change: "+0.3%", unit: "%" },
  { metric: "Monthly Production", value: 120, trend: "up", change: "+12.1%", unit: "MT" },
  { metric: "Processing Time", value: 18.5, trend: "down", change: "-2.1%", unit: "days" },
];

export default function Analytics() {
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
                {metric.value}{metric.unit}
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
        {/* Monthly Production Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Production Output</CardTitle>
            <CardDescription>Lithium product production over the last 6 months (MT)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyProductionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="carbonate" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="hydroxide" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="batteries" stackId="1" stroke="#ffc658" fill="#ffc658" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Product Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Product Output Distribution</CardTitle>
            <CardDescription>Current month production breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, tons }) => `${name}: ${tons}MT`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="tons"
                >
                  {productDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} MT`, "Production"]} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Extraction vs Processing */}
        <Card>
          <CardHeader>
            <CardTitle>Extraction vs Processing Efficiency</CardTitle>
            <CardDescription>Raw ore extraction vs processed lithium output (MT)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={extractionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="extracted" fill="#8884d8" name="Raw Ore Extracted (MT)" />
                <Line yAxisId="left" type="monotone" dataKey="processed" stroke="#82ca9d" strokeWidth={3} name="Processed Lithium (MT)" />
                <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#ff7300" strokeWidth={2} name="Efficiency %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quality Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Product Quality Standards</CardTitle>
            <CardDescription>Purity levels and market demand</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={qualityMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, "Purity"]} />
                <Bar dataKey="purity" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Production Table */}
      <Card>
        <CardHeader>
          <CardTitle>Product Quality & Specifications</CardTitle>
          <CardDescription>Detailed breakdown of our lithium products</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Product</th>
                  <th className="text-right p-2">Purity (%)</th>
                  <th className="text-right p-2">Grade</th>
                  <th className="text-right p-2">Monthly Output (MT)</th>
                  <th className="text-right p-2">Market Demand</th>
                </tr>
              </thead>
              <tbody>
                {qualityMetrics.map((product, index) => {
                  const currentProduction = productDistribution.find(p => 
                    p.name.toLowerCase().includes(product.product.toLowerCase().split(' ')[1] || product.product.toLowerCase())
                  );
                  
                  return (
                    <tr key={index} className="border-b">
                      <td className="p-2 font-medium">{product.product}</td>
                      <td className="text-right p-2">{product.purity}%</td>
                      <td className="text-right p-2">{product.grade}</td>
                      <td className="text-right p-2">{currentProduction?.tons || 'N/A'}</td>
                      <td className="text-right p-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          product.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                          product.demand === 'High' ? 'bg-orange-100 text-orange-800' :
                          product.demand === 'Growing' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {product.demand}
                        </span>
                      </td>
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
              Production Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-sm">Lithium hydroxide production increased by 71% due to EV battery demand surge.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-sm">Battery-grade lithium carbonate maintains 99.5% purity consistently.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <p className="text-sm">Raw ore extraction efficiency slightly decreased due to deeper mining operations.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <p className="text-sm">Processing time reduced by 2.1 days through automation improvements.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Operational Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <p className="text-sm">Increase lithium hydroxide production capacity to meet growing EV market demand.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <p className="text-sm">Implement advanced extraction techniques to improve ore processing efficiency.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
              <p className="text-sm">Invest in quality control systems to maintain 99.8%+ purity standards.</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
              <p className="text-sm">Explore sustainable mining practices to reduce environmental impact.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}