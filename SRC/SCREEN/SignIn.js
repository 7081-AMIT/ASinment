
import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,ScrollView,ImageBackground,Dimensions, TextInput, TouchableOpacity } from 'react-native'

const {height, width} = Dimensions.get('window');



const SignIn = () => {
  return (
   <SafeAreaView>
        <ImageBackground source={require('../Image/logo.png')} style={styles.img}>
    <ScrollView>
     
    
    <View style={styles.main}>
        <Text style={styles.txt}>Sign In Form</Text>
        <View style={styles.main2}>
           <View>
           <Text style={styles.txt1}>SIGN IN</Text>
           </View>
           <View style={styles.Input}>
            <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>EMAIL ADDRESS</Text>
            <TextInput placeholder='Write Email Here' placeholderTextColor={'black'} style={styles.input1}>

            </TextInput>
           </View>
           <View style={styles.Input}>
            <Text style={{fontSize:20,color:'black',marginTop:15,fontWeight:'bold'}}>PASSWORD</Text>
            <TextInput placeholder='Write Password Here' placeholderTextColor={'black'} style={styles.input1}>

            </TextInput>
           </View>
         <TouchableOpacity>
         <View style={styles.btn}>
            <Text style={styles.bttxt}>
                Sign IN
                
            </Text>
           </View>
         </TouchableOpacity>
         <View style={{flexDirection:'row',
        // backgroundColor:'red',
         height:height*0.06,
         alignSelf:'center',
         width:width/1.1,
         alignItems:'center',
         marginVertical:170
         //width:width*0.02,
         //alignSelf:'center',
         //justifyContent:'space-between'

        }}>
          <TouchableOpacity>
          <View style={styles.btn1}>
                <Text style={styles.txt2} >Sign In</Text>

            </View>
          </TouchableOpacity>
           <TouchableOpacity>
           <View style={styles.btn2}>
                <Text style={styles.txt2} >Sign Up</Text>

            </View>
           </TouchableOpacity>
         </View>



        </View>


 
    </View>
    </ScrollView>
    </ImageBackground>
  
 
   </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    main:{
      //  backgroundColor:'white',
        margin:10,
        width:width/1.1,
        alignSelf:'center'
    },
    txt:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'

    },
    main2:{
        height:height*0.9,
        width:width/1.1,
        margin:10,
       // backgroundColor:'red',
       alignSelf:'center',
        borderWidth:1
    },
    txt1:{
        margin:70,
        alignSelf:'center',
        color:'black',
        fontSize:20,
        fontWeight:'bold'
        
    },
    Input:{
       // backgroundColor:'red',
        alignSelf:'center',
        width:width/1.4
    },
    input1:{
       //  backgroundColor:'',
        alignSelf:'center',
        width:width/1.4,
        borderRadius:10,
        borderWidth:1,
        marginTop:5
      
    },
    btn:{
        backgroundColor:'black',
        height:height*0.05,
        width:width*0.3,
        borderRadius:10,
        alignSelf:'center',
        margin:40,
    },
    bttxt:{
        color:'white',
        alignSelf:'center',
        textAlign:'center',
       // margin:8,
        fontSize:22,
        fontWeight:'bold',
    },
    btn1:{
        backgroundColor:'yellow',
        height:height*0.05,
        width:width*0.455,
        borderWidth:1,
    },
    txt2:{
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:20
    },
    btn2:{
       // backgroundColor:'yellow',
        height:height*0.05,
        width:width*0.455,
        borderWidth:1,
    },
    
})