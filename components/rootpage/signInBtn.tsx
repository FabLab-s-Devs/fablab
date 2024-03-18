import { signIn } from "@/auth";

async function SignInBtn({ children }: {
    children: React.ReactNode
}) {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("google");
            }}
        >
            {children}
        </form>
    )
}


export default SignInBtn;