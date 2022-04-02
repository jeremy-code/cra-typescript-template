import React from "react";
import { Container, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { Link } from "react-router-dom";
import { Head } from "components/Head";

const RouteError = () => {
  return (
    <>
      <Head title="404" description="Page not found" />
      <Layout>
        <Container py={8}>
          <VStack spacing={10} alignItems="flex-start" h="full">
            <VStack spacing={5} alignItems="flex-start">
              <Heading as="h1" size="4xl" color="red.500">
                404
              </Heading>
              <Text>
                <span role="img" aria-label="sad face">
                  😢
                </span>{" "}
                Sorry, this page does not exist.
              </Text>
            </VStack>
            <Button as={Link} variant="brand" to="/">
              Go back to home
            </Button>
          </VStack>
        </Container>
      </Layout>
    </>
  );
};

export default RouteError;
