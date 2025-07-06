import { WavyBackground } from "@/components/ui/wavy-background";

export default function WavyBackgroundDemo(props: { [key: string]: any }) {
  return (
    <WavyBackground
      className="max-w-4xl mx-auto pb-40 top-10"
      {...props}
      backgroundFill="#020817"
      colors={["#d9ed92", "#b5e48c", "#99d98c", "#76c893", "#52b69a"]}
    >
      <p className="text-4xl sm:text-6xl lg:text-7xl text-white font-bold inter-var text-center">
        Green Ion Energy.
      </p>
      <p className=" text-lg sm:text-xl mt-4 text-white font-normal inter-var text-center">
        {"Unlocking Kashmir's Lithium Potential for a Sustainable Future"}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/products">
          <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Products
          </button>
        </a>
        <a href="/docs">
          <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
            View Research
          </button>
        </a>
      </div>
    </WavyBackground>
  );
}
