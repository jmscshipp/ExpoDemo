import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ParsedMessage } from './utils/parseInbox';

type MessageProps = {
    contactName: string;
    mostRecentMessage: ParsedMessage;
};

export default function Message({contactName, mostRecentMessage} : MessageProps) {
    const [isRead, setIsRead] = useState(mostRecentMessage.isRead);
    
    return (
    <View style={styles.messageContainer}>
        <View style={styles.messageHeader}>
            <Text style ={styles.sender}>{contactName}</Text>
            <Text>{mostRecentMessage.time}</Text>
        </View>
        <View style={styles.messageBody}>
            <Text>{mostRecentMessage.sender + ": " + mostRecentMessage.message}</Text>
            {!isRead && <View style={styles.unreadIcon}></View>}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        backgroundColor: 'white',
        padding: 12,
    },
    messageHeader: {
        flex: 1 / 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 4
    },
    sender: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    messageBody: {
        flex: 3 / 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        fontSize: 12,
        paddingVertical: 10,
        paddingRight: 10 // spacing out the unread icon a bit
    },
        unreadIcon: {
        width: 8,
        height: 8,
        backgroundColor: 'cornflowerblue',
        borderRadius: '50%'
    },
  });