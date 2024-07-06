//custom components
import Investors from "@/components/custom/Investors";
import People from "@/components/custom/People";
import Pricing from "@/components/custom/Pricing";

import WavyBackgroundDemo from "@/components/custom/WavyBackgroundDemo";

export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <WavyBackgroundDemo />
      </div>
      <Investors />
      <People />
      <Pricing />
    </div>
  );
}
