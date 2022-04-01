import React from "react";
import { Box, Spinner, ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <Box>
          <Spinner />
        </Box>
      }
    >
      <HelmetProvider>
        <ChakraProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </ChakraProvider>
      </HelmetProvider>
    </React.Suspense>
  );
};

export default AppProvider;
