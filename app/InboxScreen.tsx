import InboxMessage from '@/src/components/InboxMessage';
import { getData, ParsedConvo, parseInbox } from '@/src/utils/parseInbox';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { StackParamList } from './App';

export default function InboxScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    const [parsedData, setData] = useState<ParsedConvo[]>([]);

    useEffect (() => {
      async function resolvePromise() {
        setData(parseInbox(await getData()));
        console.log(parsedData);
      }

      resolvePromise();
    }, []);

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