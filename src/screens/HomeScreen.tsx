import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useRecoilState} from 'recoil';
import {habitState} from '../context/habitAtom';
import {Spacer} from 'components/common';
import Svg, {Circle} from 'react-native-svg';

const HomeScreen = () => {
  const [habits, setHabits] = useRecoilState(habitState);

  // Function to toggle habit completion
  const toggleCompletion = (id: number) => {
    setHabits(prevHabits =>
      prevHabits.map(habit =>
        habit.id === id ? {...habit, isCompleted: !habit.isCompleted} : habit,
      ),
    );
  };

  const renderGreeting = () => (
    <HeaderContainer>
      <GreetingText>Hi, Tokhirjon 😊</GreetingText>
      <EmojiIcon>🌟</EmojiIcon>
    </HeaderContainer>
  );

  const renderDailyGoals = () => {
    const completedGoals = habits.filter(habit => habit.isCompleted).length;
    const totalGoals = habits.length;

    return (
      totalGoals > 0 && (
        <DailyGoalsContainer>
          <GoalText>
            Your daily goals almost done! {completedGoals} of {totalGoals}{' '}
            completed
          </GoalText>
          <ProgressBar completed={completedGoals} total={totalGoals} />
        </DailyGoalsContainer>
      )
    );
  };

  const renderHabits = ({item}: any) => (
    <HabitContainer>
      <Row>
        <HabitText>{item.name}</HabitText>
        <TouchableOpacity onPress={() => toggleCompletion(item.id)}>
          <ProgressCircle
            progress={item.isCompleted ? 100 : 0}
            size={40}
            isCompleted={item.isCompleted}
          />
        </TouchableOpacity>
      </Row>
      <FrequencyText>
        {item.timesPerDay} {item.frequency}
      </FrequencyText>
    </HabitContainer>
  );

  return (
    <Container>
      {renderGreeting()}
      <Spacer height={16} />
      {renderDailyGoals()}
      <Spacer height={16} />
      <SectionTitle>
        {habits.some(habit => habit.habitType === 'quit')
          ? 'Challenges'
          : 'Habits'}
      </SectionTitle>
      <FlatList
        data={habits}
        keyExtractor={item => item.id.toString()}
        renderItem={renderHabits}
        ListEmptyComponent={<EmptyText>No habits added yet</EmptyText>}
      />
    </Container>
  );
};

// ProgressCircle Component
const ProgressCircle = ({
  progress,
  size = 40,
  isCompleted,
}: {
  progress: number;
  size: number;
  isCompleted: boolean;
}) => {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={isCompleted ? '#4CAF50' : '#E6E6E6'} // Change color based on completion
        strokeWidth={strokeWidth}
        fill="none"
      />
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#4CAF50"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default HomeScreen;

// Styled Components
const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #f9fafb;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GreetingText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const EmojiIcon = styled.Text`
  font-size: 24px;
`;

const DailyGoalsContainer = styled.View`
  padding: 16px;
  background-color: #eef2ff;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const GoalText = styled.Text`
  font-size: 16px;
  color: #4a56e2;
`;

const ProgressBar = styled.View`
  width: 100%;
  height: 8px;
  background-color: #c0c4e5;
  border-radius: 4px;
  margin-top: 8px;
  position: relative;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const HabitContainer = styled.View`
  margin-bottom: 12px;
  padding: 16px;
  background-color: #fff;
  border-radius: 12px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HabitText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const FrequencyText = styled.Text`
  font-size: 14px;
  color: #999;
`;

const EmptyText = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  color: #aaa;
`;
