import React from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

type DynamicTextProps = {
  text: string;
  actions: (() => void)[];
  customContainerStyle?: ViewStyle;
  customTextStyle?: TextStyle;
};

const DynamicText: React.FC<DynamicTextProps> = ({
  text,
  actions,
  customContainerStyle,
  customTextStyle,
}) => {
  const segments = text.split(/(@[^@]+@)/g);
  let actionIndex = 0;

  return (
    <StyledTextContainer>
      {segments.map((segment, index) => {
        if (segment.startsWith('@') && segment.endsWith('@')) {
          const displayText = segment.replace(/@/g, '').trim();
          // Retrieve the action using the actionIndex and increment it
          const action = actions[actionIndex++];
          return (
            <SegmentContainer key={index}>
              <TouchableWrapper onPress={action}>
                <HighlightedText>{displayText}</HighlightedText>
              </TouchableWrapper>
            </SegmentContainer>
          );
        }

        // For non-interactive segments, just remove the "@" symbols
        const cleanSegment = segment.replace(/@/g, '');
        return (
          <SegmentContainer key={index} style={customContainerStyle}>
            <StyledText style={customTextStyle}>{cleanSegment}</StyledText>
          </SegmentContainer>
        );
      })}
    </StyledTextContainer>
  );
};

export default DynamicText;

const SegmentContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const StyledTextContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const StyledText = styled.Text`
  color: #c2c2c2;
  font-family: Urbanist;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

const TouchableWrapper = styled(TouchableOpacity)`
  flex-direction: row;
`;

const HighlightedText = styled.Text`
  color: blue;
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26.4px;
  letter-spacing: 0.4px;
`;
