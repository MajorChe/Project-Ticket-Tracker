import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins"; //default weight is 400

const theme = {
  styles: {
    global: {
      body: {
        margin: 0,
        "font-family": "poppins",
      },

      code: {
        "font-family": "poppins",
      },
    },
  },
};

export default extendTheme(theme);
