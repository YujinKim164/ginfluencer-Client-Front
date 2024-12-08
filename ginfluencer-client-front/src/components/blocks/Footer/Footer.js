import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg="gray.50"
      fontSize="14px"
      lineHeight="21px"
      letterSpacing="-0.025em"
      paddingY={{ base: "21px", md: "10px" }}
      paddingLeft={{ base: "16px", md: "32px" }}
      left="0"
      width="100%"
      zIndex="10"
    >
      {/* Footer Top Section */}
      <Box
        paddingTop="50px"
        paddingBottom="50px"
        marginBottom="12px"
        color="gray.100"
      >
        <Flex
          justify="space-between"
          align="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <HStack spacing="7px" wrap="wrap">
            {/* Footer Links */}
            <Box>
              <List styleType="none" padding="0" margin="0">
                <ListItem display="inline-block" marginRight="10px">
                  <Link
                    href="/policy/terms"
                    fontSize="17px"
                    lineHeight="24px"
                    letterSpacing="-0.025em"
                    fontWeight="700"
                    display="block"
                    marginRight="7px"
                    _hover={{ textDecoration: "underline" }}
                    color="black" // 글자색을 검은색으로 변경
                  >
                    이용약관
                  </Link>
                </ListItem>
                <ListItem display="inline-block" marginRight="10px">
                  <Link
                    href="/policy/privacy"
                    fontSize="17px"
                    lineHeight="24px"
                    letterSpacing="-0.025em"
                    fontWeight="700"
                    display="block"
                    marginRight="7px"
                    _hover={{ textDecoration: "underline" }}
                    color="black"
                  >
                    개인정보처리방침
                  </Link>
                </ListItem>
                <ListItem display="inline-block" marginRight="10px">
                  <Link
                    href="/policy/email"
                    fontSize="17px"
                    lineHeight="24px"
                    letterSpacing="-0.025em"
                    fontWeight="700"
                    display="block"
                    marginRight="7px"
                    _hover={{ textDecoration: "underline" }}
                    color="black"
                  >
                    이메일무단수집거부
                  </Link>
                </ListItem>
                <ListItem display="inline-block" marginRight="10px">
                  <Link
                    href="/community/ask"
                    fontSize="17px"
                    lineHeight="24px"
                    letterSpacing="-0.025em"
                    fontWeight="700"
                    display="block"
                    marginRight="7px"
                    _hover={{ textDecoration: "underline" }}
                    color="black"
                  >
                    1:1문의
                  </Link>
                </ListItem>
                <ListItem display="inline-block" marginRight="10px">
                  <Link
                    href="https://www.acrc.go.kr/"
                    isExternal
                    fontSize="17px"
                    lineHeight="24px"
                    letterSpacing="-0.025em"
                    fontWeight="700"
                    display="block"
                    marginRight="7px"
                    _hover={{ textDecoration: "underline" }}
                    color="black"
                  >
                    국민권익위원회
                  </Link>
                </ListItem>
                <ListItem display="inline-block" marginRight="10px">
                  <Link
                    href="https://www.nts.go.kr/"
                    isExternal
                    fontSize="17px"
                    lineHeight="24px"
                    letterSpacing="-0.025em"
                    fontWeight="700"
                    display="block"
                    marginRight="7px"
                    _hover={{ textDecoration: "underline" }}
                    color="black"
                  >
                    국세청
                  </Link>
                </ListItem>
                <ListItem display="inline-block" marginRight="0">
                  <Link
                    href="https://www.mohw.go.kr/"
                    isExternal
                    fontSize="17px"
                    lineHeight="24px"
                    letterSpacing="-0.025em"
                    fontWeight="700"
                    display="block"
                    marginRight="0"
                    _hover={{ textDecoration: "underline" }}
                    color="black"
                  >
                    주무관청
                  </Link>
                </ListItem>
              </List>
            </Box>
          </HStack>
        </Flex>
      </Box>

      {/* Footer Middle Section */}
      <Box marginBottom="8px">
        <Flex direction={{ base: "column", sm: "row" }} spacing={6}>
          <VStack spacing={2} align="start">
            <Text fontWeight="semibold">후원계좌</Text>
            <Text color="gray.500">
              • 정회원회비 입금: 우리은행 1005 604 451456 (사단법인
              선한영향력가게)
            </Text>
            <Text color="gray.500">
              • 후원금 (카카오): 우리은행 1005 404 677800 (사단법인
              선한영향력가게)
            </Text>
          </VStack>
          <VStack align="start" spacing={2}>
            <Text color="gray.500">
              사단법인 선한영향력가게 | 사업자등록번호 104-82-71462
            </Text>
            <Text color="gray.500">
              서울특별시 강남구 언주로111길 43 3층 | 전화 010-2375-0133 | 이메일{" "}
              goodimpact012@daum.net
            </Text>
            <Text color="gray.500">&copy; Goodshare All Rights Reserved</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Footer Bottom Section */}
      <Box marginBottom="12px" />
    </Box>
  );
};

export default Footer;
