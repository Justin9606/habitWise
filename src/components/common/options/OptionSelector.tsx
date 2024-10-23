import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  selectedOption: string;
  onSelect: (value: string) => void;
};

const OptionSelector: React.FC<Props> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          onPress={() => onSelect(option.value)}>
          <OptionButton selected={selectedOption === option.value}>
            <OptionText selected={selectedOption === option.value}>
              {option.label}
            </OptionText>
          </OptionButton>
        </TouchableOpacity>
      ))}
    </OptionsContainer>
  );
};

export default OptionSelector;

const OptionsContainer = styled.View`
  flex-direction: row;
`;

const OptionButton = styled.View<{selected: boolean}>`
  padding: 12px;
  border-radius: 8px;
  margin-right: 10px;
  background-color: ${props => (props.selected ? '#3843FF' : '#f0f0f0')};
`;

const OptionText = styled.Text<{selected: boolean}>`
  font-size: 16px;
  color: ${props => (props.selected ? '#fff' : '#333')};
`;
