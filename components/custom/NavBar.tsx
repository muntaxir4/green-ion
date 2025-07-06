"use client";

import ToggleTheme from "@/components/custom/ToggleTheme";
import { Menu, ShoppingCart } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
//for sidebar on mobile
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

//functional components
import Link from "next/link";
import { useEffect, useState } from "react";

//isLogged in
import { isLoggedIn, userEmail, cartItems } from "@/store/atom";
import { RecoilState, useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

function NavBarDesktop({ admin }: { admin: boolean }) {
  const cart = useRecoilValue(cartItems);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs">
            <Button variant="ghost">Docs</Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products">
            <Button variant="ghost">Products</Button>
          </Link>
        </NavigationMenuItem>
        {admin && (
          <NavigationMenuItem>
            <Link href="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          {admin ? (
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavBarMobile({ admin }: { admin: boolean }) {
  const [open, setOpen] = useState(false);
  const cart = useRecoilValue(cartItems);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="m-2" />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-center">
        <NavigationMenu className=" mx-auto">
          <NavigationMenuList className="flex flex-col justify-center">
            <NavigationMenuItem>
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-xl"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs">
                <Button
                  variant="ghost"
                  className="text-xl"
                  onClick={() => setOpen(false)}
                >
                  Docs
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/products">
                <Button
                  variant="ghost"
                  className="text-xl"
                  onClick={() => setOpen(false)}
                >
                  Products
                </Button>
              </Link>
            </NavigationMenuItem>
            {admin && (
              <NavigationMenuItem>
                <Link href="/cart">
                  <Button
                    variant="ghost"
                    className="text-xl relative"
                    onClick={() => setOpen(false)}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Cart
                    {totalItems > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {totalItems}
                      </Badge>
                    )}
                  </Button>
                </Link>
              </NavigationMenuItem>
            )}
            <NavigationMenuItem>
              {admin ? (
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    className="text-xl"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="text-xl"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useRecoilState(isLoggedIn);
  const [email, setEmail] = useRecoilState(userEmail);
  
  useEffect(() => {
    if (localStorage.getItem("admin") == "true") {
      setLoggedIn(true);
      setEmail(localStorage.getItem("userEmail") || "");
    } else setLoggedIn(false);
  }, [loggedIn, setLoggedIn, setEmail]);

  return (
    <>
      <div className="grid grid-cols-6 sm:hidden m-1 ">
        <NavBarMobile admin={loggedIn} />

        <h2 className="text-2xl self-center col-span-4 text-center font-semibold italic">
          <Link href="/">G.I.</Link>
        </h2>

        <ToggleTheme className="absolute right-0 z-10" />
      </div>
      <div className="hidden sm:flex m-1">
        <NavBarDesktop admin={loggedIn} />
        <ToggleTheme className="absolute right-0 z-10" />
      </div>
    </>
  );
}
