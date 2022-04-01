import React from "react";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Container,
  SlideFade,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink as RouterNavLink } from "react-router-dom";

const Links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];

const NavLink = ({ name, href, key }: { name: string; href: string; key: number }) => (
  <RouterNavLink to={href}>
    {({ isActive }) => (
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: "gray.200",
        }}
        color={isActive ? "gray.900" : "gray.500"}
        key={key}
      >
        {name}
      </Link>
    )}
  </RouterNavLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="gray.100" px={4}>
        <Container maxW="container.lg">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={10} alignItems={"center"}>
              <Box>Logo</Box>
              <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
                {Links.map(({ name, href }, index) => (
                  <NavLink name={name} href={href} key={index} />
                ))}
              </HStack>
            </HStack>
            <Stack justify={"flex-end"} direction={"row"} spacing={6}>
              <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"link"} href={"#"}>
                Sign In
              </Button>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={600}
                href={"#"}
                color={"white"}
                bg={"pink.400"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </Flex>

          {isOpen ? (
            <SlideFade in={isOpen} offsetY="20px">
              <Box pb={4} display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  {Links.map(({ name, href }, index) => (
                    <NavLink name={name} href={href} key={index} />
                  ))}
                </Stack>
              </Box>
            </SlideFade>
          ) : null}
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
