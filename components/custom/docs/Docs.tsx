import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Map, BookOpen, Zap, Leaf, TrendingUp } from "lucide-react";

export default function Docs() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Documentation & Research</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive research on Kashmir's lithium potential and sustainable extraction
        </p>
      </div>

      <Tabs defaultValue="papers" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="papers">Research Papers</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="whitepaper">Whitepaper</TabsTrigger>
        </TabsList>
        
        <TabsContent value="papers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <CardTitle>Geological Survey of Kashmir Lithium Deposits</CardTitle>
                </div>
                <CardDescription>
                  Comprehensive analysis of lithium-bearing pegmatites in the Kashmir region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our geological team has identified significant lithium reserves in the Kashmir valley, 
                  with concentrations ranging from 0.8% to 2.1% Li2O in spodumene-bearing pegmatites.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Estimated Reserves:</span>
                    <span className="text-sm">5.9 million tonnes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Average Grade:</span>
                    <span className="text-sm">1.4% Li2O</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Mining Potential:</span>
                    <span className="text-sm">High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  <CardTitle>Sustainable Extraction Methods</CardTitle>
                </div>
                <CardDescription>
                  Environmentally responsible lithium extraction techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our research focuses on minimizing environmental impact while maximizing 
                  extraction efficiency through innovative processing methods.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Water Usage Reduction:</span>
                    <span className="text-sm">60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Energy Efficiency:</span>
                    <span className="text-sm">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Waste Reduction:</span>
                    <span className="text-sm">70%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <CardTitle>Battery Technology Applications</CardTitle>
                </div>
                <CardDescription>
                  Research on lithium applications in next-generation batteries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Studies on how Kashmir lithium performs in various battery technologies, 
                  from EVs to grid storage systems.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Energy Density:</span>
                    <span className="text-sm">280 Wh/kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Cycle Life:</span>
                    <span className="text-sm">3000+ cycles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Fast Charging:</span>
                    <span className="text-sm">0-80% in 25 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <CardTitle>Economic Impact Analysis</CardTitle>
                </div>
                <CardDescription>
                  Economic benefits of lithium extraction for the region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive analysis of the economic impact of lithium mining 
                  on local communities and the broader Indian economy.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Job Creation:</span>
                    <span className="text-sm">15,000+ direct jobs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Revenue Potential:</span>
                    <span className="text-sm">₹50,000 Cr annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Export Potential:</span>
                    <span className="text-sm">$2.5B annually</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </TabsContent>
          
        <TabsContent value="roadmap" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5" />
                <CardTitle>Development Roadmap</CardTitle>
              </div>
              <CardDescription>
                Our strategic plan for Kashmir lithium development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">Phase 1: Exploration & Assessment (2024-2025)</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Complete geological surveys, environmental impact assessments, and feasibility studies.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Status: In Progress • Investment: ₹500 Cr
                  </div>
                </div>
                
                <div className="border-l-2 border-muted pl-4">
                  <h3 className="font-semibold">Phase 2: Infrastructure Development (2025-2027)</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Build mining infrastructure, processing facilities, and transportation networks.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Status: Planning • Investment: ₹2,500 Cr
                  </div>
                </div>
                
                <div className="border-l-2 border-muted pl-4">
                  <h3 className="font-semibold">Phase 3: Commercial Production (2027-2030)</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Begin large-scale lithium extraction and processing operations.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Status: Future • Target: 50,000 tonnes/year
                  </div>
                </div>
                
                <div className="border-l-2 border-muted pl-4">
                  <h3 className="font-semibold">Phase 4: Expansion & Innovation (2030+)</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Scale operations, develop advanced processing technologies, and establish India as a lithium hub.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Status: Vision • Target: 200,000 tonnes/year
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </TabsContent>
          
        <TabsContent value="whitepaper" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <CardTitle>Green Ion Whitepaper</CardTitle>
              </div>
              <CardDescription>
                Comprehensive overview of our lithium extraction and processing strategy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <section>
                  <h3 className="font-semibold mb-2">Executive Summary</h3>
                  <p className="text-sm text-muted-foreground">
                    Green Ion Energy represents a transformative opportunity to unlock Kashmir's vast lithium potential, 
                    positioning India as a key player in the global battery supply chain. Our sustainable extraction 
                    methods and advanced processing capabilities will deliver high-quality lithium products while 
                    minimizing environmental impact.
                  </p>
                </section>
                
                <section>
                  <h3 className="font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-sm text-muted-foreground">
                    The global lithium market is projected to reach $18.8 billion by 2028, driven by explosive growth 
                    in electric vehicles and energy storage systems. India's domestic lithium production could reduce 
                    import dependency and create a strategic advantage in the clean energy transition.
                  </p>
                </section>
                
                <section>
                  <h3 className="font-semibold mb-2">Technology & Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Our proprietary extraction and processing technologies achieve 95% lithium recovery rates while 
                    reducing water consumption by 60% compared to traditional methods. Advanced automation and AI-driven 
                    optimization ensure consistent product quality and operational efficiency.
                  </p>
                </section>
                
                <section>
                  <h3 className="font-semibold mb-2">Sustainability Commitment</h3>
                  <p className="text-sm text-muted-foreground">
                    Environmental stewardship is central to our operations. We employ closed-loop water systems, 
                    renewable energy sources, and comprehensive land rehabilitation programs. Our goal is to achieve 
                    carbon-neutral operations by 2030.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
          </TabsContent>
      </Tabs>
    </div>
  );
}