import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StripApp from "./StripApp";
import { StripeProvider } from "@stripe/stripe-react-native";

const Payments = () => {
  return (
    <StripeProvider publishableKey="pk_test_51KUQxGSDXeEuKRZCque8f2BHDPlwt65pHfEbjN8QksMIhvbhB6wcqkGjAfYDfhFj6TlvevplqBJyju1DNuqHNWhD00yUKKexEX">
      <StripApp />
    </StripeProvider>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  }
});
