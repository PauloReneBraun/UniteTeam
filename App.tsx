import styled, { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import { Groups } from "./src/screens/Groups";

export default function App() {
  <ThemeProvider theme={}>
    <Groups />
  </ThemeProvider>;
}
