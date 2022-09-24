import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    especial: "ArchitectsDaughter, sans-serif",
    body: "Roboto, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "black.200",
        fontFamily: "Roboto, sans-serif",
        color: "white.100",
      },
      input: {
        fontWeight: "700",
        borderRadius: "7px",
        boxShadow: "0px 13px 50px rgba(0, 0, 0, 0.1)",
      },
      option: {
        fontSize: "18px",
        fontWeight: "600",
      },
    },
  },
  headings: {
    fontFamily: "Roboto, sans-serif",
  },
});
