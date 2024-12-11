import React from "react";
import ArrowRight from "../../../assets/svg/Arrow-right";
import banner from "../../../assets/images/apply_banner.png";
import card1 from "../../../assets/images/apply_img_1.png";
import card2 from "../../../assets/images/apply_img_2.png";
import DownLoadIcon from "../../atoms/DownLoadIcon";
import ApplyPageHeader from "../../atoms/ApplyPageHeader";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Link,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Apply = ({ onDownload }) => {
  const textSize = useBreakpointValue({ base: "sm", md: "lg" });

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
            letterSpacing="-2px"
          >
            세상을 위한 좋은 변화를 위해
            <br /> 함께하실 분들은 신청해주세요!
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="semibold"
            lineHeight={{ base: "tall", md: "taller" }}
            mb={4}
          >
            사단법인 선한영향력가게는 결식우려아동급식카드 소지 아동 대상과
            단체들에 <Box as="br" display={{ base: "none", md: "block" }} />
            무료 또는 할인가격으로 급식 또는 매장 업종 서비스로 후원함을
            목적으로 운영됩니다.
          </Text>
          <Flex>
            <Link href="/apply/step1" _hover={{ textDecoration: "none" }}>
              <Button
                colorScheme="yellow"
                size="lg"
                rightIcon={<ArrowRight size={10} strokeWidth={1.8} />}
                rounded="full"
              >
                선한영향력가게 동행 신청
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        {/* 첫 번째 카드 */}
        <Box
          flex="1"
          p={8}
          shadow="xl"
          rounded="2xl"
          bg="white"
          position="relative"
        >
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            업종
          </Text>
          <Text fontSize={textSize} color="gray.500" mb={4}>
            가능 업종
          </Text>
          <Text fontSize={textSize} mb={8}>
            음식, 카페, 안경원, 헤어샵, 스터디카페, 꽃집, 인테리어,{" "}
            <Box as="br" display={{ base: "none", md: "block" }} />
            편의점, 병원, 약국 등 기타 아이들에게 도움되는 서비스 업종
          </Text>
          <Text fontSize={textSize} color="gray.500" mb={4}>
            불가능 업종
          </Text>
          <Text fontSize={textSize} mb={16}>
            국가에서 지정하는 아동대상 불가 업종
          </Text>
          <Image
            src={card1}
            alt="Card 1"
            w={{ base: "36", md: "72" }}
            h={{ base: "28", md: "56" }}
            objectFit="cover"
            position="absolute"
            bottom={4}
            right={4}
          />
        </Box>
        {/* 두 번째 카드 */}
        <Box
          flex="1"
          p={8}
          shadow="xl"
          rounded="2xl"
          bg="white"
          position="relative"
        >
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            '결식우려아동급식카드'란?
          </Text>
          <Text fontSize={textSize} mb={8}>
            지자체에서 차상위계층 및 결식이 우려되어 지정한 18세 미만{" "}
            <Box as="br" display={{ base: "none", md: "block" }} />
            미취학, 취학 아동에게 지급하는 충전식 선불카드입니다. (일부 지자체
            제외)
          </Text>
          <Button
            onClick={onDownload}
            size="lg"
            rounded="full"
            border="2px solid"
            borderColor="black"
            bg="white"
            _hover={{ bg: "gray.100" }}
            leftIcon={<DownLoadIcon />}
          >
            표준메뉴얼 다운로드
          </Button>
          <Image
            src={card2}
            alt="Card 2"
            w={{ base: "36", md: "72" }}
            h={{ base: "28", md: "56" }}
            objectFit="cover"
            position="absolute"
            bottom={4}
            right={4}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Apply;
