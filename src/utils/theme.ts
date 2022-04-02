import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
  },
  components: {
    Button: {
      variants: {
        brand: {
          bg: "brand.400",
          _hover: {
            bg: "brand.300",
          },
          color: "white",
          fontSize: "sm",
          fontWeight: 600,
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: "container.lg",
      },
    },
    Link: {
      baseStyle: {
        color: "brand.400",
        _hover: {
          color: "brand.500",
        },
      },
    },
  },
});

export default theme;
