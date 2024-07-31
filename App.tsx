import { ThemeProvider } from "styled-components";

import theme from "./src/theme";

import { Groups } from "./src/screens/Groups";

export default function App() {
  <ThemeProvider theme={}>
    <Groups />
  </ThemeProvider>;
}
