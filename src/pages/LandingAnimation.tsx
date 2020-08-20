import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { useWindowSize } from "@react-hook/window-size";
import React from "react";
import logo from "../logo.svg";

type BackgroundImageProps = {
  width: number;
  height: number;
};

const fadeInAnimation = keyframes`
      0% { opacity: 0;}
      50% { opacity: 1;}
      100% { opacity: 0}
      `;

const BackgroundImage = styled.img<BackgroundImageProps>`
  animation: 5s ${fadeInAnimation};
  width: ${(props: BackgroundImageProps) => props.width};
  height: ${(props: BackgroundImageProps) => props.height};
`;

export const LandingAnimation: React.FC = () => {
  const [width, height] = useWindowSize();

  return (
    <div>
      <BackgroundImage
        width={width / 2}
        height={height / 2}
        src={logo}
        alt=""
      />
    </div>
  );
};
