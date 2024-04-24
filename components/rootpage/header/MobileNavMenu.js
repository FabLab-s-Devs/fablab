import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { LogoLink } from "./LogoLink";
import { NavLink } from "./NavLink";

export const MobileNavMenu = () => (
    <Sheet>
        <SheetTrigger asChild>
            <Button
                variant="outline"
                size="icon"
                className="shrink-0 hiddenForMd"
            >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
                <LogoLink
                    src="/logo.svg"
                    alt="Fablab Logo"
                    width={45}
                    height={45}
                    mobile={true}
                />
                <NavLink>Home</NavLink>
                <NavLink>Projects</NavLink>
                <NavLink>About Us</NavLink>
                <NavLink>News</NavLink>
            </nav>
        </SheetContent>
    </Sheet>
);
