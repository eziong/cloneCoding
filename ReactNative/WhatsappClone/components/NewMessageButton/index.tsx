import React from 'react'
import { View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function NewMessageButton() {

  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('Contacts')
  }
  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name='message-reply-text'
          size={28}
          color='white'
        />
      </TouchableOpacity>
    </View>
    
  )
}