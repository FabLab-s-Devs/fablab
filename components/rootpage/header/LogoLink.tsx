import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const LogoLink = ({ src, alt, width, height, mobile }: any) => (
    <Link
        href="#"
        className={cn(
            "gap-2 text-lg font-semibold",
            mobile ? "flex items-center" : "hidden md:flex md:items-center"
        )}
    >
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-full"
        />
        <span className="sr-only">{alt}</span>
    </Link>
);
