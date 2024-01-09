"use client"
import styled from "styled-components";
import Link from "next/link"

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  background-color: #c71a1f;
  align-items: center;
  color: white;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }

  ul {
    display: flex;
    gap: 3rem;
    list-style: none;

    @media screen and (max-width: 768px) {
      gap: 1rem;
    }

    @media screen and (max-width: 420px) {
        gap: 0.5rem;
        li{
            margin: 0;
            font-size: 12px;
        }
    }
  }
  @media screen and (max-width: 420px) {
        h1 {
            font-size: 17px;
        }
    }
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`