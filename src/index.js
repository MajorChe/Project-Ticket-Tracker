import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { AccountContextProvider } from "./context/AccountContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AccountContextProvider>
        <App />
      </AccountContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
