import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: colors.terciary,
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  mapPreview: {
    width: "100%",
    height: "100%",
  },
});
