import React from "react";
import styled from "styled-components";

import { theme } from "../constants/theme";

const Bar = styled.div({
  width: "1rem",
  height: "30rem",
  backgroundColor: theme.white,
  boxShadow: `0 0 20px ${theme.white}`,
  transform: "rotateZ(-35deg) translate(-18rem, -13rem)",
  animationDuration: theme.animationDuration,
  animationIterationCount: "infinite",
});

const WhiteAngledRight = () => <Bar className="flicker-white" />;

export default WhiteAngledRight;
