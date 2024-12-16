import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/blocks/Header/Header";
import Footer from "./components/blocks/Footer/Footer";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <Flex direction="column" height="100vh" justifyContent="space-between">
      {!isAdminRoute ? (
        <>
          <Header />
          <Box as="main" flex="1" width="100%">
            {children}
          </Box>
          <Footer />
        </>
      ) : (
        <Box as="main" flex="1" width="100%">
          {children}
        </Box>
      )}
    </Flex>
  );
};

export default MainLayout;
