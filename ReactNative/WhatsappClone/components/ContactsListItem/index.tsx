import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { User } from '../../types'
import style from './style'
import styles from './style'
import moment from 'moment';
import {useNavigation} from '@react-navigation/native'

export type ContactsListItemProps = {
  user:User;
}

export default function ContactsListItem(props: ContactsListItemProps) {
  const {user} = props;

  const onClick = () => {
    //navigate to chat room with these users
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <View style={styles.leftContainer}>
        <Image source={{uri:user.imageUri}} style={styles.avartar}/>
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.username}>{user.name}</Text>
      </View>
    </TouchableOpacity>
  )
}
