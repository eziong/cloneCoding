import { StyleSheet} from 'react-native'

const style = StyleSheet.create({
  avartar:{
    width:60,
    height:60,
    margin:10,
    borderRadius:50
  },
  container:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    padding:10,
  },
  leftContainer:{
    flexDirection:'row'
  },
  midContainer:{
    justifyContent:'space-around',
    width:200,
  },
  username:{
    fontWeight:'bold',
    fontSize:16
  },
  lastMessage:{
    fontSize:15,
    color:'grey',
    width:'130%'
  },

});

export default style;