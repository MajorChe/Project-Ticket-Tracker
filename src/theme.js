import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins"; //default weight is 400

const theme = {
  styles: {
    global: {
      body: {
        margin: 0,
        "fontFamily": "poppins",
      },

      code: {
        "fontFamily": "poppins",
      },
    },
  },
};

export default extendTheme(theme);
