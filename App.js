import * as React from "react";
import { StyleSheet, Text, View, Span, SafeAreaView } from "react-native";

// IMPORTING SCREENS
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Donation from "./src/screens/Donation";
import EducationKit from "./src/screens/EducationKit";

// IMPORTING NAVIGATION PACKAGE
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FullDayMeal from "./src/screens/FullDayMeal";
import CampaignPhotos from "./src/screens/CampaignPhotos";
import ShowImage from "./src/screens/ShowImage";
import StripApp from "./src/screens/StripApp";
import Payments from "./src/screens/Payments";
import PaymentOptions from "./src/screens/PaymentOptions";

// import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Donation" component={Donation} />
          <Stack.Screen name="EducationKit" component={EducationKit} />
          <Stack.Screen name="FullDayMeal" component={FullDayMeal} />
          <Stack.Screen name="CampaignPhotos" component={CampaignPhotos} />
          <Stack.Screen
            name="ShowImage"
            component={ShowImage}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
          <Stack.Screen name="Payments" component={Payments} />
          <Stack.Screen name="StripApp" component={StripApp} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  }
});
