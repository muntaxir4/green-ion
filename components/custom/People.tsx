import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Muntasir Mallik",
  },
  {
    id: 2,
    name: "Arpan Das",
  },
  {
    id: 3,
    name: "Pratibha Giri",
  },
  {
    id: 4,
    name: "Debojyoti Banerjee",
  },
  {
    id: 5,
    name: "Subhajit Saho",
  },
];

export default function People() {
  return (
    <div className="p-2">
      <h2 className="text-center font-semibold text-2xl m-2 mb-4">
        Meet our founders.
      </h2>
      <div className="my-8">
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
}
