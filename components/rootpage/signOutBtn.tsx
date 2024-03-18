import { signOut } from "@/auth";

async function SignOutBtn() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <button>
                Sign Out
            </button>
        </form>
    )
}


export default SignOutBtn;