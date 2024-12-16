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
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../../assets/images/header_logo.png";

const Footer = ({ handleClick }) => {
  const footerList = [
    {
      url: "/policy/terms",
      content: "이용약관",
      external: false,
    },
    {
      url: "/policy/privacy",
      content: "개인정보처리방침",
      external: false,
    },
    {
      url: "/policy/email",
      content: "이메일무단수집거부",
      external: false,
    },
    {
      url: "/community/ask",
      content: "1:1문의",
      external: false,
    },
    {
      url: "https://www.acrc.go.kr/",
      content: "국민권익위원회",
      external: true,
    },
    {
      url: "https://www.nts.go.kr/",
      content: "국세청",
      external: true,
    },
    {
      url: "https://www.mohw.go.kr/",
      content: "주무관청",
      external: true,
    },
  ];

  return (
    <Box
      bg="gray.50"
      fontSize="14px"
      lineHeight="15px"
      letterSpacing="-0.025em"
      paddingBottom={{ base: "21px", md: "15px" }}
      paddingLeft={{ base: "16px", md: "32px" }}
      paddingRight={{ base: "16px", md: "32px" }}
      left="0"
      width="100%"
      marginTop="auto"
    >
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
            <Box>
              <List styleType="none" padding="0" margin="0">
                {footerList.map(({ url, content, external }) => (
                  <ListItem
                    display="inline-block"
                    marginRight="10px"
                    key={content}
                  >
                    {external ? (
                      <Link
                        href={url}
                        isExternal
                        fontSize="17px"
                        lineHeight="24px"
                        letterSpacing="-0.025em"
                        fontWeight="700"
                        display="block"
                        marginRight="7px"
                        _hover={{ textDecoration: "underline" }}
                        color="black"
                        onClick={handleClick}
                      >
                        {content}
                      </Link>
                    ) : (
                      <Link
                        href={url}
                        fontSize="17px"
                        lineHeight="24px"
                        letterSpacing="-0.025em"
                        fontWeight="700"
                        display="block"
                        marginRight="7px"
                        _hover={{ textDecoration: "underline" }}
                        color="black"
                        onClick={handleClick}
                      >
                        {content}
                      </Link>
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
          </HStack>
          <RouterLink to="/" display="flex" justifyContent="center" mt={4}>
            <Image
              width="8rem"
              height="4rem"
              src={logo}
              alt="Footer Logo"
              objectFit="cover"
              cursor="pointer"
            />
          </RouterLink>
        </Flex>
      </Box>

      <Box marginBottom="8px">
        <Flex
          direction={{ base: "column", sm: "row" }}
          spacing={6}
          p
          justifyContent="space-between"
        >
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

      <Box marginBottom="12px" />
    </Box>
  );
};

export default Footer;
