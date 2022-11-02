import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { theme } from "./constants/theme";
import BlueLeft from "./components/BlueLeft";
import BlueRight from "./components/BlueRight";
import WhiteVertical from "./components/WhiteVertical";
import WhiteAngledRight from "./components/WhiteAngledRight";
import WhiteAngledLeft from "./components/WhiteAngledLeft";
import Cards from "./components/Cards";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Fredoka One', cursive;
    background-color: ${theme.backgroundColor};
  }

  body {
    padding: 5rem
  }

  .flicker-blue {
    animation-name: flicker-blue;
    animation-timing-function: linear;
  }

  @keyframes flicker-blue {
    0% {
      box-shadow: 0 0 20px ${theme.blue}, 0 0 10px ${theme.blue};
    }
    50% {
      box-shadow: 0 0 40px ${theme.blue}, 0 0 10px ${theme.blue}, 0 0 5px ${theme.white};
    }
    100% {
      box-shadow: 0 0 20px ${theme.blue}, 0 0 10px ${theme.blue};
    }
  }

  .flicker-white {
    animation-name: flicker-white;
    animation-timing-function: linear;
  }

  @keyframes flicker-white {
    0% {
      box-shadow: 0 0 20px ${theme.white};
    }
    50% {
      box-shadow: 0 0 30px ${theme.white}, 0 0 10px ${theme.white}, 0 0 5px ${theme.white};
    }
    100% {
      box-shadow: 0 0 20px ${theme.white};
    }
  }

  #cards {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 30rem;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    gap: 8px;  
    max-width: 916px;
    width: calc(100% - 20px);
  }
  
  #cards:hover > .card::after {
    opacity: 1;
  }
  
  .card {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    height: 260px;
    flex-direction: column;
    position: relative;
    width: 300px;  
  }
  
  .card:hover::before {
    opacity: 1;
  }
  
  .card::before,
  .card::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }
  
  .card::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y), 
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }
  
  .card::after {  
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y), 
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }
  
  .card > .card-content {
    background-color: var(--card-color);
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    inset: 1px;
    padding: 10px;
    position: absolute;
    z-index: 2;
  }

  h1, h2, h3, h4, span {
    color: rgb(240, 240, 240);
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    margin: 0px;
  }
  
  i {  
    color: rgb(240, 240, 240);
  }
  
  .card-image {
    align-items: center;
    display: flex;
    height: 140px;
    justify-content: center;
    overflow: hidden;
  }
  
  .card-image > i {
    font-size: 6em;
    opacity: 0.25;
  }
  
  .card-info-wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    padding: 0px 20px;
  }
  
  .card-info {
    align-items: flex-start;
    display: flex;
    gap: 10px;
  }
  
  .card-info > i {  
    font-size: 1em;
    height: 20px;
    line-height: 20px;
  }
  
  .card-info-title > h3 {
    font-size: 1.1em;
    line-height: 20px;
  }
  
  .card-info-title > h4 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85em;
    margin-top: 8px;
  }
`;

const PageContainer = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

const BlueContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
});

const TopContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "-1rem",
});

const MidContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
});

const App = () => {
  useEffect(() => {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  });

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Cards />
        <TopContainer>
          <WhiteAngledLeft />
          <WhiteAngledRight />
        </TopContainer>
        <MidContainer>
          <WhiteVertical />
          <BlueContainer>
            <BlueLeft />
            <BlueRight />
          </BlueContainer>
          <WhiteVertical />
        </MidContainer>
      </PageContainer>
    </>
  );
};

export default App;
