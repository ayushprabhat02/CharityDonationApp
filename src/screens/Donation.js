import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

// IMPORTING SCREENS
import EducationKit from "./EducationKit";
import FullDayMeal from "./FullDayMeal";
import Programs from "../components/Programs";

// IMPORTING auth from FIREBASE
import { auth } from "../firebase";

// import Logout from component
// import Logout from "../components/Logout";

const Donation = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Logout /> */}
        <Text style={{ fontSize: 20 }}>
          Welcome : {auth.currentUser?.email}{" "}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, padding: 20, color: "#6c6c71" }}>
          Select Donation programs{" "}
        </Text>

        <Programs
          title={"Education kits for poor childrens"}
          ngo={"by save the children"}
          amountRaised={"₹ 16K Raised"}
          imageSource={require("../images/poor2.jpeg")}
          onPressFunction={() => navigation.navigate("EducationKit")}
        />
        <Programs
          title={"Full Day Meal for street child"}
          ngo={"by Kalpan Foundation"}
          amountRaised={"₹ 1.2 Lakhs Raised"}
          imageSource={require("../images/poor13.jpg")}
          onPressFunction={() => navigation.navigate("FullDayMeal")}
        />
      </View>
    </ScrollView>
  );
};

export default Donation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: "#0782F9", // light blue
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15
  },
  programContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 12
  },
  textContainer: {
    backgroundColor: "#39CCCC", // light blue
    padding: 6,
    borderRadius: 10,
    alignItems: "center",
    top: -175,
    right: -10,
    width: "62%"
  },
  imageText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  writeTaskWrapper: {
    // position: "absolute",
    // bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    width: "250",
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1
  },
  addText: {}
});
