"use client"
import FlyOutMenuFixed from "./FlyOutMenuFixed"

// Backwards-compatible re-export for places importing `@/components/FlyOutMenu`.
export default function FlyOutMenu() {
  return <FlyOutMenuFixed />
}
