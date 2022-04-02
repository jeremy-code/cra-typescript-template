import React from "react";
import { Container, Heading } from "@chakra-ui/react";

import { Head } from "components/Head";
import { Layout } from "components/Layout";

const Landing = () => {
  return (
    <>
      <Head title="Home" description="Homepage" />
      <Layout>
        <Container py={8}>
          <Heading>I am a landing page.</Heading>
        </Container>
      </Layout>
    </>
  );
};

export default Landing;
