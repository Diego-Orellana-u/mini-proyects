import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav
      data-testid="parent-nav"
      className="w-full border-b bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60 stricky top-0 z-50"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-bold text-xl tracking-tight text-gray-900"
          >
            Wiki
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link data-testid="nav-signin-link" href="/signin">
                  Sign In
                </Link>
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button asChild>
                <Link data-testid="nav-signup-link" href="/signup">
                  Sign Up
                </Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
