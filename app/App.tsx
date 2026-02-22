import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import InboxScreen from './InboxScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Inbox: InboxScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}