"use client";

import Link from "next/link";

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
import { useRouter } from "next/navigation";
import { useState } from "react";

//isLogged in
import { isLoggedIn } from "@/store/atom";
import { useSetRecoilState } from "recoil";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const emailInput = target.email as HTMLInputElement;
    if (emailInput.value === "demo@gmail.com") {
      localStorage.setItem("admin", "true");
      setIsLoggedIn(true);
      router.push("/dashboard");
    } else setError("Unauthorized");
  }

  return (
    <Card className="mx-auto max-w-sm ">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="demo@gmail.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/contact" className="underline">
            Contact Us
          </Link>
        </div>
      </CardContent>
      {error.length ? (
        <CardFooter className="text-red-400 flex justify-center">
          {error}
        </CardFooter>
      ) : null}
    </Card>
  );
}
