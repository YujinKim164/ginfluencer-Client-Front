import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Button,
  VStack,
} from "@chakra-ui/react";
import banner from "../../../assets/images/bizinfo_banner.png";
import HomeCount from "../../atoms/HomeCount";
import NewCardNews from "../../atoms/NewCardNews";
import ApplyPageHeader from "../../atoms/ApplyPageHeader";

const BizInfo = () => {
  const [showModal, setShowModal] = useState([false, false, false]);
  const openModal = () => setShowModal(true); // 모달 열기
  const closeModal = () => setShowModal(false); // 모달 닫기
  const onModal = (index) => {
    setShowModal((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const onLink = (id) => {
    if (id === 1) {
      window.location.href = "https://www.instagram.com/goodimpact012/";
    } else {
      window.location.href = "/community/notice";
    }
  };

  return (
    <Box p={{ base: 4, md: 8 }} mb={{ base: 8, md: 16 }}>
      <ApplyPageHeader IMG={banner} />
      <HomeCount />
      <NewCardNews showModal={showModal} onModal={onModal} onLink={onLink} />
    </Box>
  );
};

export default BizInfo;
