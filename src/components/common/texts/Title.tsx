import React from 'react';
import {TextStyle} from 'react-native';
import styled from 'styled-components/native';

type TitleProps = {
  text: string;
  color?: string;
  customStyle?: TextStyle;
};

const Title: React.FC<TitleProps> = ({customStyle, text, color = '#fff'}) => {
  return (
    <StyledTitle style={customStyle} color={color}>
      {text}
    </StyledTitle>
  );
};

export default Title;

const StyledTitle = styled.Text<{color: string}>`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: ${props => props.color};
`;
