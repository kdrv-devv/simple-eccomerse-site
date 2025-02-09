"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {session ? (
        <>
          <p>Salom, {session.user?.name}!</p>
          <img
            src={session.user?.image || ""}
            alt="Avatar"
            className="rounded-[100%]"
            width={50}
            height={50}
          />
          <br />
          <button onClick={() => signOut()}>Chiqish</button>
        </>
      ) : (
        <>
          <p>GitHub orqali saytga kiring:</p>
          <button onClick={() => signIn("github")}>GitHub bilan kirish</button>
        </>
      )}
    </div>
  );
}
