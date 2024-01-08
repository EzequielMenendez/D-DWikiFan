"use client"
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ComingSoonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 40px;
`;

const Slink = styled(Link)`
    text-decoration: none;
    color: black;
`

const ComingSoon = () => {
  return (
    <ComingSoonWrapper>
      <Title>Coming Soon...</Title>
      <Description>Stay tuned! Exciting content is on the way.</Description>
      <Subtitle>Meanwhile, check out our other sections!</Subtitle>
      <ul>
        <li><Slink href={'/races'}><Description>Races</Description></Slink></li>
      </ul>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;