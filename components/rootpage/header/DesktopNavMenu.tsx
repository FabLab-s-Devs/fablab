import { NavLink } from "./NavLink";

export const DesktopNavMenu = () => (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavLink href="/">Home</NavLink>
        <NavLink href="#about">About Us</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/news">News</NavLink>
    </nav>
);
