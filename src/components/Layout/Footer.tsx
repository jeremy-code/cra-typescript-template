import React from "react";
import { Center, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center as="footer" bg="white" py={4} flexShrink={0}>
      <Text>
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <Link href="https://jeremynguyen.dev" target="_blank" rel="noopener noreferrer">
          Jeremy Nguyen
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
