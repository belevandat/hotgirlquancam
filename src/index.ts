import { Platform } from "react-native";

export interface Config {
  location?: string;
}
function isSimulator({ location }: Config): boolean {
  // Yeah it's fucking wrong
  return Platform.OS === "ios" && location === "Quan Cam";
}

export default isSimulator;
