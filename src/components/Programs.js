import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/AntDesign";

const Programs = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.programContainer}>
        <View style={{ flex: 1 }} style={styles.imageContainer}>
          <Image source={props.imageSource} style={styles.image} />
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
          {/* EDUCATION KIT */}
          <TouchableOpacity onPress={props.onPressFunction}>
            <Text style={{ fontSize: 23, fontWeight: "700" }}>
              {props.title}
            </Text>
            <Text
              style={{ paddingVertical: 8, color: "#888e8f", fontSize: 18 }}
            >
              {props.ngo}
            </Text>
            <Text
              style={{
                paddingVertical: 8,
                fontSize: 20,
                color: "#10a0b8",
                fontWeight: "500"
              }}
            >
              {props.amountRaised}
            </Text>
            <Icon name="arrowright" color="darkgrey" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Programs;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
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
