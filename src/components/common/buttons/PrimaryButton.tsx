import React from 'react';
import styled from 'styled-components/native';

type PrimaryButtonProps = {
  text: string;
  icon?: JSX.Element;
  backgroundColor?: string;
  textColor?: string;
  onPress: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  icon,
  backgroundColor = '#fff',
  textColor = '#040415',
  onPress,
}) => {
  return (
    <StyledButton
      onPress={onPress}
      backgroundColor={backgroundColor}
      activeOpacity={0.7}>
      {icon && icon}
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </StyledButton>
  );
};

export default PrimaryButton;

const StyledButton = styled.TouchableOpacity<{
  backgroundColor: string;
  icon?: JSX.Element;
}>`
  background-color: ${props => props.backgroundColor};
  padding-vertical: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  flex-direction: row;
  ${({icon}) => (icon ? 'gap: 4px;' : '')};
`;

const ButtonText = styled.Text<{textColor: string}>`
  color: ${props => props.textColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
