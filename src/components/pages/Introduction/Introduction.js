import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Grid,
  Select,
  Tabs,
  TabList,
  Tab,
  Image,
  Button,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ApplyPageHeader from "../../atoms/ApplyPageHeader";
import IntroTab from "../../atoms/IntroTab";
import { Element as ScrollElement, Link as ScrollLink } from "react-scroll";
import banner from "../../../assets/images/intro_banner.png";
import img1 from "../../../assets/images/intro_img_1.png";
import img2 from "../../../assets/images/intro_img_2.png";
import img3 from "../../../assets/images/intro_img_3.png";
import button1 from "../../../assets/images/intro_button_1.png";
import button2 from "../../../assets/images/intro_button_2.png";
import button3 from "../../../assets/images/intro_button_3.png";
import Map from "./Map";

const Introduction = ({ onDownload }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [currentTab, setCurrentTab] = useState("의장인사말");

  const tabs = [
    { name: "의장인사말", href: "의장인사말" },
    { name: "CI", href: "CI" },
    { name: "연혁", href: "연혁" },
    { name: "찾아오시는 길", href: "찾아오시는 길" },
  ];

  const handleSelectTab = (event) => {
    setCurrentTab(event.target.value);
    document.getElementsByName(event.target.value)[0].scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleTabClick = (name, href) => {
    setCurrentTab(name);
    document.getElementsByName(href)[0].scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Box p={{ base: 4, md: 8 }} mb={{ base: 8, md: 16 }} h="100vh">
      <ApplyPageHeader IMG={banner} />
      <Box w="full" mb={12}>
        <Box
          mx={{ base: 4, md: 10 }}
          mt={{ base: 8, md: 12 }}
          mb={{ base: 12, md: 16 }}
        >
          <Text
            fontSize={{ base: "2xl", md: "5xl" }}
            fontWeight="semibold"
            mb={4}
          >
            선한영향력가게
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="semibold"
            lineHeight={{ base: "tall", md: "taller" }}
          >
            전국 결식아동을 지원하고 돕는 목적으로 다양한 업종 매장 점주님들이
            모여 만든 비영리 사단법인입니다.
            <br />
            지난 2019년 서울시 마포에 위치한 ‘진짜파스타’ 매장에서 시작한 이
            캠페인은 결식아동들을 위한 따듯한 손길이 모여
            <br />
            ‘선한영향력’ 이라는 단체로 만들어졌습니다.
            <br />
            지역마다 더 많은 매장에서 더 쉽게 후원할 수 있고 꼭 필요한 아동들이
            편하게 방문할 수 있는 환경을 만들기 위해 노력하고 있습니다.
          </Text>
        </Box>

        <VStack spacing={16}>
          <Box>
            {isMobile ? (
              <Select
                onChange={handleSelectTab}
                focusBorderColor="black"
                size="lg"
              >
                {tabs.map((tab) => (
                  <option key={tab.name} value={tab.name}>
                    {tab.name}
                  </option>
                ))}
              </Select>
            ) : (
              <Tabs variant="unstyled" align="center">
                <TabList borderBottom="2px solid #E2E8F0">
                  {tabs.map((tab) => (
                    <Flex key={tab.name}>
                      <Tab
                        fontWeight="bold"
                        fontSize="xl"
                        color={currentTab === tab.name ? "black" : "gray.500"}
                        borderBottom={
                          currentTab === tab.name
                            ? "2px solid black"
                            : "2px solid gray.400"
                        }
                        onClick={() => handleTabClick(tab.name, tab.href)}
                        _hover={{
                          color: "gray.700",
                          borderBottom: "2px solid gray.600",
                        }}
                        _selected={{
                          color: "black",
                        }}
                      >
                        {tab.name}
                      </Tab>
                    </Flex>
                  ))}
                </TabList>
              </Tabs>
            )}
          </Box>{" "}
          <Box ml={{ base: 0, md: 10 }}>
            <ScrollElement name="의장인사말">
              <Grid
                templateColumns={{ base: "1fr", md: "3fr 3fr 6fr" }}
                mb={20}
              >
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  letterSpacing="-1.5px"
                >
                  의장인사말
                </Text>
                <Image src={img1} alt="의장 이미지" />
                <Text fontSize={{ base: "lg", md: "xl" }} letterSpacing="-1px">
                  "안녕하세요. 선한영향력가게 의장 오인태입니다.
                  <br />
                  2019년 첫걸음을 뗀 선한영향력가게는 많은 분들의 참여와
                  응원으로 느리지만 최선을 다해 나아가고 있습니다.
                  <br />
                  아이들의 삶의 질 개선과 참여해주시는 사장님들의 불편함을
                  최소화하고,
                  <br /> 모든 이들의 행복과 삶을 위해 나아갈 수 있도록
                  노력하겠습니다.
                  <br />
                  항상 최고를 위해 최선을 다하는 선한영향력가게가 되겠습니다.
                  <br />
                  감사합니다."
                </Text>
              </Grid>
            </ScrollElement>

            <ScrollElement name="CI">
              <Grid
                templateColumns={{ base: "1fr", md: "3fr 3fr 6fr" }}
                mb={20}
              >
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                  CI
                </Text>

                <Box className="w-3/4 md:w-1/2 justify-center">
                  <Image src={img2} alt="CI" mb={24} />
                </Box>

                <Box className="w-full" textAlign="left">
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="medium"
                    mb={12}
                    letterSpacing="-1px"
                  >
                    결식아동을 위한 선한영향력가게와 잘 어울리도록 아이의 즐거운
                    표정을 형상화하여
                    <br className="hidden md:inline" />
                    아이들과 선한영향력가게에 참여하는 모든이들의 순수한 마음을
                    상징
                  </Text>

                  <Flex direction="column" gap={4}>
                    <Flex direction="column" gap={4} mb={6}>
                      <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight="medium"
                      >
                        CI 사용가이드
                      </Text>
                      <Text fontSize="lg" fontWeight="medium" color="gray.500">
                        심벌 및 마크를 올바르게 사용하기 위해서는 사용원칙과
                        지침을 정확히 이해하고 적용하며 사용 및 실제작을
                        진행하기에 앞서 담당부서의 협조를 받으시길 바랍니다.
                      </Text>
                    </Flex>

                    <Flex direction="row" gap={4}>
                      <Image
                        name="AI 다운로드"
                        src={button1}
                        _hover={{ cursor: "pointer" }}
                        onClick={onDownload}
                      />
                      <Image
                        name="png 다운로드"
                        src={button2}
                        _hover={{ cursor: "pointer" }}
                        onClick={onDownload}
                      />
                    </Flex>
                  </Flex>
                </Box>
              </Grid>
            </ScrollElement>

            <ScrollElement name="CI_2">
              <Grid
                templateColumns={{ base: "1fr", md: "3fr 3fr 6fr" }}
                mb={20}
              >
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" />

                <Box className="w-3/4 md:w-1/2 justify-center">
                  <Image src={img3} alt="CI" />
                </Box>

                <Box className="w-full" textAlign="left">
                  <Flex direction="column" gap={24}>
                    <Flex direction="column" gap={4} mb={6}>
                      <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight="medium"
                      >
                        CI 사용가이드
                      </Text>
                      <Text fontSize="lg" fontWeight="medium" color="gray.500">
                        배너 사용 가이드 취지에 해치지 않는 선에서 문구와 매장명
                        등 변경해서 사용 가능합니다.
                      </Text>
                    </Flex>

                    <RouterLink
                      display="flex"
                      flexDirection="row"
                      gap={4}
                      onClick={onDownload}
                      width={{ base: "28", md: "full" }}
                    >
                      <Image
                        name="배너 다운로드"
                        src={button3}
                        _hover={{ cursor: "pointer" }}
                      />
                    </RouterLink>
                  </Flex>
                </Box>
              </Grid>
            </ScrollElement>

            <ScrollElement name="연혁">
              <Grid
                templateColumns={{ base: "1fr", md: "3fr 3fr 6fr" }}
                mr={30}
              >
                <Heading
                  as="h2"
                  fontSize={["2xl", "3xl"]}
                  fontWeight="bold"
                  textAlign="start"
                  mr={4}
                  letterSpacing="-1.5px"
                >
                  연혁
                </Heading>
                <Box borderTop="2px solid" borderColor="gray.200" py={16}>
                  <VStack spacing={14} align="stretch">
                    {[
                      {
                        year: "2024년",
                        month: "4월",
                        title: "지정기부금단체 신청",
                      },
                      {
                        year: "2024년",
                        month: "2월",
                        title: "비영리 사단법인 승인",
                      },
                      {
                        year: "2023년",
                        month: "10월",
                        title: "청주시청 제휴",
                        description:
                          "청주시청 제휴 청주소재 선한영향력가게 급식카드조회서비스내 지도서비스 및 홍보지원, 매장 확대 지원",
                      },
                      {
                        year: "2023년",
                        month: "9월",
                        title:
                          "결식아동 지원활동 확대를 위해 단체와 창톡이 상호 유기적으로 협조",
                      },
                      {
                        year: "2023년",
                        month: "7월",
                        title:
                          "나눔비타민 (결식아동과 매장 연결 예약서비스 플랫폼 개발) 업무협약",
                      },
                      {
                        year: "2023년",
                        month: "6월",
                        title: "원주시청 제휴",
                        description:
                          "원주소재 선한영향력가게 급식카드 조회 서비스 내 지도서비스 및 홍보지원",
                      },
                      {
                        year: "2023년",
                        month: "5월",
                        title: "경기도주식회사 협업 지원사업시작",
                        description:
                          "경기도소재 배달특급 앱 활용 지원 및 홍보 지원 비대면 결제 가능 및 배달비 지원",
                      },
                      {
                        year: "2022년",
                        month: "7월",
                        title: "8개 지역협의회 지부장 선출",
                      },
                      {
                        year: "2022년",
                        month: "3월 ~ 11월",
                        title:
                          "IBA재단 지원사업 '사랑의 밥차' 푸드트럭 지원 사업 추진",
                      },
                      { year: "2021년", month: "9월", title: "홈페이지 개편" },
                      {
                        year: "2021년",
                        month: "7월",
                        title:
                          "비영리 공식단체 '선한영향력가게' 설립(의장 오인태)",
                      },
                      {
                        year: "2020년",
                        month: "7월",
                        title: "전국 600여개 가게 참여로 확대",
                      },
                      {
                        year: "2019년",
                        month: "7월",
                        title:
                          "홍대 '진짜파스타'(대표 오인태)에서 캠페인성 활동으로 시작",
                      },
                    ].map((event, index) => (
                      <Box key={index}>
                        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                          <Box colSpan={2} textAlign="left">
                            <Text
                              fontSize={["lg", "xl"]}
                              fontWeight="bold"
                              whiteSpace="nowrap"
                            >
                              {event.year}
                            </Text>
                          </Box>
                          <Box colSpan={2} textAlign="left">
                            <Text
                              fontSize={["lg", "xl"]}
                              fontWeight="bold"
                              whiteSpace="nowrap"
                            >
                              {event.month}
                            </Text>
                          </Box>
                          <Box colSpan={6} md={4} mdStart={3}>
                            <Text
                              fontSize="l"
                              fontWeight="bold"
                              whiteSpace="nowrap"
                            >
                              {event.title}
                              {event.description && (
                                <Text
                                  fontSize="md"
                                  fontWeight="normal"
                                  whiteSpace="nowrap"
                                >
                                  {event.description}
                                </Text>
                              )}
                            </Text>
                          </Box>
                        </Grid>
                        {index < 9 && <Divider />}
                      </Box>
                    ))}
                  </VStack>
                </Box>
                <Box colSpan={{ base: 12, md: 3 }} textAlign="start">
                  <Heading
                    size={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    mr={4}
                  ></Heading>
                </Box>
              </Grid>
            </ScrollElement>

            <ScrollElement name="찾아오시는 길">
              <Grid
                templateColumns={{ base: "1fr", md: "3fr 3fr 6fr" }}
                gap={4}
              >
                <Heading
                  as="h2"
                  fontSize={["2xl", "3xl"]}
                  fontWeight="bold"
                  textAlign="start"
                  mr={4}
                  whiteSpace="nowrap"
                  letterSpacing="-1.5px"
                >
                  찾아오시는 길
                </Heading>
                <Box borderTop="2px solid" borderColor="gray.200" py={12}>
                  <VStack spacing={10} align="stretch">
                    <Box>
                      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                        <Box colSpan={2} md={1} textAlign="left">
                          <Text
                            fontSize={["lg", "xl"]}
                            fontWeight="bold"
                            whiteSpace="nowrap"
                          >
                            주소
                          </Text>
                        </Box>
                        <Box colSpan={2} md={1} textAlign="left">
                          <Text
                            fontSize={["lg", "xl"]}
                            fontWeight="bold"
                            whiteSpace="nowrap"
                          >
                            (06119) 서울특별시 강남구 강남대로118길 43 3층
                            (지번: 서울특별시 강남구 논현동 181-10 3층)
                          </Text>
                        </Box>
                      </Grid>
                    </Box>
                    <Divider />
                    <Box>
                      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                        <Box colSpan={2} md={1} textAlign="left">
                          <Text
                            fontSize={["lg", "xl"]}
                            fontWeight="bold"
                            whiteSpace="nowrap"
                          >
                            전화
                          </Text>
                        </Box>
                        <Box colSpan={2} md={1} textAlign="left">
                          <Text
                            fontSize={["lg", "xl"]}
                            fontWeight="bold"
                            whiteSpace="nowrap"
                          >
                            010-2375-0133
                          </Text>
                        </Box>
                      </Grid>
                    </Box>
                    <Divider />
                    <Box>
                      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                        <Box colSpan={2} md={1} textAlign="left">
                          <Text
                            fontSize={["lg", "xl"]}
                            fontWeight="bold"
                            whiteSpace="nowrap"
                          >
                            이메일
                          </Text>
                        </Box>
                        <Box colSpan={2} md={1} textAlign="left">
                          <Text
                            fontSize={["lg", "xl"]}
                            fontWeight="bold"
                            whiteSpace="nowrap"
                          >
                            goodimpact012@daum.net
                          </Text>
                        </Box>
                      </Grid>
                    </Box>
                    <Box>
                      <Map />
                    </Box>
                  </VStack>
                </Box>
              </Grid>
            </ScrollElement>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Introduction;
