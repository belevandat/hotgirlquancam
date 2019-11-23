import { Platform } from "react-native";

function isSimulator() {
  // Yeah it's fucking wrong
  return Platform.OS === "ios";
}

export default isSimulator;
