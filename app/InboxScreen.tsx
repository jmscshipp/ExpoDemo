import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import InboxMessage from '../src/components/InboxMessage';
import data from '../src/inboxData.json';
import { ParsedConvo, parseInbox } from '../src/utils/parseInbox';
import { StackParamList } from './App';

export default function InboxScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const parsedData: ParsedConvo[] = parseInbox(data);
    
    return (
    <FlatList
    data ={parsedData}
    keyExtractor={(item) => item.convoId.toString()}
    renderItem={({item}) => <InboxMessage 
      convo={item}
      openMessaging={(convo: ParsedConvo)=> navigation.navigate('Messaging', {convo})}
      ></InboxMessage>}>
    </FlatList>
  );
}