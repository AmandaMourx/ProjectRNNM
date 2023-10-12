import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >Vrum Vrum License</Text>
      <Button
        color="red"
        title="Press me"
        style={styles.button}
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require('../MyApp/assets/A.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
  },
  image: {
    width: 100,
    height: 100,
  }

});
