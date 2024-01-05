"use client"
import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"

export const StyledDiv = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    border: 1px solid #ccc;
    width: 400px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    h4 {
        font-size: 18px;
    }
`

export const RCLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export const StyledImage = styled(Image)`
    width: 80px;
    height: 100px;
`