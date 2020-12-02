import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { List, ListItem } from "@material-ui/core";
import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { colors, fonts, fontSizes, MONTH_NAMES, screenSize, Post } from "../../constants";
import { ApiContext } from "../../contexts/api-context";
import Emoji from 'a11y-react-emoji';

type TextProps = {
  mobileTextSize: string;
  desktopTextSize: string;
};

const slideAnimation = keyframes`
      0% { left: -${window.screen.width}px}
      100% { left: 0% ;}
      `;

const StyledList = styled(List)`
  @media (min-width: ${screenSize.phone}) {
    left: 6%;
    max-width: 85%;
  }
  @media (min-width: ${screenSize.desktop}) {
    left: 25%;
    max-width: 50%;
  }
`;

const StyledListItem = styled(ListItem)`
  animation: ${slideAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

const StyledDiv = styled.div`
  position: absolute;
  left: 2%;
  top: 15%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96%;
  margin-bottom: 64px;
`;

const StyledIntroTextDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 32px;
`;

const StyledDateDiv = styled.div`
  border-radius: 50%;
  border: 1px solid ${colors.neonBlue};
  font-size: ${fontSizes.regular};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${screenSize.phone}) {
    width: 70px;
    height: 70px;
  }
  @media (min-width: ${screenSize.desktop}) {
    width: 90px;
    height: 90px;
  }
`;

const StyledIntroText = styled.p`
  font-family: ${fonts.rajdhani};
  font-size: ${fontSizes.subHeading};
  color: ${colors.white};
  border-top: 1px ${colors.white} solid;
  border-bottom: 1px ${colors.white} solid;
  @media (min-width: ${screenSize.phone}) {
    font-size: ${fontSizes.regular};
    width: 80%;
  }
  @media (min-width: ${screenSize.desktop}) {
    font-size: ${fontSizes.subHeading};
    width: 48%;
  }
`;

const StyledText = styled.text<TextProps>`
  padding-left: 32px;
  color: ${colors.white};
  font-family: ${fonts.heebo};
  @media (min-width: ${screenSize.phone}) {
    font-size: ${(props: TextProps) => props.mobileTextSize};
  }
  @media (min-width: ${screenSize.desktop}) {
    font-size: ${(props: TextProps) => props.desktopTextSize};
  }
  :hover {
    color: ${colors.neonBlue};
  }
`;

const StyledDateText = styled.text`
  color: ${colors.white};
  font-family: ${fonts.rajdhani};
`;

export const BlogPage: React.FC = () => {
  const { getPosts } = useContext(ApiContext);
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts();
      if (result) {
        setPosts(result.reverse());
      }
    };
    fetchPosts();
  }, [getPosts]);

  return (
    <StyledDiv>
      <StyledIntroTextDiv>
        <StyledIntroText>
          Bellow i will share some of the solutions to problems that i encountered while working on
          different projects and just other interesting stuff that i learned <Emoji symbol="🥳" label="cheering" />
        </StyledIntroText>
      </StyledIntroTextDiv>
      <span role="img">
        <StyledList>
          {posts?.map((post, index) => {
            const date = dayjs(post.created_at);
            return (
              <StyledListItem button alignItems="flex-start" key={index}>
                <StyledDateDiv>
                  <StyledDateText>
                    {date.day()} {MONTH_NAMES[date.month() - 1]}
                  </StyledDateText>
                  <StyledDateText>{date.year()}</StyledDateText>
                </StyledDateDiv>
                <StyledText mobileTextSize={fontSizes.regular} desktopTextSize={fontSizes.heading}>
                  {post.title}
                </StyledText>
              </StyledListItem>
            );
          })}
        </StyledList>
      </span>
    </StyledDiv>
  );
};
