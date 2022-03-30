import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import QRCode from "react-native-qrcode-svg";

const QrCode = () => {
  const [inputText, setInputText] = useState("");
  const [qrvalue, setQrvalue] = useState("");

  return (
    // <View style={{ flex: 1, padding: 20 }}>
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Generation of QR Code For Payment</Text>

      {/* <Image source={require('./qrcode1.jpeg')} 
                   style={styles.image}
                //    resizeMode='contain'
            /> */}

      <QRCode
        //QR code value
        value={qrvalue ? qrvalue : "NA"}
        //size of QR Code
        size={250}
        //Color of the QR Code (Optional)
        color="black"
        //Background Color of the QR Code (Optional)
        backgroundColor="white"
        //Center Logo size  (Optional)
        logoSize={30}
        //Center Logo margin (Optional)
        logoMargin={2}
        //Center Logo radius (Optional)
        logoBorderRadius={15}
        //Center Logo background (Optional)
        logoBackgroundColor="yellow"
      />
      <Text style={styles.textStyle}>
        Please insert any value to generate QR code
      </Text>
      {/* <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (inputText) => setInputText(inputText)
          }
          placeholder="Enter Your Name"
          value={inputText}
          /> */}
      <TextInput
        //   style={styles.textInputStyle}
        keyboardType="numeric"
        onChangeText={(inputText) => setInputText(inputText)}
        placeholder="Enter Amount"
        value={inputText}
      />

      <TouchableOpacity
        //   style={styles.buttonStyle}
        onPress={() => setQrvalue(inputText)}
      >
        <Text style={styles.buttonTextStyle}>Generate QR Code</Text>
      </TouchableOpacity>
    </View>
    // </View>
  );
};
export default QrCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10
  },
  titleStyle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  textStyle: {
    textAlign: "center",
    margin: 10
  },
  textInputStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10
  },
  buttonStyle: {
    backgroundColor: "#51D8C7",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#51D8C7",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    padding: 10
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16
  }
});
