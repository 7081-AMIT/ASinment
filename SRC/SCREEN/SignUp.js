
import React from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
// //import Ionicons from 'react-native-vector-icons/Entypo';
// import {Avatar} from 'react-native-paper';

const { height, width } = Dimensions.get('window');





const SignUp = () => {

    return (

        <SafeAreaView>


  


                <ImageBackground source={require('../Image/logo.png')} style={styles.main}>
                <ScrollView>
                    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                        <Text style={styles.txt}>Sign Up Form</Text>
                    </View>
                    <View style={styles.main1}>
                        <Text style={styles.txt1}>SIGN UP</Text>
                        <View style={styles.id1}>
                            <Text style={styles.txt2}>USER ID</Text>
                            <TextInput placeholder='Should be a number' placeholderTextColor={'black'} style={styles.input}></TextInput>
                        </View>
                        <View style={styles.id1}>
                            <Text style={styles.txt2}>NAME</Text>
                            <TextInput placeholder='Name shoud have min 2 characters' placeholderTextColor={'black'} style={styles.input}></TextInput>
                        </View>
                        <View style={styles.id1}>
                            <Text style={styles.txt2}>EMAIL</Text>
                            <TextInput placeholder='enter valid email here' placeholderTextColor={'black'} style={styles.input}></TextInput>
                        </View>
                        <View style={styles.id1}>
                            <Text style={styles.txt2}>GENDER</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <TouchableOpacity>
                                    <View style={{ borderRadius: 100, height: height * 0.03, width: width * 0.06, borderWidth: 2 }}></View>
                                </TouchableOpacity>

                                <Text>Male</Text>
                                <TouchableOpacity>
                                    <View style={{ borderRadius: 100, height: height * 0.03, width: width * 0.06, borderWidth: 2 }}></View>
                                </TouchableOpacity>

                                <Text>Female</Text>
                                <TouchableOpacity>
                                    <View style={{ borderRadius: 100, height: height * 0.03, width: width * 0.06, borderWidth: 2 }}></View>
                                </TouchableOpacity>

                                <Text>Others</Text>
                            </View>

                        </View>
                        <View style={styles.id1}>
                            <Text style={styles.txt2}>QUALIFICATION</Text>
                           <Text style={styles.input11}>SELECT HIGHEST QUALIFICATION</Text>
                            <TextInput placeholder='10TH' placeholderTextColor={'black'} style={styles.input1}></TextInput>
                            <TextInput placeholder='12TH' placeholderTextColor={'black'} style={styles.input1}></TextInput>
                            <TextInput placeholder='GRADUATION' placeholderTextColor={'black'} style={styles.input1}></TextInput>
                            <TextInput placeholder='POST GRADUATE ' placeholderTextColor={'black'} style={styles.input1}></TextInput>
                        </View>
                        <View style={styles.id1}>
                            <Text style={styles.txt2}>DATE OF BIRTH</Text>
                           <View style={styles.input2}>
                          <View style={{flexDirection:'row'}}>
                          <TextInput placeholder='DD' placeholderTextColor={'black'} maxLength={2}></TextInput>
                          <Text style={{textAlign:'center',marginTop:12,color:'black',fontWeight:'bold'}}>/</Text>
                          <TextInput placeholder='MM' placeholderTextColor={'black'} maxLength={2}></TextInput>
                          <Text style={{textAlign:'center',marginTop:12,color:'black',fontWeight:'bold'}}>/</Text>
                          <TextInput placeholder='YY' placeholderTextColor={'black'} maxLength={2}></TextInput>
                          
                          </View>
                            
                           </View>
                           <View style={styles.id1}>
                            <Text style={styles.txt2}>PASSWORD</Text>
                            <TextInput placeholder='......' placeholderTextColor={'black'} style={styles.input3}></TextInput>
                        </View>
                        <View style={styles.id1}>
                            <Text style={styles.txt2}>CONFIRM PASSWORD</Text>
                         
                            <TextInput placeholder='......' placeholderTextColor={'black'} style={styles.input3}></TextInput>
                            </View>
                      <TouchableOpacity>
                 
                         <View style={styles.btn2}>
                <Text style={styles.txt4} >Sign UP</Text>

            </View>
                      </TouchableOpacity>
                      <View style={{flexDirection:'row',
        // backgroundColor:'red',
         height:height*0.001,
         alignSelf:'center',
         width:width/1.1,
         alignItems:'center',
         marginVertical:50
         //width:width*0.02,
         //alignSelf:'center',
         //justifyContent:'space-between'

        }}>
          <TouchableOpacity>
          <View style={styles.bt1}>
                <Text style={styles.tx2} >Sign In</Text>

            </View>
          </TouchableOpacity>
           <TouchableOpacity>
           <View style={styles.bt2}>
                <Text style={styles.tx2} >Sign Up</Text>

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

export default SignUp

const styles = StyleSheet.create({
    main: {
        //  backgroundColor: 'red',
        height: height * 1,
        width: width * 1,
    },
    main1: {
        borderRadius: 1,
        height: height * 1.4,
        width: width / 1.1,
        // marginTop:30,
        borderWidth: 1,
        alignSelf: 'center',
      //  backgroundColor:'red'
      borderWidth:1
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    txt1: {
        textAlign: 'center',
       // margin: 20,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    id1: {
        marginTop: 20,
        alignSelf: 'center',
        width: width * 0.7
    },
    input: {
        borderRadius: 7,
        borderWidth: 1,


    },
    input3: {
        borderRadius: 7,
        borderWidth: 1,
        fontSize:20,

        fontWeight:'bold',
        height:height*0.06,
        width:width*0.7,
        alignSelf:'center',
        borderRadius:5,
        borderWidth:1
        


    },
    txt2: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    }
    ,
    input1: {
        borderRadius: 1,
        borderWidth: 1,
        height:height*0.05,
        


    },
    input11:{
        borderRadius: 1,
        borderWidth: 1,
        height:height*0.05,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:15,
        color:'black'
        

    },
    input2:{
      //  backgroundColor:'red',
        height:height*0.06,
        width:width*0.7,
        alignSelf:'center',
        borderRadius:5,
        borderWidth:1

    },
    btn2:{
        backgroundColor:'black',
        height:height*0.06,
        margin:20,
        width:width*0.3,
        borderRadius:10,
        alignSelf:'center',

    },
    txt4:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        margin:6
    },
    bt1:{
        // backgroundColor:'yellow',
        height:height*0.05,
        width:width*0.455,
        borderWidth:1,

    },
    bt2:{
        backgroundColor:'yellow',
        height:height*0.05,
        width:width*0.455,
        borderWidth:1,

    },
    tx1:{

        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:20
    },
    tx2:{
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:20

    }
})