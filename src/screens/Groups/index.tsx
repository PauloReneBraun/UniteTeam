import { StyleSheet, Text, View } from "react-native";

export function Groups() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Groups</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5358",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
