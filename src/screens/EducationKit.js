import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import IconFa from "react-native-vector-icons/FontAwesome";
import IconFa5 from "react-native-vector-icons/FontAwesome5";

// IMPORTING SCREENS
import PickerContainer from "../components/PickerContainer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import CampaignPhotos from "./CampaignPhotos";
import Payments from "./Payments";
import PaymentOptions from "./PaymentOptions";

const EducationKit = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState();

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.container}>
          {/* IMAGE WITH SPONSORED start */}
          <View style={{ flexDirection: "row" }}>
            {/* IMAGE */}
            <Image
              source={require("../images/poor2.jpeg")}
              style={styles.image}
            />

            <View style={styles.sponsoredContainer}>
              {/* SPONSERED TEXT */}
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  fontWeight: "700"
                }}
              >
                SPONSORED
              </Text>
            </View>
            {/* IMAGE WITH SPONSORED close */}

            {/* EDUCATION KIT BOX start */}
            <View style={styles.box}>
              {/* EDUCATION TEXT */}
              <Text
                style={{ fontSize: 20, paddingBottom: 10, fontWeight: "700" }}
              >
                Education kits for poor children
              </Text>
              {/* ORGANISATION */}
              <Text style={{ fontSize: 15, paddingBottom: 10, color: "grey" }}>
                by save the children
              </Text>
              <Text style={{ fontSize: 18 }}>Banglore,India</Text>
            </View>
            {/* EDUCATION KIT BOX close */}
          </View>

          {/* DETAILS */}
          <Text style={{ paddingTop: 40, fontSize: 26, color: "grey" }}>
            Details
          </Text>
          <Text
            style={{
              paddingTop: 10,
              paddingBottom: 25,
              fontSize: 15,
              color: "grey"
            }}
          >
            This Kit is available for poor child , who missguided from the path
            . Our organisation help this child to grow well.
          </Text>

          {/* BUTTONS */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CampaignPhotos")}
            >
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                Campaings photos{" "}
              </Text>
              <View style={styles.arrowIconContainer}>
                <IconFa5 name="arrow-right" color="black" size={28} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              {/* <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Distribuition plans
          </Text>
          <View style={styles.arrowIconContainer}>
            <Icon name="arrowright" color="black" size={28} />
          </View> */}
              <PickerContainer />
            </TouchableOpacity>

            {/* Amount and Donate Button */}
            <View style={styles.amountAndDonationConatiner}>
              <View style={styles.inputContainer}>
                {/* RUPEE ICON */}
                <View style={{ justifyContent: "center", paddingRight: 5 }}>
                  <IconFa name="rupee" color="black" size={32} />
                </View>

                {/* RUPEE INPUT */}
                <TextInput
                  keyboardType="numeric"
                  placeholder="0"
                  value={amount}
                  onChangeText={(text) => setAmount(text)}
                  style={{
                    fontSize: 40,
                    fontWeight: "600",
                    paddingBottom: 5,
                    width: "50%"
                  }}
                />
              </View>
              <View style={styles.donateButtonContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("PaymentOptions", { amount: amount })
                  }
                >
                  <Text style={{ color: "white" }}>DONATE</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ color: "grey" }}>
              Donation Raised{" "}
              <Text style={{ fontSize: 16, fontWeight: "500" }}>₹16K</Text>{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EducationKit;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center", // y-axis = center
    flex: 1,
    padding: 25,
    // alignItems: "center", // x-axis = center
    backgroundColor: "#fff"
  },
  image: {
    width: 220,
    height: 210,
    borderRadius: 12,
    // position: "absolute",
    alignContent: "flex-start"
  },
  sponsoredContainer: {
    padding: 6,
    backgroundColor: "orange",
    width: 110,
    height: 35,
    borderRadius: 7,
    position: "absolute",
    top: 10,
    left: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: 180,
    height: 180,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    position: "absolute",
    top: 70,
    right: 10,
    backgroundColor: "#E8E6E6"
  },
  buttonContainer: {
    width: "100%"
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 1,
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: "#fff"
  },
  arrowIconContainer: {
    width: 43,
    height: 43,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
  },
  amountAndDonationConatiner: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputContainer: { width: 300, flexDirection: "row" },
  donateButtonContainer: {
    width: 94,
    height: 94,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100 / 2,
    position: "absolute",
    right: 0,
    bottom: -20
  }
});
