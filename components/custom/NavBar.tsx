"use client";

import ToggleTheme from "@/components/custom/ToggleTheme";
import { Menu, ShoppingCart, User } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
//for sidebar on mobile
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

//functional components
import Link from "next/link";
import { useEffect, useState } from "react";

//isLogged in
import { isLoggedIn, userEmail, cartItems } from "@/store/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";

function NavBarDesktop({ admin }: { admin: boolean }) {
  const cart = useRecoilValue(cartItems);
  const email = useRecoilValue(userEmail);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);
  const setUserEmail = useSetRecoilState(userEmail);
  const router = useRouter();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    router.push("/");
  };

  return (
    <div className="flex items-center justify-between w-full">
      {/* Left side - Cart (only when logged in) */}
      <div className="flex items-center">
        {admin && (
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
        )}
      </div>

      {/* Center - Navigation */}
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
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right side - User menu or Login */}
      <div className="flex items-center">
        {admin ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Account</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

function NavBarMobile({ admin }: { admin: boolean }) {
  const [open, setOpen] = useState(false);
  const cart = useRecoilValue(cartItems);
  const email = useRecoilValue(userEmail);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);
  const setUserEmail = useSetRecoilState(userEmail);
  const router = useRouter();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    setOpen(false);
    router.push("/");
  };

  return (
    <div className="flex items-center justify-between w-full">
      {/* Left side - Menu and Cart */}
      <div className="flex items-center">
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
                {admin && (
                  <NavigationMenuItem>
                    <Link href="/dashboard">
                      <Button
                        variant="ghost"
                        className="text-xl"
                        onClick={() => setOpen(false)}
                      >
                        Dashboard
                      </Button>
                    </Link>
                  </NavigationMenuItem>
                )}
                <NavigationMenuItem>
                  {admin ? (
                    <Button
                      variant="ghost"
                      className="text-xl"
                      onClick={handleLogout}
                    >
                      Logout ({email.split('@')[0]})
                    </Button>
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
        
        {/* Cart for mobile when logged in */}
        {admin && (
          <Link href="/cart">
            <Button variant="ghost" className="relative ml-2">
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
        )}
      </div>

      {/* Center - Logo */}
      <h2 className="text-2xl font-semibold italic">
        <Link href="/">G.I.</Link>
      </h2>

      {/* Right side - Theme toggle */}
      <div>
        <ToggleTheme />
      </div>
    </div>
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
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="hidden sm:flex h-16 items-center">
          <NavBarDesktop admin={loggedIn} />
        </div>
        <div className="sm:hidden h-16 items-center flex">
          <NavBarMobile admin={loggedIn} />
        </div>
      </div>
    </nav>
  );
}
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
