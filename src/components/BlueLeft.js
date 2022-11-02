import React from "react";
import styled from "styled-components";

import { theme } from "../constants/theme";

const RectContainer = styled.div({
  position: "relative",
  width: '22rem',
  marginTop: '3rem'
});

const RectTop = styled.div({
  position: "absolute",
  top: 0,
  height: "20rem",
  width: "8rem",
  transform: "skewY(35deg)",
  backgroundColor: theme.blue,
  boxShadow: `0 0 20px ${theme.blue}`,
  animationDuration: theme.animationDuration,
  animationIterationCount: "infinite",
});

const RectBottom = styled.div({
  position: "absolute",
  top: "20rem",
  height: "12rem",
  width: "5rem",
  transform: "skewX(55deg) translateX(12.5rem) translateY(-2.75rem)",
  backgroundColor: theme.blue,
  boxShadow: `0 0 20px ${theme.blue}`,
  animationDuration: theme.animationDuration,
  animationIterationCount: "infinite",
});

const BlueLeft = () => (
  <RectContainer>
    <RectBottom className="flicker-blue" />
    <RectTop className="flicker-blue" />
  </RectContainer>
);

export default BlueLeft;