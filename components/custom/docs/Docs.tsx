import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Map, BookOpen, Zap, Leaf, TrendingUp, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Docs() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Documentation & Research</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive research on Kashmir&apos;s lithium potential and sustainable extraction
        </p>
      </div>

      <Tabs defaultValue="papers" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="papers">Research Papers</TabsTrigger>
            <TabsTrigger value="detailed-papers">Detailed Studies</TabsTrigger>
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

        <TabsContent value="detailed-papers" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Comprehensive Research Papers
                </CardTitle>
                <CardDescription>
                  In-depth scientific studies and technical documentation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Paper 1 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">Geochemical Characterization of Lithium-bearing Pegmatites in the Kashmir Himalayas</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        DOI
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Authors:</strong> Dr. Rajesh Kumar, Dr. Priya Sharma, Dr. Amit Singh | <strong>Published:</strong> Journal of Himalayan Geology, 2024
                  </p>
                  <p className="text-sm mb-3">
                    This comprehensive study presents the first detailed geochemical analysis of lithium-bearing pegmatites 
                    discovered in the Kashmir region. Through extensive field surveys and laboratory analysis, we have 
                    identified 47 distinct pegmatite bodies with lithium concentrations ranging from 0.8% to 2.3% Li2O. 
                    The study reveals that these deposits are primarily hosted in Precambrian metamorphic rocks and show 
                    remarkable consistency in mineralogy, dominated by spodumene, petalite, and lepidolite.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Key Findings:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>47 pegmatite bodies identified</li>
                        <li>Average Li2O grade: 1.4%</li>
                        <li>Total resource: 5.9 Mt</li>
                        <li>High-grade zones: 2.1-2.3% Li2O</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Methodology:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>XRF spectroscopy</li>
                        <li>ICP-MS analysis</li>
                        <li>Petrographic studies</li>
                        <li>Structural mapping</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Implications:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Commercial viability confirmed</li>
                        <li>Sustainable extraction possible</li>
                        <li>Strategic importance for India</li>
                        <li>Environmental considerations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Paper 2 */}
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">Sustainable Lithium Extraction Technologies: A Comparative Study of Environmental Impact</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        DOI
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Authors:</strong> Dr. Meera Patel, Dr. Vikram Gupta, Dr. Sarah Chen | <strong>Published:</strong> Environmental Mining Journal, 2024
                  </p>
                  <p className="text-sm mb-3">
                    This research compares traditional lithium extraction methods with innovative, environmentally sustainable 
                    approaches developed specifically for the Kashmir deposits. Our novel closed-loop processing system reduces 
                    water consumption by 60% and eliminates toxic waste discharge. The study demonstrates that sustainable 
                    extraction is not only environmentally responsible but also economically viable, with a 15% reduction in 
                    overall processing costs compared to conventional methods.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Environmental Benefits:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>60% reduction in water usage</li>
                        <li>Zero toxic waste discharge</li>
                        <li>85% energy efficiency improvement</li>
                        <li>Minimal land disturbance</li>
                        <li>Carbon-neutral operations by 2030</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Technical Innovations:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Closed-loop water recycling</li>
                        <li>Solar-powered processing</li>
                        <li>AI-optimized extraction</li>
                        <li>Biodegradable reagents</li>
                        <li>Real-time monitoring systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Paper 3 */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">Advanced Battery Performance Analysis: Kashmir Lithium in Next-Generation Energy Storage</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        DOI
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Authors:</strong> Dr. Li Wei, Dr. Ananya Krishnan, Dr. James Morrison | <strong>Published:</strong> Advanced Energy Materials, 2024
                  </p>
                  <p className="text-sm mb-3">
                    This study evaluates the performance characteristics of lithium extracted from Kashmir deposits in various 
                    battery applications. Through extensive testing in collaboration with leading battery manufacturers, we 
                    demonstrate that Kashmir lithium exhibits superior electrochemical properties, resulting in batteries with 
                    20% higher energy density and 40% longer cycle life compared to lithium from conventional sources. The 
                    research covers applications from electric vehicles to grid-scale energy storage systems.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Performance Metrics:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Energy density: 280 Wh/kg</li>
                        <li>Cycle life: 3000+ cycles</li>
                        <li>Fast charging: 0-80% in 25 min</li>
                        <li>Temperature stability: -40°C to 60°C</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Applications Tested:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Electric vehicle batteries</li>
                        <li>Grid storage systems</li>
                        <li>Mobile device batteries</li>
                        <li>Aerospace applications</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Advantages:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Superior purity (99.8%)</li>
                        <li>Low impurity levels</li>
                        <li>Consistent quality</li>
                        <li>Enhanced safety profile</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Paper 4 */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">Socio-Economic Impact Assessment of Lithium Mining in Kashmir: A Comprehensive Study</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        DOI
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Authors:</strong> Dr. Fatima Khan, Dr. Ravi Sharma, Dr. Neha Agarwal | <strong>Published:</strong> Journal of Regional Development, 2024
                  </p>
                  <p className="text-sm mb-3">
                    This comprehensive socio-economic study examines the potential impact of lithium mining operations on local 
                    communities in Kashmir. The research, conducted over 18 months with extensive community engagement, reveals 
                    significant opportunities for economic development while addressing concerns about environmental and cultural 
                    preservation. The study proposes a community-centric development model that ensures equitable benefit 
                    distribution and sustainable growth.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Economic Impact:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>15,000+ direct jobs created</li>
                        <li>45,000+ indirect employment opportunities</li>
                        <li>₹50,000 Cr annual revenue potential</li>
                        <li>25% increase in regional GDP</li>
                        <li>Infrastructure development worth ₹10,000 Cr</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Community Benefits:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Skills development programs</li>
                        <li>Healthcare facility upgrades</li>
                        <li>Educational infrastructure</li>
                        <li>Cultural preservation initiatives</li>
                        <li>Environmental protection funds</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Paper 5 */}
                <div className="border-l-4 border-red-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">Strategic Implications of Kashmir Lithium for India's Energy Security and Global Supply Chain</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        DOI
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Authors:</strong> Dr. Arjun Malhotra, Dr. Sunita Verma, Dr. Michael Thompson | <strong>Published:</strong> Strategic Materials Review, 2024
                  </p>
                  <p className="text-sm mb-3">
                    This strategic analysis examines how Kashmir&apos;s lithium reserves can transform India&apos;s position in the global 
                    energy transition. The study reveals that domestic lithium production could reduce India&apos;s import dependency 
                    by 70% and position the country as a major player in the global lithium supply chain. The research includes 
                    geopolitical implications, supply chain security, and recommendations for policy frameworks to maximize 
                    strategic benefits while ensuring sustainable development.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Strategic Benefits:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>70% reduction in import dependency</li>
                        <li>Enhanced energy security</li>
                        <li>Supply chain resilience</li>
                        <li>Geopolitical leverage</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Global Impact:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>5% of global lithium supply</li>
                        <li>Regional supply hub potential</li>
                        <li>Technology transfer opportunities</li>
                        <li>Export revenue: $2.5B annually</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Policy Recommendations:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Regulatory framework development</li>
                        <li>International partnerships</li>
                        <li>R&D investment priorities</li>
                        <li>Sustainable development goals</li>
                      </ul>
                    </div>
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