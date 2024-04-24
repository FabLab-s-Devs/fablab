import Link from "next/link";

export const NavLink = ({ children, className = "" }) => (
    <Link href="#" className={`hover:text-amber-500 text-black ${className}`}>
        {children}
    </Link>
);
