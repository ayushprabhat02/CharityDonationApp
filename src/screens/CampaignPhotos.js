// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   FlatList,
//   ListItem
// } from "react-native";
// import React from "react";

// const CampaignPhotos = (props) => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           require("../images/cover.jpeg"),
//           require("../images/cover.jpeg"),
//           require("../images/cover.jpeg")
//         ]}
//         renderItem={(item) => {
//           return <ListItem image={item} />;
//         }}
//         keyExtractor={(index) => {
//           return index;
//         }}
//       />
//     </View>
//   );
// };

// export default CampaignPhotos;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import React from "react";
import Images from "./Images";
import ShowImage from "./ShowImage";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const CampaignPhotos = (props) => {
  return (
    <ScrollView>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {Images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              props.navigation.navigate("ShowImage", { url: image.url })
            }
          >
            <Image
              source={image.url}
              style={{
                height: deviceHeight / 3,
                width: deviceWidth / 3 - 6,
                borderRadius: 10,
                margin: 2
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CampaignPhotos;
