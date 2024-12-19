import React from "react";
import { Box, Button, Heading, Input, Text, VStack } from "@chakra-ui/react";

const FindPassword = () => {
  return (
    <Box w="full" overflow="hidden">
      <Box mx="auto" textAlign="center" py={{ base: 10, md: 16 }}>
        <Heading
          as="h2"
          fontSize="4xl"
          letterSpacing="-1.5px"
          fontWeight="black"
          mt={45}
        >
          비밀번호 찾기
        </Heading>
        <Text fontSize="lg" fontWeight="regular" mt={5} mb={100}>
          아래의 정보를 입력하시면 비밀번호를 재설정할 수 있습니다.
        </Text>

        <Box
          as="form"
          w={{ base: "90%", md: "494px" }}
          mx="auto"
          textAlign="left"
          color="gray.600"
        >
          <VStack spacing={4}>
            <Input
              type="text"
              name="email"
              placeholder="이름"
              size="lg"
              focusBorderColor="blue.500"
              h="60px"
            />
            <Input
              type="password"
              name="password"
              placeholder="가입 휴대폰 번호"
              size="lg"
              focusBorderColor="blue.500"
              h="60px"
            />
            <Input
              type="password"
              name="password"
              placeholder="이메일 주소"
              size="lg"
              focusBorderColor="blue.500"
              h="60px"
            />
            <Button
              type="submit"
              w="full"
              h="80px"
              fontSize="2xl"
              fontWeight="medium"
              colorScheme="blue"
              mb={5}
            >
              확인
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default FindPassword;
