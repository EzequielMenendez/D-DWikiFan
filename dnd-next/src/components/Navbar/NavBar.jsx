import { StyledNav, SLink } from "./styledNav"

export default function Navbar() {
    return (
      <StyledNav>
        <h1>D&D Wiki</h1>
        <ul>
            <SLink href={'/races'}><li>Races</li></SLink>
            <li>Classes</li>
            <li>Spells</li>
            <li>Monsters</li>
        </ul>
      </StyledNav>
    )
}