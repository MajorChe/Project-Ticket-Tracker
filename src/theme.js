import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins"; //default weight is 400

const theme = {
  styles: {
    global: {
      body: {
        margin: 0,
        // "fontFamily": "system-ui sans-serif",
        "fontFamily": "Helvetica",
        "scrollbar-width": "thin",
        "scrollbar-color": "black #edf2f7",
        "*::-webkit-scrollbar": {
          "width": "12px",
        },
        "*::-webkit-scrollbar-track":{
          "background": "#edf2f7",
        },
        
        "*::-webkit-scrollbar-thumb" :{
          "background-color": "black",
          "border-radius": "20px",
          "border": "3px solid black",
        }
      },
      code: {
        "fontFamily": "system-ui sans-serif",
      },
      
    },
  },
};

export default extendTheme(theme);
