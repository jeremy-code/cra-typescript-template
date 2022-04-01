import React from "react";
import { Head } from "components/Head";
import { Layout } from "components/Layout";
import { Container, Heading } from "@chakra-ui/react";

const Landing = () => {
  return (
    <>
      <Head title="Home" description="Homepage" />
      <Layout>
        <Container maxW="container.lg" py={10}>
          <Heading>I am a landing page.</Heading>
        </Container>
      </Layout>
    </>
  );
};

export default Landing;
