import { ActivityIndicator } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import { Groups } from "./src/screens/Groups";

export default function App() {
  const [fontsLoading] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  <ThemeProvider theme={theme}>
    <Groups />
  </ThemeProvider>;
}
