import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const investors = [
  {
    id: 1,
    name: "Ggroup",
  },
  {
    id: 2,
    name: "Okla",
  },
  {
    id: 3,
    name: "Jaquar",
  },
];

export default function Investors() {
  return (
    <div className="m-2 mb-10 p-2">
      <h2 className="text-center font-semibold text-2xl m-2 mb-4">
        Backed by trusted investors.
      </h2>
      <div className="flex justify-center ">
        {investors.map((investor) => (
          <Avatar key={investor.id} className="h-20 w-20 mx-2 sm:mx-8">
            <AvatarFallback>
              <span className="text-xl font-bold">{investor.name}</span>
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
}
