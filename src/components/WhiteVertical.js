import React from "react";
import styled from "styled-components";

import { theme } from "../constants/theme";

const Bar = styled.div({
  width: "1rem",
  height: "10rem",
  backgroundColor: theme.white,
  boxShadow: `0 0 20px ${theme.white}`,
  margin: "-1rem 3rem",
  animationDuration: theme.animationDuration,
  animationIterationCount: "infinite",
});

const WhiteVertical = () => <Bar className="flicker-white" />;

export default WhiteVertical;
