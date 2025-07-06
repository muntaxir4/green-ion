//custom components
import Investors from "@/components/custom/Investors";
import People from "@/components/custom/People";
import ProductShowcase from "@/components/custom/ProductShowcase";

import WavyBackgroundDemo from "@/components/custom/WavyBackgroundDemo";

export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <WavyBackgroundDemo />
      </div>
      <Investors />
      <People />
      <ProductShowcase />
    </div>
  );
}
