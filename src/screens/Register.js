import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

const Register = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.heading}>Register</Text>

      {/* EMAIL */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Email"
          // placeholderTextColor="#00716f"
          style={{ paddingHorizontal: 10 }}
        />
      </View>

      {/* MOBILE */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Mobile"
          // placeholderTextColor="#00716f"
          style={{ paddingHorizontal: 10 }}
        />
      </View>

      {/* PASSWORD */}
      <View style={styles.inputBox}>
        <TextInput
          secureTextEntry
          placeholder="Password"
          // placeholderTextColor="#00716f"
          style={{ paddingHorizontal: 10 }}
        />
      </View>

      {/* CONFIRM PASSWORD */}
      <View style={styles.inputBox}>
        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          // placeholderTextColor="#00716f"
          style={{ paddingHorizontal: 10 }}
        />
      </View>

      {/* REGISTER Btn */}
      <View style={styles.registerBtn}>
        <Text
          style={{
            color: "white"
          }}
        >
          {" "}
          Register
        </Text>
      </View>
      <Text
        style={{ alignSelf: "center", color: "#00716f", paddingVertical: 30 }}
        onPress={() => navigation.navigate("Login")}
      >
        Already a member
      </Text>
    </View>
  );
};
export default Register;

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
  registerBtn: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00716f",
    paddingVertical: 10,
    borderRadius: 100 / 2,
    height: 50
  }
});
