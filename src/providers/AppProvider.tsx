import React, { Suspense } from "react";
import { Spinner, ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import theme from "utils/theme";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>{children}</BrowserRouter>
        </ChakraProvider>
      </HelmetProvider>
    </Suspense>
  );
};

export default AppProvider;
