import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Loading } from "./src/components/Loading";

import theme from "./src/theme";

import { Groups } from "./src/screens/Groups";

export default function App() {
  const [fontsLoading] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.GRAY_700}
        translucent
      />
      {fontsLoading ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
