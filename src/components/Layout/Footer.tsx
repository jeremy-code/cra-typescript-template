import React from "react";
import { Center, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center as="footer" bg="gray.50" py={4} flexShrink={0}>
      <Text>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by{" "}
        <Link
          href="https://jeremynguyen.dev"
          color="pink.400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jeremy Nguyen
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
