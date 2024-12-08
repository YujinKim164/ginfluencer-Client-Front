import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={8}>
      <Box
        id="about"
        bgImage="url('/path-to-your-image')"
        bgPosition="top right"
        bgSize="75%"
        bgRepeat="no-repeat"
        pt={{ base: "16", md: "36" }}
        height="auto"
      >
        <Flex
          direction="column"
          mx={{ base: 4, md: 10 }}
          my={{ base: 6, md: 16 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "xl", md: "5xl" }}
            fontWeight="semibold"
            lineHeight="short"
            mb={4}
          >
            상생하는 세상 꿈꾸는 '선한영향력'에
            <br className="hidden md:inline" /> 동행 하실 분들을 모집합니다!
          </Heading>

          <Box id="info" my={8}>
            <Text
              fontSize={{ base: "xs", md: "lg" }}
              fontWeight="normal"
              lineHeight="relaxed"
              color="gray.600"
            >
              선한영향력가게는 결식 아동을 자발적으로 지원하는 가게입니다.
              <br className="hidden md:inline" />
              지난 2019년 서울시 마포에 위치한 ‘진짜파스타’ 매장에서 시작한 이
              캠페인은 결식아동들을 위한 따듯한 손길이 모여 ‘선한영향력’이라는
              단체로 만들어졌습니다.
              <br className="hidden md:inline" />
              음식점 뿐만 아니라 아이들에게 도움이 될 수 있는 선한영향력을
              함께하는 다양한 분야의 점주님들이 함께하고 있습니다.
              <br className="hidden md:inline" />
              세상을 위한 좋은 변화를 위해 함께 하실 분들은 신청해 주세요!
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
