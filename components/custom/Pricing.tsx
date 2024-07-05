import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div id="pricing" className="m-2 p-2">
      <h2 className="text-center font-semibold text-2xl m-2 mb-4">
        Available Plans.
      </h2>
      <div className="sm:grid sm:grid-cols-2 m-2 sm:mx-28 gap-2">
        <Card className="m-2 shadow-md flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ul className="list-disc">
              <li>Research papers.</li>
              <li>Blogs.</li>
              <li>Analytics.</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full text-lg">
              Always Free
            </Button>
          </CardFooter>
        </Card>
        <Card className="sm:mt-2 m-2 mt-4 shadow-md bg-secondary ring ring-opacity-20 hover:ring-blue-500 flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ul className="list-disc">
              <li>Basic Plan.</li>
              <li>Mining.</li>
              <li>Orders.</li>
              <li>24/7 hrs Support.</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full text-lg">Contact Us</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
