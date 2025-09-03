import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      {/* <p>{session?.user ? "You are Signed In" : "Please Sing In!"}</p> */}
      <p>{session?.user ? JSON.stringify(session.user) : "Please Sing In!"}</p>

      <Profile />
    </div>
  );
}
