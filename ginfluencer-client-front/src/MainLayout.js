import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//import { MyPageAPI } from './api';
import Header from "./components/blocks/Header/Header";
import Footer from "./components/blocks/Footer/Footer";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div>
      {!isAdminRoute ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default MainLayout;
