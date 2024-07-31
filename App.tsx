import styled, { ThemeProvider } from "styled-components/native";

import theme from "./src/theme";

import { Groups } from "./src/screens/Groups";

export default function App() {
  <ThemeProvider theme={}>
    <Groups />
  </ThemeProvider>;
}
