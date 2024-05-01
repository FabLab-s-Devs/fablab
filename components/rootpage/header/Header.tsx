import { LogoLink } from "./LogoLink";
import { MobileNavMenu } from "./MobileNavMenu";
import { DesktopNavMenu } from "./DesktopNavMenu";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export const Header = async () => {
	const user = await currentUser();
    return (
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
            <LogoLink
                src="/logo.svg"
                alt="Fablab Logo"
                width={40}
                height={40}
                mobile={false}
            />
            <DesktopNavMenu />
            <MobileNavMenu />
            {user ? (
                <UserButton
                    appearance={{
                        elements: {
                            avatarBox: "w-9 h-9",
                            userButtonPopoverFooter: "hidden",
                        },
                    }}
                />
            ) : (
                <Link
                    href="/sign-in"
                    className="mr-3 px-3 py-1 bg-amber-500 text-white hover:bg-amber-600 rounded-sm"
                >
                    Se Connecter
                </Link>
            )}
        </header>
    );
};

export default Header;