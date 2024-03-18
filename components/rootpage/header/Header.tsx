import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image"
import SignInBtn from "@/components/rootpage/signInBtn";
import SignOutBtn from "@/components/rootpage/signOutBtn";

async function Header() {
  const session = await auth();
  var signedIn = false;
  if (session && session.user) {
    var { image } = session.user;
    signedIn = true;
  }

  return (
    <div className="container-s tablet:container-t laptop:container-pc py-2">
      <div className="flex items-center justify-between ">
        <Image
          width={36}
          height={32}
          alt="Fablab UIA Logo"
          src="/logo.svg"
        />
        {
          signedIn ?
            <DropdownMenu>
              <DropdownMenuTrigger>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={image || ""} />
                    <AvatarFallback>fb</AvatarFallback>
                  </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Reservations</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><SignOutBtn/></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> :
            <SignInBtn>
              <button type="submit" className="text-primary-foreground font-medium px-2 py-1 bg-primary text-[12px] rounded-sm">
                Sign In
              </button>
            </SignInBtn>
        }



      </div>
    </div>
  )
}

export default Header