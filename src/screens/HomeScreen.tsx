import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {useRecoilValue} from 'recoil';
import {habitState} from '../context/habitAtom';

const HomeScreen = () => {
  const habits = useRecoilValue(habitState);

  const renderItem = ({item}: any) => (
    <HabitContainer>
      <HabitText>{item.name}</HabitText>
      <FrequencyText>Frequency: {item.frequency}</FrequencyText>
    </HabitContainer>
  );

  return (
    <Container>
      <FlatList
        data={habits}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

const HabitContainer = styled.View`
  margin-bottom: 12px;
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const HabitText = styled.Text`
  font-size: 16px;
`;

const FrequencyText = styled.Text`
  font-size: 14px;
  color: #666;
`;
