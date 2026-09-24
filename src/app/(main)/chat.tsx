import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Chat from "@codsod/react-native-chat"
import colors from '@/styles/colors';
import imagePath from '@/constants/imagePath';
import ChatHeader from '@/components/atoms/ChatHeaders';


const ChatScreen = () => {
    const [messages, setMessages] = useState<any>([]);
    const onSendMessages = (text:string)=>{
        setMessages((prevMessage:any) =>[
            {
                _id:prevMessage.length+1,
                text,
                createdAt:new Date(),
                user:{
                    _id:1,
                    name:"dfdfefe",
                },
            },
            ...prevMessage
        ])
    }
  return (
    <View style={{ flex: 1 }}>
        <ChatHeader/>
        <Chat 
        messages={messages}
        themeColor={colors.primary}
        themeTextColor={colors.white}
        showSenderAvatar={false}
        showReceiverAvatar={false}
        placeholder='Type a message...'
        inputBackgroundColor={colors.primary}
        placeholderColor={colors.lightGray}
        backgroundImage={imagePath.chat_bag}
        backgroundColor="transparent"
        setMessages={(val) => onSendMessages(val)}
        showEmoji={true}
        onPressEmoji={()=>alert("Emoji")}
        showAttachment={true}
        onPressAttachment={()=>alert("Attachment")}
        
        user={{
            _id:1,
            name:"jinesh jain",
        }}
        />
    </View>
  )
}

export default ChatScreen