import React from 'react'
import { Text, View, Image } from 'react-native'
import { ChatRoom } from '../../types'
import style from './style'
import styles from './style'
import moment from 'moment';

export type ChatListItemProps = {
  chatRoom: ChatRoom;
}

export default function ChatListItem(props: ChatListItemProps) {
  const {chatRoom} = props;

  const user = chatRoom.users[1]
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{uri:user.imageUri}} style={styles.avartar}/>
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.username}>{user.name}</Text>
        <Text numberOfLines={2} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
      </View>
    </View>
  )
}
