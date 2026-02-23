import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import InboxScreen from './screens/InboxScreen';
import MessagingScreen from './screens/MessagingScreen';
import { ParsedConvo } from './utils/parseInbox';

export const USER_NAME: string = "Bob";

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