import React from 'react'
import { Text,FlatList, ImageBackground } from 'react-native'

import {useRoute} from '@react-navigation/native'

import chatRoomData from '../data/Chats'
import ChatMessage from '../components/ChatMessage/index'
import InputBox from '../components/InputBox'

export default function ChatRoomScreen() {
  const route = useRoute()
  return (
    <ImageBackground style={{width:'100%',height:'100%'}}>
      <FlatList 
        style={{backgroundColor:'white'}}
        data={chatRoomData.messages}
        renderItem={({item})=>(
          <ChatMessage message={item}/>
        )}
        inverted
        />
        <InputBox />
      </ImageBackground>
  )
}
