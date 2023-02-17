import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.items}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  wrapper: {},
  title: {
    fontSize: "24",
    fontWeight: "700",
    position: "absolute",
    color: "#1A1A1A",
    top: 94,
    left: 20,
  },
  items: {},
});
