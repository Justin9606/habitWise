/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

// Screens
import HomeScreen from '../../screens/HomeScreen';
import CreateHabitScreen from '../../screens/CreateHabitScreen';
import ProfileScreen from '../../screens/ProfileScreen';

// SVG Icons
import InActiveHome from 'assets/svg/home.svg';
import ActiveHome from 'assets/svg/home-active.svg';
import InActiveProfile from 'assets/svg/profile.svg';
import ActiveProfile from 'assets/svg/profile-active.svg';
import Plus from 'assets/svg/plus.svg';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const screenOptions = ({}) => ({
    backBehavior: 'history',
    tabBarHideOnKeyboard: true,
    unmountOnBlur: true,

    tabBarActiveTintColor: '#4038FF',
    tabBarInactiveTintColor: '#94A3B8',
    tabBarShowLabel: true,
    tabBarStyle: {},
    tabBarIconStyle: {
      marginTop: 15,
      paddingBottom: 5,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: '600',
      lineHeight: 18,
      textAlign: 'center',
      alignSelf: 'center',
    },
  });

  const tabBarIcon = (IconComponent: React.ComponentType<any>) => {
    return (
      <IconWrapper>
        <IconComponent />
      </IconWrapper>
    );
  };

  const CenterTabBarIcon = () => {
    return (
      <CenterWrapper>
        <PlusIconWrapper>
          <Plus width={24} height={24} fill="#F8FAFC" />
        </PlusIconWrapper>
      </CenterWrapper>
    );
  };

  return (
    <Tab.Navigator initialRouteName="HomeScreen" screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            tabBarIcon(focused ? ActiveHome : InActiveHome),
          tabBarLabel: 'Home',
          headerTitle: 'Home',
        }}
      />
      <Tab.Screen
        name="CreateHabitScreen"
        component={CreateHabitScreen}
        options={{
          tabBarIcon: CenterTabBarIcon,
          tabBarLabel: () => null,
          headerTitle: 'Create Habit',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            tabBarIcon(focused ? ActiveProfile : InActiveProfile),
          tabBarLabel: 'Profile',
          headerTitle: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const IconWrapper = styled.View`
  height: 24px;
  width: 24px;
  align-items: center;
  justify-content: center;
`;

const CenterWrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: #3843ff;
  position: absolute;
  top: -30px;
`;

const PlusIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;
