import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const title = ["Pomodoro", "Short Break","Long Break"];

export function Header({ time }) {
  return (
    <View>
      {title.map((item, index) => (
        <TouchableOpacity key={index}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
