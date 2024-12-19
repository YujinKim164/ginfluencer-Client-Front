import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router 사용
import { Box, Flex, Text, Checkbox, Link, VStack } from "@chakra-ui/react";
import ApplyTitle from "./../../../atoms/ApplyTitle";
import ApplyProgress from "./../../../atoms/ApplyProgress";
import Terms02 from "./../../../atoms/Terms02";
import Terms01 from "./../../../atoms/Terms01";

const Step1 = () => {
  const navigate = useNavigate();
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleCheckBox = (e, checkboxIndex) => {
    const checked = e.target.checked;
    if (checkboxIndex === 1) {
      setCheckBox1(checked);
    } else if (checkboxIndex === 2) {
      setCheckBox2(checked);
    } else if (checkboxIndex === 0) {
      setIsAllChecked(checked);
      setCheckBox1(checked);
      setCheckBox2(checked);
    }
  };

  useEffect(() => {
    setIsAllChecked(checkBox1 && checkBox2);
  }, [checkBox1, checkBox2]);

  const isNextButtonDisabled = !(checkBox1 && checkBox2);

  const handleAllCheckBoxChange = (e) => {
    handleCheckBox(e, 0);
  };

  const handleNextStep = () => {
    if (isNextButtonDisabled) {
      alert("필수 항목에 동의해주세요.");
    } else {
      navigate("/apply/step2");
    }
  };

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
            mt={12}
            mb={16}
            textAlign="center"
            justify="center"
            align="center"
            gap={3}
          >
            <Checkbox
              size="lg"
              isChecked={isAllChecked}
              onChange={handleAllCheckBoxChange}
              colorScheme="teal"
            >
              <Text fontSize={{ base: "sm", md: "lg" }}>
                위의 내용을 모두 읽었으며 이에 동의합니다.
              </Text>
            </Checkbox>
          </Flex>

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
            <Link
              onClick={handleNextStep}
              _hover={{
                bg: isNextButtonDisabled ? "gray.200" : "rgb(8, 47, 73)",
                color: isNextButtonDisabled ? "gray.500" : "white",
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="white"
              border="2px solid"
              borderColor="rgb(8, 47, 73)"
              w={{ base: "48", md: "80" }}
              h="16"
              gap={3}
              mb={24}
              _focus={{ outline: "none" }}
              pointerEvents={isNextButtonDisabled ? "none" : "auto"}
            >
              <Text
                fontSize={{ base: "base", md: "xl" }}
                fontWeight="bold"
                color="inherit"
              >
                다음 단계
              </Text>
            </Link>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default Step1;
