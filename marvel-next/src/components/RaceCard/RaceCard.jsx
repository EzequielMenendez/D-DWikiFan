"use client"
import Link from "next/link"
import { StyledDiv } from "./styledRCard"

function RaceCard({data}) {
  return (
    <Link href={`/races/${data.index}`}>
      <StyledDiv>
        <h4>{data.name}</h4>
      </StyledDiv>
    </Link>
  )
}

export default RaceCard