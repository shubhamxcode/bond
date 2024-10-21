"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"
function sessionwraper({children}) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default sessionwraper