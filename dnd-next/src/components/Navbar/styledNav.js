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
    ul{
        display: flex;
        gap: 6rem;
        list-style: none;
    }
`

export const SLink = styled(Link)`
    text-decoration: none;
    color: white;
`