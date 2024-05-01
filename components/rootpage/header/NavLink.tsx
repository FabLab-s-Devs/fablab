import Link from "next/link";

export const NavLink = ({ children, className = "", href }: any) => (
    <Link
        href={href}
        className={`hover:text-amber-500 text-black ${className}`}
    >
        {children}
    </Link>
);
