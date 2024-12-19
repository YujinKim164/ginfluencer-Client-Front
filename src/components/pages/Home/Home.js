import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  Image,
  UnorderedList,
  ListItem,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import Stats from "./../../atoms/Stats";
import VIDEO from "./../../atoms/JTBCPlayer";
import IMG1 from "../../../assets/images/homepage1.png";
import IMG2 from "../../../assets/images/homepage2.png";
import ArrowRight from "./../../../assets/svg/Arrow-right";
import { Link } from "react-router-dom";
import { scrollTop } from "../../../util/scroll";
import Post from "./../../atoms/Post";
import NoticePopup from "./../../atoms/NoticePopup";
import axios from "axios";

const Home = ({ posts }) => {
  const [notice, setNotice] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchPopup = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/all/popups/visible`
        );
        if (response.data && response.data.length > 0) {
          const visibleNotice = response.data[0]; // 첫 번째 팝업을 사용할 경우
          setNotice(visibleNotice);
          onOpen(); // 팝업 열기
        }
      } catch (error) {
        console.error("Error fetching popup data:", error);
      }
    };

    fetchPopup();
  }, [onOpen]);

  return (
    <Box>
      {/* NoticePopup이 있을 때만 표시 */}
      {notice && <NoticePopup notice={notice} setNotice={setNotice} />}
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
            mb={20}
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

      <Flex
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        mt={50}
      >
        <Box marginRight={10}>
          <Image src={IMG1} objectFit="cover" boxSize="96" />
        </Box>
        <Box position="relative" bottom="-120px">
          <Image src={IMG2} objectFit="cover" boxSize="96" />
        </Box>
      </Flex>

      {/* 커뮤니티 영역 */}
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        h={{ base: "26rem", md: "full" }}
        mt={{ base: 14, md: 40 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          width="auto"
          h={{ base: "25rem", md: "35rem" }}
          my={{ base: 0, md: 20 }}
        >
          <Box
            flexBasis={{ base: "11%", md: "25%" }}
            display="flex"
            flexDirection="column"
            m={{ base: 0, md: 4 }}
            ml={{ base: 0, md: 12 }}
          >
            <Heading
              fontSize={{ base: "xl", md: "5xl" }}
              fontWeight="semibold"
              p={{ base: 2, md: 0 }}
            >
              커뮤니티
            </Heading>
          </Box>

          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            m={{ base: 0, md: 4 }}
            p={{ base: 0, md: 4 }}
            width="100%"
            height="100%"
            borderTop="2px solid black"
          >
            <UnorderedList
              display="flex"
              flexDirection="column"
              width="100%"
              fontSize={{ base: "xs", md: "2xl" }}
              lineHeight="loose"
              listStyleType="none"
              m={0}
              p={0}
            >
              {/* {posts.map((post, i) => (
                <ListItem key={i}>
                  <Post idx={post.idx} type={post.type} title={post.title} />
                </ListItem>
              ))} */}
            </UnorderedList>

            <Flex py={4} justifyContent="start" mt={4}>
              <Link as={Link} to="/community/notice" onClick={scrollTop}>
                <Button
                  border="2px solid"
                  borderColor="gray.300"
                  textColor="rgb(0, 0, 60)"
                  bg="white"
                  width={{ base: 12, md: 16 }}
                  justifyContent="center"
                  alignItems="center"
                  _hover={{ bg: "rgb(0, 0, 60)", color: "white" }}
                  borderRadius="full"
                  py={6}
                  w={{ base: "16", md: "32" }}
                >
                  <Flex alignItems="center" ml={5}>
                    <Box
                      fontSize={{ base: "xs", md: "lg" }}
                      fontWeight={{ base: "medium", md: "semibold" }}
                      lineHeight={{ base: "short", md: "tall" }}
                    >
                      더보기
                    </Box>
                    <ArrowRight boxSize={6} />
                  </Flex>
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
