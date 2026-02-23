// types for the initial format of the JSON file
export type RawData = {
  inbox: RawMessage[][];
};

export type RawMessage = {
  name: string;
  message: string;
  seen: string[];
  timestamp: number;
};

// types for the inbox once it's parsed
export type ParsedConvo = {
    convoId: number;
    contactName: string;
    messages: ParsedMessage[];
    lastMessageIndex: number;
}

export type ParsedMessage = {
    messageId: number; // this is for use with keyextractor in messaging screen
    sender: string;
    message: string;
    isRead: boolean;
    time: string;
}

export const parseInbox = (data: RawData, user: string): ParsedConvo[] => {
    // format data into parsed convos type
    let parsedConvos : ParsedConvo[] = data.inbox.map((conversation, index) => ({
        // assigning contact name by including all convo participants except user
        contactName: (conversation.map(convo => convo.name).
        filter(name => name != user ).join(", ")),
        convoId: index,
        messages: conversation.map((message, index) => ({
            messageId: index,
            sender: message.name,
            message: message.message,
            isRead: message.seen.includes(user),
            time: new Date(message.timestamp).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
            })
        })),
        // comparing each message in convo by timestamp to find most recent index
        lastMessageIndex: conversation.reduce<number>((latestIndex, message, currentIndex) => {
            return message.timestamp > conversation[latestIndex].timestamp ? currentIndex : latestIndex;}, 0)
    }));

    // now sort chronologically
    return parsedConvos.sort((a, b) => { 
        return data.inbox[b.convoId][b.lastMessageIndex].timestamp - 
        data.inbox[a.convoId][a.lastMessageIndex].timestamp;
    });
}