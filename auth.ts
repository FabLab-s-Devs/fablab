import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { getTeamByChef } from "./lib/actions/team.actions";

export const authConfig: NextAuthConfig = {
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async session({ session }: any) {
            const { user } = session
            if (user) {
                const userTeam = await getTeamByChef(user.email);
                if (userTeam) {
                    session.user.teamId = userTeam._id;
                }
            }
            
            return session
        },
    }
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);