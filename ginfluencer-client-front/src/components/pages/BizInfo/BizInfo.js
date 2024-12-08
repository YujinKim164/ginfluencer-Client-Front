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
  const [selectedPost, setSelectedPost] = useState(null);

  const onModal = (index) => {
    setShowModal((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const onLink = (href) => {
    console.log(`링크를 클릭했습니다: ${href}`);
  };

  return (
    <Box p={{ base: 4, md: 8 }} mb={{ base: 8, md: 16 }} h="100vh">
      <ApplyPageHeader IMG={banner} />
      <HomeCount />
      <NewCardNews showModal={showModal} onModal={onModal} onLink={onLink} />
    </Box>
  );
};

export default BizInfo;
