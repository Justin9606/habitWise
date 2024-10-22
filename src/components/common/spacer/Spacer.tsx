import React from 'react';
import styled from 'styled-components/native';

type SpacerProps = {
  height?: number;
  width?: number;
};
const Spacer: React.FC<SpacerProps> = ({height, width}) => {
  return <StyledSpacer width={width} height={height} />;
};

export default Spacer;

const StyledSpacer = styled.View<{height?: number; width?: number}>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;
