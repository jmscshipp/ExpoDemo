import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ParsedConvo } from '../src/utils/parseInbox';
import InboxScreen from './InboxScreen';
import MessagingScreen from './MessagingScreen';

// defining props for each screen
export type StackParamList = {
  Inbox: undefined;
  Messaging: {convo: ParsedConvo}
};

const RootStack = createNativeStackNavigator({
  screens: {
    Inbox: InboxScreen,
    Messaging: MessagingScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}