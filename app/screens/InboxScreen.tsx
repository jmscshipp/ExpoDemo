import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { StackParamList } from '../App';
import InboxMessage from '../components/InboxMessage';
import data from '../inboxData.json';
import { ParsedConvo, parseInbox } from '../utils/parseInbox';

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