
import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
 TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/EvilIcons';
//import Icon from 'react-native-vector-icons/Fontisto';

//import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const Login1 = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState('false');
  const [isSelected, setSelection] = useState(false);

  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState(null);

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [password, setPassword] = useState('');
  const [Errorpassword, setErrorpassword] = useState(null);

  const nameValidate = name => {
    var Regex = /^[a-zA-Z ]{2,40}$/;
    if (name === '' || name === undefined || name === null) {
      setErrorName('please enter name');
    }
    if (!Regex.test(name)) {
      setErrorName('not correct format for name');
    } else {
      setErrorName(null);
    }
  };

  const emailValidate = email => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('please enter email');
    }
    if (!Regex.test(email)) {
      setErrorEmail('not correct format for email address');
    } else {
      setErrorEmail(null);
    }
  };
    const passwordValidate = password => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorpassword('Please enter password');
    }
    if (!Regex.test(password)) {
      setErrorpassword('please use at least 6 - 12 characters');
    } else {
      setErrorpassword(null);
    }
  };

  const validate = () => {
    const flag = true;
    if (email === '') {
      setErrorEmail('Please enter email');
    }
    if (password === '') {
      setErrorpassword('Please enter password');
    }
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      navigation.navigate('SignIn');
    } else {
      alert('Something went wrong');
    }
  };
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.main}>
      <View>
        <Image source={require('../AMIT/image/logo.png')} style={styles.img}></Image>
      </View>
      <View style={styles.m1}>
        <Text style={styles.txt}>Register with Us!</Text>
        <Text style={styles.txt1}>Signup to Continue</Text>

      </View>
      <View style={styles.m2}>
        <View style={{
         // backgroundColor:'red',
          width:width/1.32,alignSelf:'center'}}>
          <Text style={styles.txt2}>
            Name
          </Text>
        </View>
      
        <View style={styles.input}>
              {/* <Icon name="email" size={30} /> */}
             {/* // <Icon size={34} name="person-circle"  style={{color:'purple'}} /> */}
           

                <TextInput
                placeholder="Username"
                placeholderTextColor={'black'}
                keyboardType="name-phone-pad"
                onChangeText={text => {
                  setName(text), nameValidate(text);
                }}
                style={{
                  alignSelf: 'center',
                  height: height * 0.05,
                  width: width * 0.78,
                 // backgroundColor: 'yellow',
                }}
              />
            </View>
            {errorName !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{height: 20}}></View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {errorName}
                </Text>
              </View>
            ) : null}
            <View style={{marginTop:10}}>
            <View style={styles.m2}>
        <View style={{
         // backgroundColor:'red',
          width:width/1.32,alignSelf:'center'}}>
          <Text style={styles.txt2}>
            Email
          </Text>
        </View>
      
        <View style={styles.input}>
              {/* <Icon name="email" size={30} /> */}
             {/* // <Icon size={34} name="person-circle"  style={{color:'purple'}} /> */}
           

                <TextInput
                placeholder="example@gmail.com"
                placeholderTextColor={'black'}
                keyboardType="name-phone-pad"
                onChangeText={text => {
                  setEmail(text), emailValidate(text);
                }}
                style={{
                  alignSelf: 'center',
                  height: height * 0.05,
                  width: width * 0.78,
                 // backgroundColor: 'yellow',
                }}
              />
            </View>
            {errorEmail !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{height: 20}}></View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {errorEmail}
                </Text>
              </View>
            ) : null}
               <View style={{marginTop:10}}>
            <View style={styles.m2}>
        <View style={{
         // backgroundColor:'red',
          width:width/1.32,alignSelf:'center'}}>
          <Text style={styles.txt2}>
            Password
          </Text>
        </View>
      
        <View style={styles.input}>
              {/* <Icon name="email" size={30} /> */}
             {/* // <Icon size={34} name="person-circle"  style={{color:'purple'}} /> */}
           

                <TextInput
                placeholder="*********"
                placeholderTextColor={'black'}
                
                keyboardType="default"
                onChangeText={text => {
                  setPassword(text), passwordValidate(text);
                }}
                style={{
                  alignSelf: 'center',
                  height: height * 0.05,
                  width: width * 0.78,
                 // backgroundColor: 'yellow',
                }}
              />
            </View>
            {Errorpassword !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{height: 20}}></View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {Errorpassword}
                </Text>
              </View>
            ) : null}
               <View style={{marginTop:10}}>
            <View style={styles.m2}>
        <View style={{
         // backgroundColor:'red',
          width:width/1.32,alignSelf:'center'}}>
          <Text style={styles.txt2}>
            Confirm Password
          </Text>
        </View>
      
        <View style={styles.input}>
              {/* <Icon name="email" size={30} /> */}
             {/* // <Icon size={34} name="person-circle"  style={{color:'purple'}} /> */}
           

                <TextInput
                placeholder="********"
                placeholderTextColor={'black'}
                keyboardType="default"
                onChangeText={text => {
                  setPassword(text), passwordValidate(text);
                }}
                style={{
                  alignSelf: 'center',
                  height: height * 0.05,
                  width: width * 0.78,
                 // backgroundColor: 'yellow',
                }}
              />
            </View>
            {Errorpassword !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{height: 20}}></View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {Errorpassword}
                </Text>
              </View>
            ) : null}
            <View style={styles.btn}>
             <TouchableOpacity>
             <View style={{backgroundColor:'white',borderRadius:2,borderWidth:2,height:height*0.03,width:width*0.05,borderColor:'grey'}}></View>
             </TouchableOpacity>
              
              <TouchableOpacity>

              </TouchableOpacity>
              <Text>  Email me if you have any deal</Text>
            </View>
            <TouchableOpacity>
            <View style={{backgroundColor:'#8B8000',height:height*0.06,width:width*0.3,borderRadius:100,alignSelf:'center',justifyContent:'center',marginTop:10}}>
              <Text style={{textAlign:'center',}}>Sign up</Text>

            </View>
            </TouchableOpacity>
            <View style={{alignSelf:'center',marginTop:20}}>
              <Text>or login using social media</Text>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',width:width*0.25,justifyContent:'space-between',margin:10}}>
             <TouchableOpacity>
             <View>
              <Image source={require('../AMIT/image/fb.png')} style={styles.img1}></Image>

              </View>
             </TouchableOpacity>
           <TouchableOpacity>
           <View>
              <Image source={require('../AMIT/image/ga.png')} style={styles.img1}></Image>

              </View>
           </TouchableOpacity>
            <TouchableOpacity>
            <View>
              <Image source={require('../AMIT/image/t.png')} style={styles.img1}></Image>

              </View>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',margin:20}}>
              <Text>Already have an account ?</Text>
              <TouchableOpacity>
              <Text style={{color:'blue'}}>Sign In</Text>
              </TouchableOpacity>
            </View>


      </View>
            </View>

      </View>
            </View>
            

      </View>
      
            </View>
            
            

      </View>
      
  
  
   
     

      </View>

    </ScrollView>
     
    </SafeAreaView>
  );
};

