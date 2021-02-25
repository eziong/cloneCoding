import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React ,{useState}from 'react'
import { View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

export default function InputBox() {

  const [message, setMessage] = useState('')

  const onMicrophonePress = () => {
    console.warn('microphone')
  }
  const onSendPress = () => {
    setMessage('')
  }
  const onPress = () => {
    if(!message) {
      onMicrophonePress()
    }else{
      onSendPress()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color='grey' />
        <TextInput 
          style={styles.textInput} 
          multiline
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message" />
        <Entypo style={styles.icon} name="attachment" size={24} color='grey' />
        {!message && <Fontisto style={styles.icon} name='camera' size={24} color='grey' />}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {message
          ?<MaterialIcons name={'send'} size={28} cololr='white' />
          :<MaterialCommunityIcons name={'microphone'} size={24} color="white"/>}
        </View>
      </TouchableOpacity>
    </View>
  )
}
