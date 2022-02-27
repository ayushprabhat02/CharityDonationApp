import { StyleSheet, Text, View, Picker, TextInput } from "react-native";
import React, { useState } from "react";

const PickerContainer = () => {
  const [selectedValue, setSelectedValue] = useState("Select Plans");
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{ width: 270 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Monthly " value="monthly" />
        <Picker.Item label="One Time" value="oneTime" />
      </Picker>
    </View>
  );
};

export default PickerContainer;

const styles = StyleSheet.create({});
