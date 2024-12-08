import React from "react";
import { Box, Text, Heading, Flex, Button, Image } from "@chakra-ui/react";
import Stats from "./../../atoms/Stats";
import VIDEO from "./../../atoms/JTBCPlayer";
import IMG1 from "../../../assets/images/homepage1.png";
import IMG2 from "../../../assets/images/homepage2.png";
import ArrowRight from "./../../../assets/svg/Arrow-right";
import { Link } from "react-router-dom";
import { scrollTop } from "../../../util/scroll";
import Post from "./../../atoms/Post";

const Home = ({ posts }) => {
  return (
    <Box>
      <Flex direction="column" position="relative">
        <Flex
          direction="column"
          position="relative"
          width="100%"
          height="92vh"
          bg="rgba(250, 229, 166, 0.8)"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="94%"
            height="90%"
            position="relative"
            borderRadius="18px"
            overflow="hidden"
          >
            <VIDEO />
          </Box>
        </Flex>
        <Flex
          direction="column"
          mt={{ base: 6, md: 24 }}
          mx={{ base: 4, md: 10 }}
        >
          <Stats />
        </Flex>
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "5xl" }}
          fontWeight="bold"
          lineHeight="short"
          mb={4}
          mt={40}
          letterSpacing="-3px"
          mx={{ base: 8, md: 16 }}
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
            mx={{ base: 8, md: 16 }}
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
        <Box mt={6} display="flex" justifyContent="center">
          <Button
            as="a"
            href="/apply"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="2px solid"
            borderColor="gray.400"
            textColor="black"
            bg="white"
            _hover={{
              bg: "rgb(0, 0, 60)",
              color: "white",
            }}
            borderRadius="full"
            p={6}
            w={{ base: "52", md: "80" }}
            gap={1}
            transition="all 0.3s"
          >
            <Text
              fontSize={{ base: "xs", md: "lg" }}
              lineHeight={{ base: "normal", md: "7" }}
              fontWeight="semibold"
            >
              선한영향력가게 동행신청
            </Text>
            <ArrowRight boxSize={6} ml={4} />
          </Button>
        </Box>
      </Flex>
      {/* Image 배열 */}
      {/* <Box
        mx="auto"
        maxW="7xl"
        px={{ base: 4, sm: 6, lg: 8 }}
        display={{ base: "none", md: "flex" }}
        justify="center"
        align="center"
        h="120"
      >
        <Box
          position="relative"
          h="80%"
          w="96"
          md={{ w: "2/3" }}
          borderWidth="1px"
          borderColor="gray.300"
        >
          <Box position="absolute" left="0" top="0">
            <Image src={IMG1} objectFit="cover" w="96" h="96" />
          </Box>
          <Box position="absolute" right="0" bottom="0">
            <Image src={IMG2} objectFit="cover" w="96" h="96" />
          </Box>
        </Box>
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        flexDirection="column"
        align="center"
        mt={8}
      >
        <Box mb={4}>
          <Image src={IMG1} objectFit="cover" w="72" h="72" />
        </Box>
        <Box>
          <Image src={IMG2} objectFit="cover" w="72" h="72" />
        </Box>
      </Box> */}
      {/* Community Section */}
    </Box>
  );
};

export default Home;
