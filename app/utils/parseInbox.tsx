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
    sender: string;
    message: string;
    isRead: boolean;
    time: string; // ? is this in a different format
}

export const parseInbox = (data: RawData, user: string): ParsedConvo[] => {
    return data.inbox.map((conversation, index) => ({
        // assigning contact name by including all convo participants except user
        contactName: (conversation.map(convo => convo.name).
        filter(name => name != user ).join(", ")),
        convoId: index,
        messages: conversation.map(message => ({
            sender: message.name,
            message: message.message,
            isRead: message.seen.includes(user),
            time: new Date(message.timestamp).toLocaleDateString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                month: "long",
                day: "numeric",
            })
        })),
        lastMessageIndex: 0 // GO BACK AND CALCULATE THIS BASED ON TIMESTAMPS
    }))
}

/*
to extra from the data for each conversation
- messages
    - sender
    - message
    - isRead?
    - timestamp
- lastmessageindex
*/