import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins"; //default weight is 400

const theme = {
  styles: {
    global: {
      body: {
        margin: 0,
        "fontFamily": "system-ui sans-serif",
      },

      code: {
        "fontFamily": "system-ui sans-serif",
      },
    },
  },
};

export default extendTheme(theme);
