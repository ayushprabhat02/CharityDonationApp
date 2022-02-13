// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import React from "react";
// import { auth } from "../firebase";

// const Logout = () => {
//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         navigation.replace("Login");
//       })
//       .catch((error) => alert(error.message));
//   };
//   return (
//     <View>
//       <TouchableOpacity style={styles.button} onPress={handleSignOut}>
//         <Text style={styles.buttonText}>Log Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Logout;

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: "#0782F9", // light blue
//     width: "60%",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center"
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 16
//   }
// });
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Logout = () => {
  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({});
