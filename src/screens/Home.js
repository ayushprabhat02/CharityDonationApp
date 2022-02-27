import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// IMPORTING ICON PACK
import Icon from "react-native-vector-icons/Entypo";
import IconFa from "react-native-vector-icons/FontAwesome";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 34,
          fontWeight: "700"
        }}
      >
        help
        <Text
          style={{
            fontSize: 34,
            color: "darkorange",
            fontWeight: "700"
          }}
        >
          us
        </Text>
      </Text>
      {/* <View>
        <Video
          source={require("./assets/poor.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          isLooping
          style={styles.video}
        />
      </View> */}

      {/* IMGAGE */}
      <Image
        source={require("../images/cover.jpeg")}
        style={styles.image}
        // resizeMode="contain"
      />

      {/* HELPUS DONATE PROGRAM TEXT */}
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          color: "grey",
          marginBottom: 40
        }}
      >
        HELPUS DONATE PROGRAM
      </Text>

      {/* LOGIN/REGISTER btn */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={{ left: -5 }}>
          <IconMCI name="login" color="dodgerblue" size={30} />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            position: "absolute",
            left: 55
          }}
        >
          Login or Register
        </Text>
        <View style={styles.arrowIconContainer}>
          <Icon name="arrow-long-right" color="black" size={28} />
        </View>
      </TouchableOpacity>

      {/* LOGIN WITH GOOGLE BTN */}
      <TouchableOpacity style={styles.buttonContainer}>
        <IconFa name="google" color="dodgerblue" size={30} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            position: "absolute",
            left: 55
          }}
        >
          Login with Google
        </Text>
        <View style={styles.arrowIconContainer}>
          <Icon name="arrow-long-right" color="black" size={28} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "white",
    justifyContent: "center"
    // alignItems: "center"
  },
  video: {
    width: 400,
    height: 400,
    marginTop: 40
  },
  image: {
    height: 350,
    width: "100%",
    borderRadius: 20,
    marginVertical: 20,
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowColor: "yellow"
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#E8E6E6",
    borderRadius: 12,
    marginBottom: 10
  },
  arrowIconContainer: {
    width: 43,
    height: 43,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});
