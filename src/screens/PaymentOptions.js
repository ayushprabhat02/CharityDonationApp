// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity
// } from "react-native";
// import React, { useState } from "react";
// import { useRoute } from "@react-navigation/native";

// const PaymentOptions = () => {
//   const route = useRoute();
//   const [paymentList, setPaymentList] = useState([
//     {
//       userId: 1,
//       id: 1,
//       title: "Credit/Debit",
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "QR Code",
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: "Cash",
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 4,
//       title: "UPI ",
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 5,
//       title: "New Bank Account",
//       completed: false
//     }
//   ]);

//   const pressHandler = (id) => {
//     const selectItems = paymentList.filter((PL) => PL.id === id)[0];
//     alert(selectItems.title);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={{ fontSize: 20, color: "darkorange" }}>
//         {" "}
//         Your Amount : {route.params.amount}
//       </Text>
//       <Text style={{ fontSize: 22, color: "grey", paddingBottom: 15 }}>
//         Choose a payment method
//       </Text>
//       <FlatList
//         data={paymentList}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => pressHandler(item.id)}>
//             <Text style={styles.paymentList}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />
//       {/* <FlatList data={paymentList} renderItem={({item})=>(
//         <Text >{item.title===}</Text>
//       )}/> */}

//       {/* ITEM LIST */}
//       {/* {paymentList.map((PL) => {
//         return (
//           <View style={styles.paymentList}>
//             <TouchableOpacity onPress={() => pressHandler(items.id)}>
//               <Text style={{ fontSize: 22 }}>{PL.title}</Text>
//             </TouchableOpacity>
//           </View>
//         );
//       })} */}
//     </View>
//   );
// };
//

// export default PaymentOptions;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//     padding: 25
//   },
//   paymentList: {
//     backgroundColor: "pink",
//     width: "100%",
//     padding: 14,
//     marginTop: 14
//   }
// });

//*******************************************************************************************

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Buttons from "../components/Buttons";
import Payments from "./Payments";

const PaymentOptions = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: "darkorange" }}>
        Your Amount : {route.params.amount}
      </Text>
      <Text style={{ fontSize: 22, color: "grey", paddingBottom: 15 }}>
        Choose a payment method
      </Text>
      <Buttons
        title="Credit/Debit Card"
        iconName="card"
        onPressFunction={() => navigation.navigate("Payments")}
      />
      <Buttons
        title="UPI / QR Code"
        iconName="upi"
        onPressFunction={() => navigation.navigate("Payments")}
      />
    </View>
  );
};

export default PaymentOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    padding: 25
  },
  paymentListContainer: { width: "100%" },
  paymentList: {
    padding: 15,
    backgroundColor: "lightgrey",
    borderRadius: 12,
    marginTop: 20
  },
  paymentText: { fontSize: 20 }
});
