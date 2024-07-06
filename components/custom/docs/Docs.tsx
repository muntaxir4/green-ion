import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Docs() {
  return (
    <div className="mx-auto my-2  text-center">
      <p className="text-2xl">{"Here's our Documentation"}</p>

      <div className="my-12">
        <Tabs defaultValue="papers">
          <TabsList>
            <TabsTrigger value="papers">Research Papers</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="whitepaper">Whitepaper</TabsTrigger>
          </TabsList>
          <TabsContent value="papers">
            This will contain our Research papers around Lithium and Lithium
            mines.
          </TabsContent>
          <TabsContent value="roadmap">
            {" "}
            This will contain our Roadmap.
          </TabsContent>
          <TabsContent value="whitepaper">
            This will contain our Whitepaper.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
