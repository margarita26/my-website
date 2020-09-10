import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { ListItem } from '@material-ui/core';
import { useWindowSize } from '@react-hook/window-size';
import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import { colors, fonts, fontSizes, screenSize } from '../../constants';
import { Post } from '../../constants/models';
import { ApiContext } from '../../contexts/api-context';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type DivProps = {
  screenWidth: number;
  screenHeight: number;
};

type TextProps = {
  size: string;
};

const slideAnimation = keyframes`
      0% { left: -500px;}
      100% { left: 2% ;}
      `;

const StyledListItem = styled(ListItem)`
  animation-name: ${slideAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

const StyledDiv = styled.div<DivProps>`
  position: absolute;
  left: 3%;
  top: 20%;
  flex-direction: column;
  overflow: scroll;
  overflow-y: scroll;
`;

const StyledDateDiv = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid ${colors.neonBlue};
  font-size: ${fontSizes.regular};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledPostDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.text<TextProps>`
  padding-left: 32px;
  color: ${colors.white};
  font-size: ${(props: TextProps) => props.size};
  font-family: ${fonts.rajdhani};
  /* @media (min-width: ${screenSize.phone}) {
    font-size: ${fontSizes.regular};
  }
  @media (min-width: ${screenSize.desktop}) {
    font-size: ${fontSizes.heading};
  } */
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
  const [width, height] = useWindowSize();

  console.log(height);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts();
      console.log(result);
      setPosts(result);
    };
    fetchPosts();
  }, []);

  return (
    <StyledDiv screenHeight={height} screenWidth={width}>
      {posts?.map((post, index) => {
        const date = dayjs(post.created_at);
        return (
          <StyledListItem button key={index}>
            <StyledDateDiv>
              <StyledDateText>
                {date.day()} {MONTH_NAMES[date.month() - 1]}
              </StyledDateText>
              <StyledDateText>{date.year()}</StyledDateText>
            </StyledDateDiv>
            <StyledPostDiv>
              <StyledText size={fontSizes.heading}>{post.title}</StyledText>
              <StyledText size={fontSizes.regular}>{post.text}</StyledText>
            </StyledPostDiv>
          </StyledListItem>
        );
      })}
    </StyledDiv>
  );
};
