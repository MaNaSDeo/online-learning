"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    // return <p>From client: user is signed in</p>;
    return <p>From client: {JSON.stringify(session.data.user)}</p>;
  }

  return <p>From client: user is Not signed in</p>;
}
