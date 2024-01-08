import { StyledNav, SLink } from "./styledNav"

export default function Navbar() {
    return (
      <StyledNav>
        <SLink href={'/'}><h1>D&D Wiki</h1></SLink>
        <ul>
            <SLink href={'/races'}><li>Races</li></SLink>
            <SLink href={'/classes'}><li>Classes</li></SLink>
            <SLink href={'/spells'}><li>Spells</li></SLink>
            <SLink href={'/monsters'}><li>Monsters</li></SLink>
        </ul>
      </StyledNav>
    )
}