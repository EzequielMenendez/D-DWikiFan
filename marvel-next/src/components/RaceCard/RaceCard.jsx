"use client"
import Link from "next/link"
import { StyledDiv } from "./styledRCard"
import Image from "next/image";

function RaceCard({data}) {
  return (
    <Link href={`/races/${data.index}`}>
      <StyledDiv>
      <Image
          src={`/races/${data.index}.webp`}
          alt={data.name}
          width={50}
          height={80}
        />
        <h4>{data.name}</h4>
      </StyledDiv>
    </Link>
  )
}

export default RaceCard