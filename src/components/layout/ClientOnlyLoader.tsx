"use client"

import { useEffect, useState } from "react"
import Loader from "./Loader"

export default function ClientOnlyLoader() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return <Loader />
}
