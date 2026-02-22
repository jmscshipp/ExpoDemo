import { FlatList, StyleSheet, Text, View } from 'react-native';

function Message() {
    return (
    <View style={styles.messageContainer}>
        <View style={styles.messageHeader}>
            <Text style ={styles.sender}>James Shipp</Text>
            <Text> 12:00 pm</Text>
        </View>
        <View style={styles.messageBody}>
            <Text>Sender: Message preview area!</Text>
            <View style={styles.unreadIcon}></View>
        </View>
    </View>
    );
}

const testData = ['Inbox', 'Sent', 'Drafts', 'Spam', 'Trash'];

export default function InboxScreen() {
  return (
    <FlatList
    data ={testData}
    keyExtractor={(item) => item}
    renderItem={(item) => <Message></Message>}>
    </FlatList>
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