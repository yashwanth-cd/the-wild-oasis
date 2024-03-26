/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "../ui/Heading";
import { CgDanger } from "react-icons/cg";
import { useEffect, useState } from "react";

const StyledMessage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--color-grey-400);
  overflow: hidden;

  h1 {
    display: flex;
    align-items: center;
    border: 2px solid rgba(0, 0, 0, 0.151);
    padding: 25px;
    color: rgba(55, 55, 55, 0.725);
    background-color: #add5ff;

    @media (max-width: 640px) {
      font-size: 16px;
    }
  }
`;

export default function DesktopViewMessage({ children }) {
  const [desktopWidth, setDesktopWidth] = useState(window.innerWidth);

  window.addEventListener("resize", function () {
    const width = this.window.innerWidth;
    setDesktopWidth(width);
  });

  useEffect(function () {}, [desktopWidth]);

  if (desktopWidth >= 1400) {
    return children;
  }

  return (
    <StyledMessage>
      <Heading as="h1">
        <CgDanger style={{ width: "35px", marginRight: "10px" }} /> Please
        switch to desktop view for better experience
      </Heading>
    </StyledMessage>
  );
}