export default Login1;

const styles = StyleSheet.create({
  main: {
  backgroundColor: 'white',
    height: height * 1,
    width: width * 1,
    
  },
  txt: {
    fontSize: 25,
    //fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
  },
  txt2: {
    fontSize: 15,
   // fontWeight: 'bold',
    //textAlign: 'center',
  },
  txt1: {
    fontSize: 16,
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    height: height * 0.199,
    width: width * 0.35,
   // borderRadius: 100,
    alignSelf: 'center',
    marginTop:10
  },
  input: {
   // borderRadius: 10,
    height: height * 0.04,
    width: width / 1.3,
  //  borderWidth: 2,
    borderColor: 'grey',
    alignSelf: 'center',
    alignItems:'center',
    flexDirection: 'row',
   // backgroundColor: 'yellow',
   borderBottomWidth:2
    
  },
  input1: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    height: height * 0.07,
    width: width / 1.1,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center'
  },
  input2: {
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center'
  },
  m2:{
   // backgroundColor:'cyan',
    height:height*0.7
  },
  btn:{
    flexDirection:'row',
    alignSelf:'center',
    margin:20,
    width:width/1.3
  },
  img1:{
    height:height*0.03,
    width:width*0.07,alignSelf:'center',
    borderRadius:100
  }
});
