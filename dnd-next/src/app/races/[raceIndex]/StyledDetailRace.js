"use client"
import styled from "styled-components"
import Image from "next/image";

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 80vw;
  margin: 0 auto;

  @media (max-width: 890px) {
    flex-direction: column-reverse;
    align-items: center;
    max-width: 60vw;
  }
`;

export const TextContainer = styled.div`
  min-width: 300px;
  max-width: 45%;
  margin-bottom: 20px;

  @media (max-width: 890px) {
    max-width: none;
  }

  p{
    font-size: 16px;
    line-height: 1.5;
  }

  h2 {
    font-size: 27px;
    margin-bottom: 10px;
  }

  h3{
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

export const ImageContainer = styled.div`
  min-width: 300px;
  max-width: 45%;
`;

export const StyledImage = styled(Image)`
  margin-top: 10px;
  max-width: 100%;
  height: auto;
`;