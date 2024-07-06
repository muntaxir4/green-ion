import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <div className="my-8 flex flex-col justify-center">
      <Card className="m-4 sm:mx-16">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            Send a note to us. And we will reach out to you soon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="name" className="text-md">
              Full Name
            </label>
            <Input type="text" id="name" required />
          </div>
          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="name" className="text-md">
              Organization Name
            </label>
            <Input type="text" id="org" required />
          </div>
          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="name" className="text-md">
              Email
            </label>
            <Input type="email" id="email" required />
          </div>
          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="name" className="text-md">
              Subject
            </label>
            <Input type="text" id="subject" required />
          </div>
          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="name" className="text-md">
              Description
            </label>
            <Textarea
              placeholder="Type your message here."
              className="text-md"
              required
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
