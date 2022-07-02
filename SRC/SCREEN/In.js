import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  id,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");

const In = ({ navigation }) => {
  const FlatList1 = [
    {
      id: require('./image/m5.png'),
      name: "Mohammed",
      
    },
    
   



  ];
  return (
    <View style={{
       backgroundColor: '#ADD8E6', height: height * 1,}}>
      <View style={{ 
        //backgroundColor: 'green', 
        height: height * 0.1, width: width * 0.9, alignSelf: 'center',marginTop:20 }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <View>
            <Image
              source={require('../AMIT/image/f.png')}
              style={styles.img1}
            />
          </View>
          <View style={{
            // backgroundColor: 'red',
              height: height * 0.04, width: width * 0.24, marginTop: 10, alignSelf: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'black' }}> Coaches



            </Text>
          </View>
          <View style={{
            // backgroundColor: 'black',
           height: height * 0.04, width: width * 0.24, marginTop: 10, alignSelf: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'red' }}>
              32 min

            </Text>
          </View>
        </View>
        <View style={{backgroundColor:'white',height:height*0.2,width:width*0.99,alignSelf:'center',marginTop:5}}>
          <View style={{
            //backgroundColor:'red',
            width:width*0.9,alignSelf:'center',margin:10}}>
          <Text style={{fontSize:18,color:'black'}}>Favorites</Text>
          </View>
          <View style={styles.main}>
        <View style={styles.a2}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <View style={{
           // backgroundColor:'cyan'
            }}>
            <FlatList
              numColumns="6"
              data={FlatList1}
              renderItem={({ item }) => {
                return (
              <View style={{flexDirection:'row',}}>
                    <View style={{backgroundColor:'white',paddingLeft:15}}>
                            <Image
              source={require('../AMIT/image/m1.png')}
              style={styles.img}
            />
            <Text>Mohammed</Text>
             
              
                  </View>
                  <View style={{backgroundColor:'white',paddingLeft:10}}>
                            <Image
              source={require('../AMIT/image/m6.png')}
              style={styles.img}
            />
            <Text>lsabelle78</Text>
             
              
                  </View>
                  <View style={{backgroundColor:'white',paddingLeft:10}}>
                            <Image
              source={require('../AMIT/image/m2.png')}
              style={styles.img}
            />
            <Text>Juleseror</Text>
             
              
                  </View>
                  <View style={{backgroundColor:'white',paddingLeft:10}}>
                            <Image
              source={require('../AMIT/image/m3.png')}
              style={styles.img}
            />
            <Text>Maxime c.</Text>
             
              
                  </View>
                  <View style={{backgroundColor:'white',paddingLeft:10}}>
                            <Image
              source={require('../AMIT/image/m5.png')}
              style={styles.img}
            />
            <Text>Caew</Text>
             
              
                  </View>
              </View>
                );
              }}
            />
          </View>
        </View>
      </View>
         
          

        </View>
        <View style={{backgroundColor:'white',height:height*0.9,width:width*0.99,marginTop:12,alignSelf:'center',justifyContent:'space-between'}}>
          <View style={{width:width*0.9,alignSelf:'center',margin:8}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Recommended</Text>
          
        
            <View style={{
            // backgroundColor:'yellow',
              width:width*0.92,alignSelf:'center',flexDirection:'row',height:height*0.095}}>
          
            <Image
              source={require('../AMIT/image/m1.png')}
              style={styles.img}
            />
          <View style={{flexDirection:'column',margin:10}}>
          <View style={{
           // backgroundColor:'red',
            }}>
             <Text style={{color:'black',fontWeight:'bold'}}>AlexGT</Text>
            </View>
            <View style={{
             // backgroundColor:'blue',
              marginTop:5}}>
              <Text>We can talk about anything except</Text>
              <Text> cars lol</Text>
            </View>
          </View>
            </View>
  

            <View style={{
            // backgroundColor:'yellow',
              width:width*0.92,alignSelf:'center',flexDirection:'row',height:height*0.095}}>
          
            <Image
              source={require('../AMIT/image/m2.png')}
              style={styles.img}
            />
          <View style={{flexDirection:'column',margin:10}}>
          <View style={{
           // backgroundColor:'red',
            }}>
                <Text style={{color:'black',fontWeight:'bold'}}>John B.</Text>
            </View>
            <View style={{
             // backgroundColor:'blue',
              marginTop:5}}>
              <Text>Cooking, relationships, life in general. </Text>
              <Text>Who knows a very good recipe with </Text>
             
            </View>
          </View>
            </View>
  

            <View style={{
            // backgroundColor:'yellow',
              width:width*0.92,alignSelf:'center',flexDirection:'row',height:height*0.095}}>
          
            <Image
              source={require('../AMIT/image/m3.png')}
              style={styles.img}
            />
          <View style={{flexDirection:'column',margin:10}}>
          <View style={{
           // backgroundColor:'red',
            }}>
               <Text style={{color:'black',fontWeight:'bold'}}>Charly webber</Text>
            </View>
            <View style={{
             // backgroundColor:'blue',
              marginTop:5}}>
              <Text>

Lorem ipsum dolor sit amet, consectetur

adipiscing elit, sed do eiusmod </Text>
             
            </View>
          </View>
            </View>
  
            <View style={{
            // backgroundColor:'yellow',
              width:width*0.92,alignSelf:'center',flexDirection:'row',height:height*0.095}}>
          
            <Image
              source={require('../AMIT/image/m6.png')}
              style={styles.img}
            />
          <View style={{flexDirection:'column',margin:10}}>
          <View style={{
           // backgroundColor:'red',
            }}>
              <Text style={{color:'black',fontWeight:'bold'}}>Laui Quin</Text>
            </View>
            <View style={{
             // backgroundColor:'blue',
              marginTop:5}}>
              <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  </Text>
            
            </View>
          </View>
            </View>
  
            <View style={{
            // backgroundColor:'yellow',
              width:width*0.92,alignSelf:'center',flexDirection:'row',height:height*0.095}}>
          
            <Image
              source={require('../AMIT/image/m5.png')}
              style={styles.img}
            />
          <View style={{flexDirection:'column',margin:10}}>
          <View style={{
           // backgroundColor:'red',
            }}>
              <Text style={{color:'black',fontWeight:'bold'}}>Vansile Stancu</Text>
            </View>
            <View style={{
             // backgroundColor:'blue',
              marginTop:5}}>
              <Text>Duis aute irure dolor in reprehenderit in </Text>
              <Text>voluptate velit ease cillium dolorie eu </Text>
              <Text>fugiat nulla parioatur</Text>
            </View>
          </View>
            </View>
  
            <View style={{backgroundColor:'white',height:height*0.1,flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <TouchableOpacity>
          <View>
              <Image
              source={require('../AMIT/image/s1.png')}
              style={styles.img}
            />

              </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
              <Image
              source={require('../AMIT/image/s3.png')}
              style={styles.img}
            />

              </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
              <Image
              source={require('../AMIT/image/s2.png')}
              style={styles.img}
            />

              </View>
          </TouchableOpacity>
          </View>

         
         
          </View>
         
        


        </View>




      </View>
  
    </View>
  );
};

export default In;

const styles = StyleSheet.create({
  a2: {
    // margin:50,
    backgroundColor: "green",
    height: 100
  },
  a2: {
    //  margin:60,
  },
  main: {
    //backgroundColor: "green",
    height: height * 0.12,
    margin: 8,
    width:width*0.95,
    alignSelf:'center',
    
  },
  img: {
    height: height * 0.07,
    width: width * 0.15,
    marginTop: 10,
    borderRadius: 100
  },
  img1: {
    height: height * 0.07,
    width: width * 0.19,
    marginTop: 10,
    borderRadius: 10,
    
  }

  
});
