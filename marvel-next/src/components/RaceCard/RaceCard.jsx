"use client"
import Link from "next/link"
import { StyledDiv } from "./styledRCard"
import Image from "next/image";

function RaceCard({data}) {
  return (
    <Link href={`/races/${data.index}`}>
      <StyledDiv>
      <Image
          src={`/${data.index}.jpg`}
          alt={data.name}
          width={50}
          height={50}
        />
        <h4>{data.name}</h4>
      </StyledDiv>
    </Link>
  )
}

export default RaceCard