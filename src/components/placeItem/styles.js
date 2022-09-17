import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: colors.terciary,
    borderBottomWidth: 1,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.background,
  },
  address: {
    fontSize: 14,
    color: colors.text,
  },
});
