// pages/auth.js
"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthPage() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {session ? (
        <>
          <h1 className="text-2xl">Signed in as {session.user?.email}</h1>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl">Not signed in</h1>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => signIn()}
          >
            Sign in with Github
          </button>
        </>
      )}
    </div>
  )
}
