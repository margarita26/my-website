import React from "react";
import Terminal from "terminal-in-react";
import { colors } from "../../constants";
import styled from '@emotion/styled';


const StyledContainer = styled.main`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100%; 
    width: 100%;
`

export const ResumeTerminal: React.FC = () => {
  return (
    <StyledContainer>
      <Terminal
        color={colors.neonBlue}
        prompt={colors.grey}
        backgroundColor="black"
        barColor="black"
        style={{ fontWeight: "bold", fontSize: "1em", marginTop: "16px" }}
        commands={{
          popup: () => alert("Terminal in React"),
        }}
        msg="You can type your commands here to get to know more about me ;) Type help to list all available commands"
      />
    </StyledContainer>
  );
};
