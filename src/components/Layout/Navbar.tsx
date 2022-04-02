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
  Heading,
  Icon,
} from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiFillCrown } from "react-icons/ai";

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

const MobileNavLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <SlideFade in={isOpen} offsetY="20px">
      <Box pb={4} display={{ md: "none" }}>
        <Stack as={"nav"} spacing={4}>
          {Links.map(({ name, href }, index) => (
            <NavLink name={name} href={href} key={index} />
          ))}
        </Stack>
      </Box>
    </SlideFade>
  );
};

const NavLink = ({ name, href, key }: { name: string; href: string; key: number }) => (
  <RouterNavLink to={href}>
    {({ isActive }) => (
      <Link
        p={2}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: "gray.200",
        }}
        color={isActive ? "brand.400" : "gray.500"}
        key={key + name}
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
      <Box bg="gray.100">
        <Container py={2}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={10}>
              <HStack>
                <Icon as={AiFillCrown} color="brand.400" boxSize="2em" />
                <Heading as={RouterNavLink} size="md" to="/">
                  Logo
                </Heading>
              </HStack>
              <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
                {Links.map(({ name, href }, index) => (
                  <NavLink name={name} href={href} key={index} />
                ))}
              </HStack>
            </HStack>
            <Stack justify={"flex-end"} direction={"row"} spacing={10}>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"#"}
                display={{ base: "none", md: "inline-flex" }}
              >
                Sign In
              </Button>
              <Button as={"a"} variant="brand" href={"#"}>
                Sign Up
              </Button>
            </Stack>
          </Flex>
          {isOpen ? <MobileNavLinks isOpen={isOpen} /> : null}
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
