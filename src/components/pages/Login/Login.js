import React, { useState } from "react";
import {
  Box,
  Button,
  VStack,
  Input,
  HStack,
  Link,
  Icon,
  Flex,
  Heading,
} from "@chakra-ui/react";
import {
  MagnifyingGlassIcon,
  LockClosedIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // 로그인 처리 함수
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "1234") {
      alert("로그인 성공!");
      onLogin(); // 로그인 상태 업데이트
      navigate("/");
      console.log("로그인 성공-관리자 모드");
    } else {
      alert("이메일 또는 비밀번호를 확인해 주세요.");
    }
  };

  return (
    <Box w="full" overflow="hidden">
      {/* 메인 섹션 */}
      <Box mx="auto" textAlign="center" py={{ base: 10, md: 16 }}>
        <Heading
          as="h2"
          fontSize="4xl"
          letterSpacing="-1.5px"
          fontWeight="black"
          mt={45}
          mb={100}
        >
          로그인
        </Heading>

        {/* 로그인 폼 */}
        <Box
          as="form"
          w={{ base: "90%", md: "494px" }}
          mx="auto"
          textAlign="left"
          color="gray.600"
          onSubmit={handleLoginSubmit}
        >
          <VStack spacing={4}>
            <Input
              type="text"
              name="email"
              placeholder="이메일 주소"
              size="lg"
              focusBorderColor="blue.500"
              h="60px"
              value={email} // 상태를 value에 연결
              onChange={handleEmailChange} // 입력 값 변경 시 상태 업데이트
            />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              size="lg"
              focusBorderColor="blue.500"
              h="60px"
              value={password} // 상태를 value에 연결
              onChange={handlePasswordChange} // 입력 값 변경 시 상태 업데이트
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

        {/* 링크 섹션 */}
        <Box mb="60px">
          <HStack justify="center" spacing={6} mb={2}>
            <Link as={RouterLink} to="/store/findEmail" color="gray.500">
              <Flex align="center">
                <Icon as={MagnifyingGlassIcon} w={4} h={4} mr={2} />
                이메일 주소 찾기
              </Flex>
            </Link>
            <Link as={RouterLink} to="/store/findPwd" color="gray.500">
              <Flex align="center">
                <Icon as={LockClosedIcon} w={4} h={4} mr={2} />
                비밀번호 찾기
              </Flex>
            </Link>
          </HStack>

          <HStack justify="center">
            <Link as={RouterLink} to="/apply/step1" color="gray.500">
              <Flex align="center">
                <Icon as={InboxIcon} w={4} h={4} mr={2} />
                선한영향력가게 동행 신청
              </Flex>
            </Link>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
