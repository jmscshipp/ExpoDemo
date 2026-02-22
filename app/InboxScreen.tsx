import { FlatList } from 'react-native';
import data from './inboxData.json';
import Message from './Message';
import { ParsedConvo, parseInbox } from './parseInbox';

export default function InboxScreen() {
    const parsedData: ParsedConvo[] = parseInbox(data, "Bob");
    
    return (
    <FlatList
    data ={parsedData}
    keyExtractor={(item) => item.convoId.toString()}
    renderItem={({item}) => <Message contactName={item.contactName} mostRecentMessage={item.messages[item.lastMessageIndex]}></Message>}>
    </FlatList>
  );
}