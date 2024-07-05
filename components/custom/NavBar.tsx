import ToggleTheme from "@/components/custom/ToggleTheme";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

function NavBarDesktop() {
  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Login
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavBarMobile() {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Menu className="m-2" />
      </DrawerTrigger>
      <DrawerContent className="h-screen w-4/5 ">
        <div>
          <NavigationMenu className=" mx-auto">
            <NavigationMenuList className="flex flex-col h-screen justify-center">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle() + " text-xl"}
                >
                  <span className="underline">Home</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle() + " text-xl"}
                >
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle() + " text-xl"}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle() + " text-xl"}
                >
                  Login
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function NavBar() {
  return (
    <>
      <div className="grid grid-cols-6 sm:hidden m-1">
        <NavBarMobile />
        <h2 className="text-2xl self-center col-span-4 text-center font-semibold italic">
          G.I.
        </h2>
        <ToggleTheme className="absolute right-0 z-10" />
      </div>
      <div className="hidden sm:flex m-1">
        <NavBarDesktop />
        <ToggleTheme className="absolute right-0 z-10" />
      </div>
    </>
  );
}
