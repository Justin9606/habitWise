import React, {useState} from 'react';
import {ScrollView, Alert} from 'react-native';
import styled from 'styled-components/native';
import {useSetRecoilState} from 'recoil';
import {habitState} from '../context/habitAtom';
import {PrimaryButton, OptionSelector, Spacer} from 'components/common';
import {Habit} from 'types/index';
import {habitColors} from 'components/common/colors';

const CreateHabitScreen = () => {
  const [habitName, setHabitName] = useState('');
  const [selectedColor, setSelectedColor] = useState(habitColors[0]);
  const [timesPerDay, setTimesPerDay] = useState('1');
  const [frequency, setFrequency] = useState('daily');
  const [habitType, setHabitType] = useState('build');
  const setHabits = useSetRecoilState(habitState);

  const handleSaveHabit = () => {
    if (!habitName.trim()) {
      Alert.alert('Error', 'Please enter a habit name.');
      return;
    }

    const newHabit: Habit = {
      id: Date.now(),
      name: habitName,
      frequency,
      timesPerDay: parseInt(timesPerDay, 10),
      habitType,
      color: selectedColor,
      type: habitType,
    };

    setHabits(prevHabits => [...prevHabits, newHabit]);

    Alert.alert('Success', `Habit '${habitName}' saved!`);
    setHabitName('');
    setTimesPerDay('1');
    setFrequency('daily');
    setHabitType('build');
  };

  return (
    <Wrapper>
      <ScrollView>
        <Spacer height={20} />
        <Label>Name</Label>
        <TextInputStyled
          placeholder="Enter habit name"
          value={habitName}
          onChangeText={setHabitName}
        />

        <Spacer height={16} />
        <Label>Color</Label>
        <ColorOptions>
          {habitColors?.map(color => (
            <ColorCircle
              key={color}
              color={color}
              selected={color === selectedColor}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </ColorOptions>
        <Spacer height={16} />
        <Label>Goal</Label>
        <GoalContainer>
          <TimesInput
            value={timesPerDay}
            keyboardType="numeric"
            onChangeText={setTimesPerDay}
          />

          <OptionSelector
            options={[
              {label: 'Daily', value: 'daily'},
              {label: 'Weekly', value: 'weekly'},
            ]}
            selectedOption={frequency}
            onSelect={setFrequency}
          />
        </GoalContainer>
        <Spacer height={16} />
        <Label>Habit Type</Label>
        <HabitTypeSelectorContainer>
          <OptionSelector
            options={[
              {label: 'Build', value: 'build'},
              {label: 'Quit', value: 'quit'},
            ]}
            selectedOption={habitType}
            onSelect={setHabitType}
          />
        </HabitTypeSelectorContainer>
      </ScrollView>
      <PrimaryButton
        onPress={handleSaveHabit}
        text="Add Habit"
        customStyle={{marginBottom: 20}}
        backgroundColor="#3843FF"
        textColor="#fff"
      />
    </Wrapper>
  );
};

export default CreateHabitScreen;

const Wrapper = styled.View`
  flex: 1;
  padding-horizontal: 24px;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
`;

const TextInputStyled = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #ddd;
  padding-vertical: 12px;
  color: #040415;
  font-size: 18px;
  line-height: 24px;
`;

const ColorOptions = styled.View`
  flex-direction: row;

  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  justify-content: space-around;
`;

const ColorCircle = styled.TouchableOpacity<{color: string; selected: boolean}>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${props => props.color};
  margin-right: 10px;
  border-width: ${props => (props.selected ? '3px' : '0')};
  border-color: #000;
`;

const GoalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: #fff;
  padding: 16px;
`;

const HabitTypeSelectorContainer = styled.View`
  border-radius: 12px;
  background-color: #fff;
  padding: 16px;
`;
const TimesInput = styled.TextInput`
  width: 50px;
  border-width: 1px;
  border-color: #ddd;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
`;
