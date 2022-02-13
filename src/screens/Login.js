import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

import { auth } from "../firebase";
import Donation from "./Donation";

import {
  createUserWithEmailAndPassword,
  getAuth,
  isSignInWithEmailLink,
  SignInMethod,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Donation");
      }
    });
    return unsubscribe;
  }, []);

  //  REGISTER FUNCTION
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Register with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  // LOGIN FUNCTION
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    // <View>
    //     {/* style={styles.container} */}
    //     {/* behavior="padding" */}

    //     <Text style={styles.heading}>Login</Text>

    //     {/* EMAIL */}
    //     <View style={styles.inputBox}>
    //         <Icon name="mail" color="orange" size={24} />
    //         <TextInput placeholder='email@gmail.com'
    //                 //    value={}
    //                 //    onChangeText={text =>}
    //                 style={styles.input}

    //         />
    //     </View>

    //     {/* PASSWORD */}
    //     <View style={styles.inputBox}>
    //         <Icon name="key" color="orange" size={24} />
    //         <TextInput placeholder='Password'
    //                 //    value={}
    //                 //    onChangeText={text => }
    //                    secureTextEntry
    //                    style={styles.input}
    //         />
    //     </View>

    //     {/* LOGIN Btn */}
    //     <View style={styles.loginBtn}>
    //         <Text style={{ color:'white', fontFamily:"normal" }}> Login</Text>
    //     </View>

    //     {/* REGISTER Btn */}
    //     <Text style={{alignSelf:'center', color:"#00716f",fontFamily:"normal",paddingVertical:30}}
    //          onPress={()=>navigation.navigate('Register')}
    //     >New User</Text>

    //     {/* CUSTOME INPUT */}

    // </View>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonConatiner}>
        {/* {isSignInWithEmail === true ? */}
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        {/* : */}
        {/* <TouchableOpacity onPress={handleSignOut} style={styles.button} >
                    <Text style={styles.loginButtonText}>Logout</Text>
                  </TouchableOpacity> */}

        {/* } */}

        {/* Register */}
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
    marginBottom: 30
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 100 / 2,
    borderColor: "#00716f",
    height: 50
  },
  loginBtn: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#00716f",
    paddingVertical: 10,
    borderRadius: 23,
    height: 50
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  buttonConatiner: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  button: {
    backgroundColor: "#0782F9", // light blue
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  loginButtonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "#0782F9",
    borderWidth: 2
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16
  }
});
