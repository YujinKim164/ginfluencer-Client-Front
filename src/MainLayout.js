import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/blocks/Header/Header";
import Footer from "./components/blocks/Footer/Footer";
import Login from "./components/pages/Login/Login";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Flex direction="column" height="100vh" justifyContent="space-between">
      {!isAdminRoute ? (
        <>
          <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Box as="main" flex="1" width="100%">
            {React.cloneElement(children, { onLogin: handleLogin })}{" "}
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
