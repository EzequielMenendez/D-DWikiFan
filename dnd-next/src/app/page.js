"use client"
import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const APIAttribution = styled.p`
  font-size: 1rem;
  margin-top: 30px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Welcome to a Dungeons And Dragons wiki!</Title>
      <Description>
        This website is designed for you to explore and use the content in your game sessions. Currently, we have
        designed the races, and we will gradually be adding more sections!
      </Description>
      <Description>
        We hope you enjoy it; this page was developed using an API from{' '}
        <a href="https://www.dnd5eapi.co/" target="_blank" rel="noopener noreferrer">
          https://www.dnd5eapi.co/
        </a>
      </Description>
      <APIAttribution>
        API provided by <a href="https://www.dnd5eapi.co/" target="_blank" rel="noopener noreferrer">D&amp;D 5th Edition API</a>
      </APIAttribution>
    </HomeWrapper>
  );
};

export default Home;