import React from 'react';
import {ImageSourcePropType, ImageStyle} from 'react-native';
import styled from 'styled-components/native';
import {SvgProps} from 'react-native-svg';

type CustomImageProps = {
  source: ImageSourcePropType | React.FC<SvgProps>;
  width?: string | number;
  height?: string | number;
  customStyle?: ImageStyle;
};

const CustomImage: React.FC<CustomImageProps> = ({
  source,
  width,
  height,
  customStyle,
}) => {
  if (typeof source === 'function') {
    const SvgComponent = source;
    return <SvgComponent width={width} height={height} />;
  }

  return <StyledImage source={source} style={customStyle} />;
};

export default CustomImage;

const StyledImage = styled.Image`
  resize-mode: contain;
`;
