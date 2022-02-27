// import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
// import React, { useState } from "react";
// import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

// const API_URL = "http://localhost:3000";

// const StripApp = (props) => {
//   const [email, setEmail] = useState();
//   const [cardDetails, setCardDetails] = useState();
//   const { confirmPayment, loading } = useConfirmPayment();

//   const fetchPaymentIntentClientSecret = async () => {
//     const response = await fetch(`${API_URL}/create-payment-intent`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     const { clientSecret, error } = await response.json();
//     return { clientSecret, error };
//   };
//   const handlePayPress = async () => {
//     // 1. gather customer billing info (eg. email)
//     if (!cardDetails?.complete || !email) {
//       Alert.alert("please enter complete card details and email");
//       return;
//     }
//     const billingDetails = {
//       email: email
//     };
//     // 2. fetch the client secret from the backend
//     try {
//       const { clientSecret, error } = await fetchPaymentIntentClientSecret();
//       // confirm the payment
//       if (error) {
//         console.log("unable to process payment ");
//       } else {
//         const { paymentIntent, error } = await confirmPayment(clientSecret, {
//           type: "Card",
//           billingDetails: billingDetails
//         });
//         if (error) {
//           alert(`Payment Confirmation Error ${(error, message)}`);
//         } else if (paymentIntent) {
//           alert("Payment Successful");
//           console.log("Payment successfull", paymentIntent);
//         }
//       }
//     } catch (e) {
//       console.log(e);
//     }
//     // 3. confirm the payment with the card details
//   };
//   return (
//     <View style={styles.container}>
//       <TextInput
//         autoCapitalize="none"
//         placeholder="E-mail"
//         keyboardType="email-address"
//         onChange={(value) => setEmail(value.nativeEvent.text)}
//         style={styles.input}
//       />
//       <CardField
//         postalCodeEnabled={true}
//         placeholder={{ number: "4242 4242 4242 4242" }}
//         cardStyle={styles.card}
//         style={styles.cardConatiner}
//         onCardChange={(cardDetails) => {
//           setCardDetails(cardDetails);
//         }}
//       />
//       <Button onPress={handlePayPress} title="Pay" disabled={loading} />
//     </View>
//   );
// };

// export default StripApp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     margin: 20
//   },
//   input: {
//     backgroundColor: "#fff",
//     borderColor: "#000000",
//     borderRadius: 8,
//     fontSize: 20,
//     height: 50,
//     padding: 10
//   },
//   card: {
//     backgroundColor: "#fff"
//   },
//   cardConatiner: {
//     height: 50,
//     marginVertical: 30
//   }
// });

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

//ADD localhost address of your server
const API_URL = "http://localhost:4000";

const StripApp = (props) => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
    const billingDetails = {
      email: email
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          console.log("Payment successful ", paymentIntent);
        }
      }
    } catch (e) {
      console.log(e);
    }
    //3.Confirm the payment with the card details
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242"
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};
export default StripApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10
  },
  card: {
    backgroundColor: "#efefefef"
  },
  cardContainer: {
    height: 50,
    marginVertical: 30
  }
});
