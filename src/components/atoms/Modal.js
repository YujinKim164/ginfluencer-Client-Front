import React from "react";
import { Box, Flex, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import HomeContent from "./HomeContent";

const Modal = ({ show, onClose, children, content, onLink, id, onModal }) => {
  if (!show) {
    return null;
  }

  return (
    <Flex
      position="fixed"
      inset="0"
      align="center"
      justify="center"
      bg="rgba(0, 0, 0, 0.5)"
      zIndex="overlay"
      px={4}
      py={6}
      data-id={id}
    >
      <Box
        bg="white"
        borderRadius="md"
        p={4}
        maxW="3xl"
        h="fit-content"
        overflowY="auto"
        mx="auto"
        zIndex="modal"
        w="full"
      >
        <HomeContent
          content={content}
          onLink={onLink}
          id={id}
          closeModal={onClose}
        />
      </Box>
    </Flex>
  );
};

export default Modal;
