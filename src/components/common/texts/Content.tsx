import React from 'react';
import {TextStyle} from 'react-native';
import styled from 'styled-components/native';

type ContentProps = {
  color?: string;
  text: string;
  customStyle?: TextStyle;
};

const Content: React.FC<ContentProps> = ({
  customStyle,
  text,
  color = '#c2c2c2',
}) => {
  return (
    <StyledText style={customStyle} color={color}>
      {text}
    </StyledText>
  );
};

export default Content;

const StyledText = styled.Text<{color: string}>`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => props.color};
`;
