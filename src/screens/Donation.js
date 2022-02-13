import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

// IMPORTING SCREENS
import EducationKit from "./EducationKit";

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
        {/* <Icon name="arrowright" size={20} /> */}
        {/* Education kits */}
        <View style={styles.programContainer}>
          <View style={{ flex: 1 }} style={styles.imageContainer}>
            <Image
              source={require("../images/poor2.jpeg")}
              style={styles.image}
            />
            <TouchableOpacity style={styles.textContainer}>
              <Text style={styles.imageText}>DONATE</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 2,
              paddingBottom: 20,
              paddingHorizontal: 15,
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("EducationKit")}
            >
              <Text style={{ fontSize: 23, fontWeight: "700" }}>
                Education kits for poor childrens
              </Text>
              <Text
                style={{ paddingVertical: 8, color: "#888e8f", fontSize: 18 }}
              >
                {" "}
                by save the children
              </Text>
              <Text
                style={{
                  paddingVertical: 8,
                  fontSize: 20,
                  color: "#10a0b8",
                  fontWeight: "500"
                }}
              >
                {" "}
                ₹ 16K Raised
              </Text>
              <Icon name="arrowright" color="darkgrey" size={28} />
            </TouchableOpacity>
          </View>
        </View>

        {/* full day meal */}
        <View style={styles.programContainer}>
          <View style={{ flex: 1 }} style={styles.imageContainer}>
            <Image
              source={require("../images/poor3.jpg")}
              style={styles.image}
            />
            <TouchableOpacity style={styles.textContainer}>
              <Text style={styles.imageText}>DONATE</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 2,
              paddingHorizontal: 15,
              paddingBottom: 20,
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 23, fontWeight: "700" }}>
                Full day meal for the street children
              </Text>
              <Text
                style={{ color: "#888e8f", paddingVertical: 8, fontSize: 18 }}
              >
                by child care
              </Text>
              <Text
                style={{
                  paddingVertical: 8,
                  fontSize: 20,
                  color: "#10a0b8",
                  fontWeight: "500"
                }}
              >
                {" "}
                ₹ 1.3 lakhs Raised
              </Text>
              <Icon name="arrowright" color="darkgrey" size={28} />
            </TouchableOpacity>
          </View>
        </View>
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
    fontSize: 16
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
  }
});
