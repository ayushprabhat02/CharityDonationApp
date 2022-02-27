import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import IconFa from "react-native-vector-icons/FontAwesome";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";

const Buttons = (props) => {
  return (
    <View style={styles.container}>
      {/* LOGIN/REGISTER btn */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.onPressFunction}
      >
        <View style={{ left: -5 }}>
          <IconMCI name={props.iconName} color="dodgerblue" size={30} />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            position: "absolute",
            left: 55
          }}
        >
          {props.title}
        </Text>
        <View style={styles.arrowIconContainer}>
          <Icon name="arrow-long-right" color="black" size={28} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
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
  }
});
