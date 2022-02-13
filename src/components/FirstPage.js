import { StyleSheet, Text, View } from 'react-native';

export default function FirstPage() {
  return (
    <View style={styles.container}>
        
      <Text style={styles.text}>HELPUS DONATE PROGRAM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text:{
      textAlign:'center',
      fontSize:18, 
      color:"#222"
    
  }
  
});
