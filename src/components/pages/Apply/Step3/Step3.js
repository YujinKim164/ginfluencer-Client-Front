import { Box, Text, Flex, Heading, VStack, HStack } from "@chakra-ui/react";
import ApplyTitle from "../../../atoms/ApplyTitle";
import ApplyProgress from "../../../atoms/ApplyProgress";
import completeImage from "../../../../assets/images/step3_img.png";

const Step3 = () => {
  return (
    <>
      <Box id="section1" mb={{ base: 4, md: 0 }}>
        <ApplyTitle title={"선한영향력가게 회원 신청"} />
      </Box>
      <Box
        id="section2"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mx={{ base: 4, md: 0 }}
      >
        <ApplyProgress title={"신청완료"} step={3} />

        <VStack spacing={10} w="full" align="center" mt={10} mb={56}>
          <Flex
            direction={{ base: "row", md: "column" }}
            w="full"
            h={{ base: "auto", md: "96" }}
            justify="space-between"
          >
            <HStack>
              <Box color="gray.700" ml="150px">
                <Text
                  fontSize={{ base: "5xl", md: "4xl" }}
                  fontWeight="bold"
                  letterSpacing="-3px"
                >
                  선한영향력가게
                </Text>
                <Text
                  as="h2"
                  fontSize={{ base: "5xl", md: "4xl" }}
                  fontWeight="bold"
                  textDecoration="underline"
                  textDecorationColor="#fef08a"
                  textDecorationThickness="16px"
                  textUnderlineOffset="-1px"
                  letterSpacing="-3px"
                >
                  신청이 완료되었습니다.
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="normal"
                  mb={8}
                  mt={16}
                >
                  선한영향력가게 신청에 감사드리며 <br />
                  신청해 주신 모든 점주님들께 <br />
                  선한영향력가게 스티커를 보내드립니다.
                </Text>
              </Box>
              <Box
                ml={20}
                w="52%"
                h={{ base: "200px", md: "400px" }}
                bgImage={completeImage}
                bgSize="cover"
                bgPosition="center"
              />
            </HStack>
          </Flex>

          <HStack
            spacing={10}
            justify="center"
            direction={{ base: "column", md: "row" }}
          >
            <Box
              flex="1"
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              ml="150px"
            >
              <Text>
                정회원연회비는 아동과 선한 영향력을 통한
                <br />
                진정한 상생을 위해 소중히 사용하며
                <br />
                사용 내역은 투명하게 공개합니다.
              </Text>
            </Box>
            <Box
              flex="1"
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "sm", md: "lg" }}
              mt={20}
              mr={28}
            >
              <Text mb={4}>
                연회비는 정관 제8조에 의거하여 정보를 투명하게 운영/관리합니다.
                <br />
                연12만원을 납부하신 점주분들에게는 협회 의결권을 갖으며
                <br />
                정회원증 발급해드립니다.
                <br />
                비영리법인 지침상 연회비는 기부금영수증처리 되지 않으며 협회
                연회비 납부영수증과 이체내역으로 경비처리됩니다.
              </Text>
              <Text>
                우리은행 (사단법인 선한영향력가게) <br />
                1006201548538
              </Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Step3;
