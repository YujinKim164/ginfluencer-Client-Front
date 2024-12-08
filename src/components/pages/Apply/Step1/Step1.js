import { useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Checkbox,
  Button,
  Stack,
  VStack,
  Link,
} from "@chakra-ui/react";
import ApplyTitle from "./../../../atoms/ApplyTitle";
import ApplyProgress from "./../../../atoms/ApplyProgress";
import Terms02 from "./../../../atoms/Terms02";
import Terms01 from "./../../../atoms/Terms01";

const Step1 = ({
  nextTo,
  handleCheckBox,
  isAllChecked,
  checkBox1,
  checkBox2,
}) => {
  // Initialize checkboxesRef with useRef
  const checkboxesRef = useRef([]);

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
        overflowY="auto"
      >
        <ApplyProgress title={"약관 동의"} step={1} />

        <form id="약관동의" className="flex flex-col w-5/6 md:mt-0 mt-8">
          {/* 이용약관 체크박스 */}
          <VStack spacing={4} w="full">
            <Box w="full">
              <Flex mb={8} justify="flex-start">
                <Checkbox
                  size="lg"
                  isChecked={checkBox1}
                  onChange={(e) => handleCheckBox(e, 1)}
                  colorScheme="teal"
                >
                  <Text fontSize={{ base: "sm", md: "lg" }} ml={2}>
                    (필수) 이용약관
                  </Text>
                </Checkbox>
              </Flex>
              <Box
                border="2px solid"
                borderColor="gray.300"
                overflowY="scroll"
                h="80"
                p={4}
              >
                <Terms01 />
              </Box>
            </Box>

            {/* 개인정보 수집 이용 동의서 체크박스 */}
            <Box w="full">
              <Flex mb={8} justify="flex-start">
                <Checkbox
                  size="lg"
                  isChecked={checkBox2}
                  onChange={(e) => handleCheckBox(e, 2)}
                  colorScheme="teal"
                >
                  <Text fontSize={{ base: "sm", md: "lg" }} ml={2}>
                    (필수) 개인정보 수집 이용 동의서
                  </Text>
                </Checkbox>
              </Flex>
              <Box
                border="2px solid"
                borderColor="gray.300"
                overflowY="scroll"
                h="80"
                p={4}
              >
                <Terms02 />
              </Box>
            </Box>
          </VStack>

          {/* 전체 동의 체크박스 */}
          <Flex
            h="auto"
            w="auto"
            mt={4}
            mb={16}
            textAlign="center"
            justify="center"
            align="center"
            gap={3}
          >
            <Checkbox
              size="lg"
              isChecked={isAllChecked}
              onChange={(e) => handleCheckBox(e, 0)}
              colorScheme="teal"
            >
              <Text fontSize={{ base: "sm", md: "lg" }}>
                위의 내용을 모두 읽었으며 이에 동의합니다.
              </Text>
            </Checkbox>
          </Flex>

          {/* 다음 단계 버튼 */}
          <Link
            onClick={nextTo}
            _hover={{
              bg: "teal.500",
              color: "white",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="white"
            border="2px solid"
            borderColor="teal.500"
            w={{ base: "48", md: "80" }}
            h="16"
            gap={3}
            mb={24}
            _focus={{ outline: "none" }}
          >
            <Text
              fontSize={{ base: "base", md: "xl" }}
              fontWeight="bold"
              color="teal.500"
            >
              다음 단계
            </Text>
          </Link>
        </form>
      </Box>
    </>
  );
};

export default Step1;
