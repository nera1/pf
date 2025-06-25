"use client";

import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const commonStyle = `font-medium text-sm hover:text-blue-500`;

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className={`flex gap-x-4`}>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={commonStyle}>
            <Link to="/">Introduction</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={commonStyle}>
            <Link to="/career">Career</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={commonStyle}>
            <Link to="/portfolio">Portfolio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
