"use client"
import Link from "next/link"

function RaceCard({data}) {
  return (
    <div>
        <h4>{data.name}</h4>
        <Link href={`/races/${data.index}`}>Description</Link>
    </div>
  )
}

export default RaceCard