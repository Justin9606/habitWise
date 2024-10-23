import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import TabNavigator from 'navigators/tab-navigator/tab-navigator';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <TabNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
