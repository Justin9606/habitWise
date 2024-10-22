import React from 'react';
import styled from 'styled-components/native';

type SecondaryButtonProps = {
  text: string;
  icon?: JSX.Element;
  backgroundColor?: string;
  textColor?: string;
  onPress: () => void;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
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
      activeOpacity={1}>
      {icon && icon}
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </StyledButton>
  );
};

export default SecondaryButton;

const StyledButton = styled.TouchableOpacity<{
  backgroundColor: string;
  icon?: JSX.Element;
}>`
  background-color: ${props => props.backgroundColor};
  align-items: center;
  border-radius: 40px;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  flex-direction: row;
  ${({icon}) => (icon ? 'gap: 4px;' : '')};
`;

const ButtonText = styled.Text<{textColor: string}>`
  color: ${props => props.textColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
