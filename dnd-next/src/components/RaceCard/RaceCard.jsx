"use client"
import { StyledDiv, RCLink, StyledImage } from "./styledRCard"

function RaceCard({data}) {
  return (
    <RCLink href={`/races/${data.index}`}>
      <StyledDiv>
      <StyledImage
          src={`/races/${data.index}.webp`}
          alt={data.name}
          width={65}
          height={100}
        />
        <h4>{data.name}</h4>
      </StyledDiv>
    </RCLink>
  )
}

export default RaceCard