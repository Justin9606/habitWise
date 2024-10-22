import React from 'react';
import styled from 'styled-components/native';

type ButtonItem = {
  text: string;
  icon?: JSX.Element;
  onPress: () => void;
};

type SecondaryButtonProps = {
  buttons: ButtonItem[];
  backgroundColor?: string;
  textColor?: string;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  buttons,
  backgroundColor = '#fff',
  textColor = '#040415',
}) => {
  return (
    <ButtonContainer>
      {buttons.map((button, index) => (
        <StyledButton
          key={index}
          onPress={button.onPress}
          backgroundColor={backgroundColor}
          activeOpacity={0.7}>
          {button.icon && button.icon}
          <ButtonText textColor={textColor}>{button.text}</ButtonText>
        </StyledButton>
      ))}
    </ButtonContainer>
  );
};

export default SecondaryButton;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled.TouchableOpacity<{
  backgroundColor: string;
  icon?: JSX.Element;
}>`
  background-color: ${props => props.backgroundColor};
  border-radius: 40px;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  flex-direction: row;
  gap: 4px;
`;

const ButtonText = styled.Text<{textColor: string}>`
  color: ${props => props.textColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
