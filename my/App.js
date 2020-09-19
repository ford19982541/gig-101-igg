import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFormScreen from './screens/ResumeForm'
import ResumeDetailScreen from './screens/ResumeDetail'
import ResumeListScreen from './screens/ResumeList'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeForm" options={{title: 'Resume Form'}} component={ResumeFormScreen} />
        <Stack.Screen name="ResumeDetail" options={{title: 'Resume Detail'}} component={ResumeDetailScreen} />
        <Stack.Screen name="ResumeList" options={{title: 'Resume List'}} component={ResumeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;