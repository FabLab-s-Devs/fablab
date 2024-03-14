import { auth, signIn } from "@/auth";
import Image from "next/image"

async function Header() {
  const session = await auth();
  console.log(session);

  return (
    <div className="container-s tablet:container-t laptop:container-pc py-2">
      <div className="flex items-center justify-between ">
        <Image
          width={36}
          height={32}
          alt="Fablab UIA Logo"
          src="/logo.svg"
        />
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button className="text-primary-foreground font-medium px-2 py-1 bg-primary text-[12px] rounded-sm">
            Sign In
          </button>
        </form>

      </div>
    </div>
  )
}

export default Header