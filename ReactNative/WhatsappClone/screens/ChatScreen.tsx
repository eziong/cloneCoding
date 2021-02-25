import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatListItem from '../components/ChatListItems'

import ChatRooms from '../data/ChatRooms'
import { FlatList } from 'react-native-gesture-handler';
import NewMessageButton from '../components/NewMessageButton';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{width:'100%'}}
        data={ChatRooms}
        renderItem={({item})=>(
          <ChatListItem chatRoom={item} />
        )}
        keyExtractor={(item)=>item.id}
        />
        <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
