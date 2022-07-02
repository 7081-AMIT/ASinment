
import React from 'react'
import { StyleSheet, Text, View,Dimensions,TouchableOpacity, SafeAreaView, ScrollView,ImageBackground } from 'react-native'
const {height, width} = Dimensions.get('window');


const Dabord = () => {
    return (
        <ImageBackground source={require('../Image/logo.png')} style={styles.img}>
        <SafeAreaView>
            
                   <ScrollView>
       <View style={styles.main1}>
        <Text style={styles.txt}>AFTER SUCCESSFULLY SIGN IN PAGE NAVIGATE TO DASBOARD</Text>
         <View style={styles.main}>
          <View style={styles.view1}>
            <Text style={styles.txt1}>DASHBOARD</Text>

          </View>
        <TouchableOpacity >
        <View style={styles.btn}>
            <Text style={styles.txt2}>LOGOUT</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.Vie1}>
            <Text style={styles.txt3}>USER DETAILS</Text>
            <Text style={styles.txt4}>USER DETAILSHOULD RENDER HERE</Text>

        </View>
        <View style={styles.Vie2}>
            <Text style={styles.txt3}>INFORMATION DETAILS</Text>
            <Text style={styles.txt5}>ADDED INFORMATION SHOULD RENDER HERE AS LIST (USE FLATLIST) WHICH WILL BE SCROLLABLE</Text>

        </View>
       
        </View>
       </View>
</ScrollView>
       </SafeAreaView>
       </ImageBackground>
     
    )
}

export default Dabord

const styles = StyleSheet.create({
    main:{
       // margin:15,
      //  backgroundColor:'white',
        height:height*0.94,
        borderWidth:1,
        borderColor:'black',
       // marginTop:30
     //  backgroundColor:'yellow',
       borderRadius:1
    },
    main1:{
        margin:15
    },
    txt:{
        fontSize:12,
        fontWeight:'bold',
        color:'black',
    },
    view1:{
        backgroundColor:'yellow',
        borderRadius:1,
        borderWidth:1,
        borderColor:'black',
       // alignItems:'center',
        height:height*0.05,
        

    },
    txt1:{
        textAlign:'center',
        color:'black',fontSize:20,
        fontWeight:'bold',
        //alignSelf:'center',
        //alignContent:'center',
       // alignItems:'center'
       margin:3
    },
    btn:{
        backgroundColor:'black',
        height:height*0.05,
        width:width*0.3,
        borderRadius:10,
        marginTop:10,
        margin:15,
        
        alignSelf:'flex-end',
    },
    txt2:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        margin:5
    },
    Vie1:{
        borderRadius:1,
        borderWidth:1,
        borderColor:'black',
        height:height*0.12,
        width:width/1.2,
        alignSelf:'center'

    },
    txt3:{
        textAlign:'center',
        margin:5,
        color:'black',
        fontWeight:'bold'

    }
    ,
    txt4:{
        textAlign:'center',
        margin:15,
        color:'black',
      //  fontWeight:'bold'

    },
    Vie2:{
        borderRadius:1,
        borderWidth:1,
        borderColor:'black',
        height:height*0.55,
        width:width/1.2,
        alignSelf:'center',
        margin:10,
       // backgroundColor:'red'

    },
    txt5:{
        textAlign:'center',
        color:'black',
      //  fontWeight:'bold'
      marginTop:100

    },
})