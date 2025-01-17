import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Flex, Text, Checkbox, Image } from "@chakra-ui/react";
import axios from "axios";

const NoticePopup = ({ notice, setNotice }) => {
  const [dontShowToday, setDontShowToday] = useState(false);

  const handleClose = () => {
    if (dontShowToday) {
      const today = new Date();
      today.setHours(23, 59, 59, 999); // Set to end of day
      localStorage.setItem("dontShowNoticeToday", today.getTime());
    }
    setNotice(null); // 팝업 닫기
  };

  const handleCheckboxChange = () => {
    setDontShowToday(!dontShowToday);
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="blackAlpha.600"
      zIndex={50}
      p={4}
    >
      <Box
        bg="white"
        p={6}
        rounded="lg"
        boxShadow="lg"
        width="full"
        maxW="md"
        position="relative"
      >
        <Button
          position="absolute"
          top={2}
          right={2}
          size="sm"
          variant="ghost"
          onClick={handleClose}
          colorScheme="gray"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>

        <Text fontSize="lg" fontWeight="semibold" mb={4}>
          {notice.title}
        </Text>

        <Text fontSize="sm" mb={4}>
          {notice.content}
        </Text>

        {notice.popUpFiles && notice.popUpFiles.length > 0 && (
          <RouterLink to={`/community/notice/view/${notice.id}`}>
            <Image
              src={`https://good-influence-shop-3.s3.ap-northeast-2.amazonaws.com/popup/file/2024/12/760d3fd0-cb02-4e87-a53f-01d51373f5df_programmers.jpeg`}
              alt="팝업이미지"
              mb={4}
              width="full"
              maxH={"96"}
              objectFit="contain"
              rounded="md"
            />
          </RouterLink>
        )}

        <Flex alignItems="center">
          <Checkbox
            id="dontShowToday"
            isChecked={dontShowToday}
            onChange={handleCheckboxChange}
            mr={2}
          />
          <Text fontSize="sm">오늘 하루 안 보기</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default NoticePopup;
