import { WavyBackground } from "@/components/ui/wavy-background";

export default function WavyBackgroundDemo(props: { [key: string]: any }) {
  return (
    <WavyBackground
      className="max-w-4xl mx-auto pb-40 top-10"
      {...props}
      backgroundFill="#020817"
    >
      <p className="text-4xl sm:text-6xl lg:text-7xl text-white font-bold inter-var text-center">
        Green Ion Energy.
      </p>
      <p className=" text-lg sm:text-xl mt-4 text-white font-normal inter-var text-center">
        {"Leverage the power of India's Lithium."}
      </p>
    </WavyBackground>
  );
}
