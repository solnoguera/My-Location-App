import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/index";
import { store } from "./store";
import { Provider } from "react-redux";
import { init } from "./db";

init()
  .then(() => console.log("DataBase Initialized"))
  .catch((err) => console.log("DataBase Failed to connect", err.message));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
