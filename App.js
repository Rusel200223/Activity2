import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    med: require('./ponts/fonts/EuclidFlexSemiBold.ttf'),
    thin: require('./ponts/fonts/EuclidFlexThin.ttf'),
    bold: require('./ponts/fonts/EuclidSquareBold.ttf'),
  });
  if(!loaded){
    return null;
  }

  return (
    <View style={styles.container}>
     <View style = {styles.row1}> 
     <View style = {styles.row}>
         <Image style={styles.Picture}
      source = {require('./assets/Youtube Music Icon (PNG240p) - Vector69Com.png')}> 
      </Image>
     <Text style = {styles.title}> MUSIC </Text>
      </View>
      <Image style={styles.screencast}
      source = {require('./assets/cam&search.jpg')}> 
      </Image>
      <Image style={styles.profile}
      source = {require('./assets/profilepic.jpg')}> 
      </Image>
     </View>

     <View style = {styles.row2}>
     <View style = {styles.relaxview}>
       <Text style = {styles.lax}> Relax </Text> 
      </View>
     <View style = {styles.workoutview}>
       <Text style = {styles.work}> Workout </Text> 
      </View>
     <View style = {styles.energizeview}> 
     <Text style = {styles.gize}> Energize </Text> 
      </View>
     <View style = {styles.commuteview}>
     <Text style = {styles.mute}> Commute </Text> 
       </View>
       </View>

       <View style = {styles.lineoutline}>
       </View>
       
      <View style = {styles.row3}>
      <Text style ={styles.foryou} > Mixed for you</Text>
      <View style={styles.more}>
        <Text style = {styles.txtmore}>more</Text>
      </View>
      </View>

      <Image style={styles.musicpic}
      source = {require('./assets/foryoumusic.jpg')}> 
      </Image>

      <View style = {styles.row4}>
      <Text style ={styles.reco} > Recommended playlist</Text>
      <View style={styles.more1}>
        <Text style = {styles.txtmore1}>more</Text>
      </View>
      </View>

      <Image style={styles.musicpic2}
      source = {require('./assets/musicplaylist2.jpg')}> 
      </Image>

<View style = {styles.lastpanel}>
  <View style = {styles.row5}>
      <Image style={styles.HOME}
      source = {require('./assets/home.jpg')}> 
      </Image>

      <Image style={styles.EXPLORE}
      source = {require('./assets/explore.jpg')}> 
      </Image> 

      <Image style={styles.LIBRARY}
      source = {require('./assets/library.jpg')}> 
      </Image>
       
      <Image style={styles.UPGRADE}
      source = {require('./assets/upgrade.jpg')}> 
      </Image>  
      </View>
</View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
title:{
  color: 'white',
  fontSize: 33,
  fontFamily: 'med',
  marginRight:60,

},
Picture:{
  height:40,
  width: 40,
  marginLeft:140,
},
row:{
  flexDirection:'row',
 marginBottom:10,
},
screencast:{
height:50,
width:100,
  marginRight:20,
  color:'black',
},
row1:{
  flexDirection:'row',
  marginTop:20,
  
},
profile:{
  height:35,
  width:35,
  borderRadius:100,
  marginRight: 160,
  marginTop:4,
},
relaxview:{
backgroundColor: '#1B1B1B',
borderWidth:1,
borderColor:'#555555',
  borderRadius: 5,
  height: 40,
  width: 80,
},
lax:{
fontFamily:'thin',
fontSize:20,
textAlign:'center',
marginTop:5,
color: 'white',

},
workoutview:{
  backgroundColor: '#1B1B1B',
  borderWidth:1,
  borderColor:'#555555',
    borderRadius: 5,
    height: 40,
    width: 100,
  marginLeft:10,
},
work:{
  fontFamily:'thin',
  fontSize:20,
  textAlign:'center',
  marginTop:5,
  color: 'white',
  
  },
energizeview:{
    backgroundColor: '#1B1B1B',
    borderWidth:1,
    borderColor:'#555555',
      borderRadius: 5,
      height: 40,
      width:90,
      marginLeft:10,
    
},
gize:{
  fontFamily:'thin',
  fontSize:20,
  textAlign:'center',
  marginTop:5,
  color: 'white',
  
  },
commuteview:{
    backgroundColor: '#1B1B1B',
    borderWidth:1,
    borderColor:'#555555',
      borderRadius: 5,
      height: 40,
      width: 100,
      marginLeft:10,
    
},
mute:{
  fontFamily:'thin',
  fontSize:20,
  textAlign:'center',
  marginTop:5,
  color: 'white',
  
  },
row2:{
flexDirection:'row',
marginBottom:20,
},
lineoutline:{
  width:414,
  height:1,
  backgroundColor: 'gray',
marginBottom:10,
},
foryou:{

  fontSize:40 ,
  fontFamily:'thin',
  fontWeight:'800',
  color:'white',
  marginRight:80,
  
},
more:{
  backgroundColor: 'black',
  borderWidth:1,
  borderColor:'#555555',
    borderRadius: 12,
    height: 25,
    width:60,    
    marginRight:16,
    marginTop:20,
},
txtmore:{
  color:'white',
  fontFamily:'thin',
  fontSize:15,
  textAlign:'center',
 fontWeight:'bold',
},
row3:{
  flexDirection:'row',
  
},
musicpic:{
  height:250,
  width:414,
marginTop:20,
},
reco:{
marginTop:20,
  fontSize:26,
  fontFamily:'thin',
  fontWeight:'bold',
  color:'white',
  marginRight:50,
 
},
more1:{
  backgroundColor: 'black',
  borderWidth:1,
  borderColor:'#555555',
    borderRadius: 12,
    height: 25,
    width:65 ,    
    marginTop:27,
  marginRight:15,
},
txtmore1:{
  color:'white',
  fontFamily:'thin',
  fontSize:15,
  textAlign:'center',
 fontWeight:'bold',

},
row4:{
  flexDirection:'row',
  marginBottom:20,
marginTop:20,
},
musicpic2:{
  height:250,
  width:414,
marginBottom:30,
},
lastpanel:{
  
  width:414,
  height:60,
  backgroundColor:'#1D1D1D',
},
HOME:{
  marginLeft:35,
  marginTop:2,
  height:60,
  width:60,
},
EXPLORE:{
  marginLeft:35,
  marginTop:5,
  height:60,
  width:60,
},
LIBRARY:{
  marginLeft:35 ,
  marginTop:2,
  height:60,
  width:60,
},
UPGRADE:{
  marginLeft:35,
  marginTop:2,
  height:60,
  width:60,
},
row5:{
  flexDirection:'row',
  marginBottom:1000,
},


});
