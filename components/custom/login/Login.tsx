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
import { isAuthorizedEmail } from "@/lib/auth";

//isLogged in
import { isLoggedIn, userEmail } from "@/store/atom";
import { useSetRecoilState } from "recoil";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);
  const setUserEmail = useSetRecoilState(userEmail);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const emailInput = target.email as HTMLInputElement;
    
    if (isAuthorizedEmail(emailInput.value)) {
      localStorage.setItem("admin", "true");
      localStorage.setItem("userEmail", emailInput.value);
      setIsLoggedIn(true);
      setUserEmail(emailInput.value);
      router.push("/dashboard");
    } else {
      setError("Unauthorized email. Try: demo@gmail.com, admin@greenion.com, buyer@company.com");
    }
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
                placeholder="demo@gmail.com or admin@greenion.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Need access?{" "}
          <Link href="/contact" className="underline">
            Contact Us
          </Link>
          <div className="mt-2 text-xs text-muted-foreground">
            Demo emails: demo@gmail.com, admin@greenion.com, buyer@company.com
          </div>
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
