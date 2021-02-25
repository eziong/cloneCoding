import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { ChatRoom } from '../../types'
import style from './style'
import styles from './style'
import moment from 'moment';
import {useNavigation} from '@react-navigation/native'

export type ChatListItemProps = {
  chatRoom: ChatRoom;
}

export default function ChatListItem(props: ChatListItemProps) {
  const {chatRoom} = props;

  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate('ChatRoom',{
      id:chatRoom.id,
      name:user.name
    })
  }

  const user = chatRoom.users[1]
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
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
    </TouchableOpacity>
  )
}
