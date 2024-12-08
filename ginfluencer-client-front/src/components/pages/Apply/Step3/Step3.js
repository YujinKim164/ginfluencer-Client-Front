import { Box, Text, Flex, Heading, VStack, HStack } from "@chakra-ui/react";
import ApplyTitle from "../../../atoms/ApplyTitle";
import ApplyProgress from "../../../atoms/ApplyProgress";

const Step3 = () => {
  return (
    <>
      {/* section1 */}
      <Box id="section1" mb={{ base: 4, md: 0 }}>
        <ApplyTitle title={"선한영향력가게 회원 신청"} />
      </Box>

      {/* section2 */}
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
            direction={{ base: "column", md: "row" }}
            w="full"
            h={{ base: "auto", md: "96" }}
            justify="space-between"
            align="center"
          >
            <Box
              flex="1"
              mb={{ base: 8, md: 0 }}
              textAlign="center"
              color="gray.700"
            >
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                fontWeight="semibold"
                mb={4}
              >
                <Text as="span">선한영향력가게</Text>
                <br />
                <Text as="span" color="yellow.400" textDecoration="underline">
                  신청이 완료 되었습니다.
                </Text>
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="normal"
                mb={8}
              >
                선한영향력가게 신청에 감사드리며 <br />
                신청해 주신 모든 점주님들께 <br />
                선한영향력가게 스티커를 보내드립니다.
              </Text>
            </Box>
            <Box
              w="full"
              h={{ base: "48", md: "full" }}
              bgImage="url('./assets/images/step3_img.png')"
              bgSize="cover"
              bgPosition="center"
            />
          </Flex>

          <HStack
            spacing={10}
            w="full"
            justify="center"
            direction={{ base: "column", md: "row" }}
          >
            <Box
              flex="1"
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "lg", md: "xl" }}
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
