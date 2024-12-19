import { StarIcon } from '@heroicons/react/16/solid';
import React, { useRef, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Select,
  Checkbox,
  Input,
  Textarea,
  Button,
  FormLabel,
  Icon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import DOMPurify from 'dompurify';
import axios from 'axios';
import FindPassword from '../FindPassword/FindPassword';

const AskForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSecret, setSecret] = useState(false);
  const [emailNotify, setEmailNotify] = useState(false);
  const [contentsLength, setContentsLength] = useState(0);
  const [fileName, setFileName] = useState('');
  const [isEmailValid, setEmailValid] = useState(true);
  const secretRef = useRef('');
  const emailRef = useRef('');

  const makeClearValue = (value) => {
    if (typeof value === 'string') {
      return DOMPurify.sanitize(value);
    }
    return value;
  };

  const handleSecretChange = () => {
    setSecret(!isSecret);

    if (!isSecret) {
      secretRef.current.focus();
    }
  };
  const handleEmailNotifyChange = () => {
    setEmailNotify(!emailNotify);

    if (!emailNotify) {
      emailRef.current.focus();
    }
  };
  const handleEmailChange = (e) => {
    setEmailValid(
      makeClearValue(String(e.target.value))
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  };

  const handleContentChange = (e) => {
    setContentsLength(e.target.value.length);
  };
  const handleFileChange = (e) => {
    setFileName('업로드 한 파일 : ' + makeClearValue(e.target.value));
  };
  const handleAskSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const secretYn = formData.getAll('secretYn');
    const notiYn = formData.getAll('notiYn');

    if (secretYn[0] === 'true') {
      data.secretYn = 'Y';
    } else {
      data.secretYn = 'N';
      data.secretPwd = '';
    }
    if (notiYn[0] === 'true') {
      data.notiYn = 'Y';
    } else {
      data.notiYn = 'N';
      data.notiEmail = '';
    }

    console.log(data);

    async function createAsk(params) {
      const form = new FormData();
      form.append('file', params.file);

      const image = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/all/image`,
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/all/inquiries`,
        {
          category: params.type,
          title: params.title,
          content: params.contents,
          isSecret: params.secretYn === 'Y' ? true : false,
          password: params.secretPwd || null,
          email: params.notiEmail || null,
          emailChecked: params.notiYn === 'Y' ? true : false,
          file: image.data || null,
        }
      );
      if (result.status === 200) {
        alert('1:1 문의를 작성하였습니다.');
        window.location.replace('/community/ask');
      }
    }
    createAsk(data);
  };

  return (
    <Box as="section" mx="200" my={0} textAlign="center" p={0}>
      <Flex direction="column" align="center" justify="center" p={0}>
        {/* 상단 제목 영역 */}
        <Box w="full" py="20" px={0} fontFamily="sans-serif">
          <Heading
            as="h2"
            fontSize="4xl"
            fontWeight="black"
            mb={2}
            textDecoration="underline"
            textUnderlineOffset="6px" // underline 스타일 조정
            className="underline-yellow" // 기존 Tailwind 클래스라면 Chakra로 대체 가능
          >
            커뮤니티
          </Heading>
        </Box>

        {/* 메뉴 탭: 공지사항 / 1:1문의 / FAQ */}
        <Box w={{ base: 'full', xl: '3/4' }} pb={10}>
          {/* 데스크톱 이상에서만 보이는 메뉴 */}
          <Flex display={{ base: 'none', xl: 'flex' }} listStyleType="none">
            <ChakraLink
              as={RouterLink}
              to="/community/notice"
              flex="1"
              border="1px solid"
              bg="gray.100"
              h="20"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xl"
              fontWeight="medium"
              color="gray.800"
              _hover={{
                textDecoration: 'underline',
                color: 'blue.600',
              }}
            >
              공지사항
            </ChakraLink>

            <ChakraLink
              as={RouterLink}
              to="/community/ask"
              flex="1"
              bg="blue.800"
              color="white"
              h="20"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xl"
              fontWeight="medium"
              _hover={{
                textDecoration: 'underline',
              }}
            >
              1:1문의
            </ChakraLink>

            <ChakraLink
              as={RouterLink}
              to="/community/faq"
              flex="1"
              border="1px solid"
              bg="gray.100"
              h="20"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xl"
              fontWeight="medium"
              color="gray.800"
              _hover={{
                textDecoration: 'underline',
                color: 'blue.600',
              }}
            >
              FAQ
            </ChakraLink>
          </Flex>

          {/* 모바일에서는 드롭다운 */}
          <Box
            display={{ base: 'flex', xl: 'none' }}
            cursor="pointer"
            position="relative"
          >
            <Flex
              align="center"
              justify="space-between"
              fontSize="xl"
              fontWeight="medium"
              w="full"
              border="1px solid"
              borderColor="blue.800"
              p={4}
              color="blue.800"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              1:1 문의
              {/* arrow-down 아이콘 */}
              <Box as="svg" h="5" w="5" color="gray.400" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </Box>
            </Flex>

            {dropdownOpen && (
              <>
                <ChakraLink
                  as={RouterLink}
                  to="/community/notice"
                  position="absolute"
                  left={0}
                  display="flex"
                  alignItems="center"
                  p={4}
                  fontWeight="medium"
                  fontSize="xl"
                  color="blue.800"
                  w="full"
                  transform="translateY(56px)"
                  bg="white"
                  border="1px solid"
                  borderColor="blue.800"
                  mt={1}
                >
                  공지
                </ChakraLink>
                <ChakraLink
                  as={RouterLink}
                  to="/community/faq"
                  position="absolute"
                  left={0}
                  display="flex"
                  alignItems="center"
                  p={4}
                  fontWeight="medium"
                  fontSize="xl"
                  color="blue.800"
                  w="full"
                  transform="translateY(112px)"
                  bg="white"
                  border="1px solid"
                  borderColor="blue.800"
                  mt={1}
                >
                  FAQ
                </ChakraLink>
              </>
            )}
          </Box>
        </Box>

        {/* 폼 영역 */}
        <Box w={{ base: 'full', xl: '3/4' }} mb="40">
          <Box
            as="form"
            name="insForm"
            id="insForm"
            onSubmit={(e) => handleAskSubmit(e)}
          >
            {/* 섹션 헤더 */}
            <Box
              fontSize={{ base: 'xl', xl: '2xl' }}
              py={9}
              borderTop="2px solid"
              borderColor="gray.500"
              bg="gray.100"
              borderBottom="1px solid"
              borderBottomColor="gray.200"
              mb={5}
              pl={{ base: 0, xl: 2 }}
            >
              <Text
                textAlign="start"
                color="gray.600"
                fontWeight="normal"
                pl={4}
              >
                상세항목 입력
              </Text>
            </Box>

            {/* 문의구분 / 비밀글 */}
            <Flex
              direction={{ base: 'column', xl: 'row' }}
              my={5}
              px={4}
              align={{ base: 'flex-start', xl: 'center' }}
            >
              <Box
                flexBasis={{ xl: '11rem' }}
                display="flex"
                alignItems="center"
              >
                <Text fontSize="xl" lineHeight="10">
                  문의구분
                </Text>
                <Icon as={StarIcon} w={3} h={3} ml={2} />
              </Box>

              <Flex flex="1" direction={{ base: 'column', xl: 'row' }}>
                <Box mt={{ base: 4, xl: 0 }} flex="1">
                  <Select
                    name="type"
                    required
                    w={{ base: 'full', xl: '15rem' }}
                    fontSize="xl"
                    borderColor="gray.300"
                    color="gray.600"
                  >
                    <option value="">== 선택 ==</option>
                    <option value="회원정보">회원정보</option>
                    <option value="선한가게신청">선한가게신청</option>
                    <option value="후원">후원</option>
                    <option value="기타">기타</option>
                    <option value="학생">학생</option>
                  </Select>
                </Box>

                <Flex
                  direction="column-reverse"
                  align="flex-end"
                  mt={{ base: 4, xl: 0 }}
                  w="full"
                >
                  <Checkbox
                    mt={2}
                    size="lg"
                    name="secretYn"
                    value={String(isSecret)}
                    onChange={handleSecretChange}
                  >
                    <Text fontSize="lg">비밀글</Text>
                  </Checkbox>

                  <Input
                    type="password"
                    name="secretPwd"
                    maxLength={15}
                    placeholder="비밀번호 입력"
                    borderColor="gray.300"
                    fontSize="xl"
                    mt={2}
                    w={{ base: 'full', xl: 'auto' }}
                    isReadOnly={!isSecret}
                    ref={secretRef}
                  />
                </Flex>
              </Flex>
            </Flex>

            {/* 제목 */}
            <Flex
              direction={{ base: 'column', xl: 'row' }}
              my={{ base: 4, xl: 10 }}
              px={4}
              align={{ base: 'flex-start', xl: 'center' }}
            >
              <Box
                flexBasis={{ xl: '11rem' }}
                display="flex"
                alignItems="center"
              >
                <Text fontSize="xl" lineHeight="10">
                  제목
                </Text>
                <Icon as={StarIcon} w={3} h={3} ml={2} />
              </Box>

              <Flex flex="1" mt={{ base: 4, xl: 0 }}>
                <Input
                  type="text"
                  name="title"
                  maxLength={20}
                  placeholder="제목을 입력해 주세요"
                  required
                  borderColor="gray.300"
                  fontSize="xl"
                  flex="1"
                />
              </Flex>
            </Flex>

            {/* 내용 */}
            <Flex
              direction={{ base: 'column', xl: 'row' }}
              my={{ base: 4, xl: 10 }}
              px={4}
            >
              <Box
                flexBasis={{ xl: '11rem' }}
                display="flex"
                alignItems="center"
              >
                <Text fontSize="xl" lineHeight="10">
                  내용
                </Text>
                <Icon as={StarIcon} w={3} h={3} ml={2} />
              </Box>

              <Flex flex="1" position="relative" mt={{ base: 4, xl: 0 }}>
                <Textarea
                  name="contents"
                  fontSize="xl"
                  borderColor="gray.300"
                  resize="none"
                  rows={10}
                  maxLength={1000}
                  onChange={(e) => handleContentChange(e)}
                  required
                />
                <Text
                  position="absolute"
                  fontSize="xl"
                  color="gray.500"
                  right={5}
                  bottom={2}
                >
                  <em>{contentsLength}</em> / 1000
                </Text>
              </Flex>
            </Flex>

            {/* 사진첨부 */}
            <Flex
              direction={{ base: 'column', xl: 'row' }}
              my={{ base: 4, xl: 10 }}
              px={4}
            >
              <Box
                flexBasis={{ xl: '11rem' }}
                display="flex"
                alignItems="center"
              >
                <Text fontSize="xl" lineHeight="10">
                  사진첨부
                </Text>
              </Box>
              <Flex direction="column" flex="1">
                <Flex
                  direction={{ base: 'column', xl: 'row' }}
                  align={{ base: 'flex-start', xl: 'center' }}
                  mt={{ base: 4, xl: 0 }}
                >
                  <FormLabel
                    htmlFor="imgFile"
                    bg="gray.200"
                    color="gray.600"
                    w={{ base: 'full', xl: 'auto' }}
                    display="inline-flex"
                    justifyContent="center"
                    alignItems="center"
                    h="14"
                    textAlign="center"
                    fontSize="lg"
                    px={16}
                    mr={{ base: 0, xl: 5 }}
                    _hover={{ cursor: 'pointer', bg: 'gray.300' }}
                  >
                    찾아보기
                  </FormLabel>
                  <Input
                    type="file"
                    name="file"
                    id="imgFile"
                    display="none"
                    accept=".gif, .jpg, .png"
                    onChange={(e) => handleFileChange(e)}
                  />
                  <Text color="blue.900" fontSize="sm" mt={{ base: 2, xl: 0 }}>
                    *이미지파일 JPG, PNG, GIF 500k 이하로 등록 가능합니다.
                  </Text>
                </Flex>

                <Text mt={2} fontSize="lg" color="gray.500" textAlign="left">
                  {fileName}
                </Text>
              </Flex>
            </Flex>

            {/* 답변이메일 알림 */}
            <Flex
              direction={{ base: 'column', xl: 'row' }}
              my={{ base: 4, xl: 10 }}
              px={4}
            >
              <Box
                flexBasis={{ xl: '11rem' }}
                display="flex"
                alignItems="center"
                justifyContent={{ base: 'center', xl: 'flex-start' }}
              >
                <Text fontSize="xl" lineHeight="10">
                  답변이메일 알림
                </Text>
              </Box>
              <Flex direction="column" flex="1" align="flex-start">
                <Flex
                  direction={{ base: 'column', xl: 'row' }}
                  w="full"
                  mb={4}
                  mt={{ base: 4, xl: 0 }}
                >
                  <Input
                    type="email"
                    name="notiEmail"
                    placeholder="example@example.com"
                    isReadOnly={!emailNotify}
                    borderColor="gray.300"
                    fontSize="xl"
                    flex="1"
                    ref={emailRef}
                    onChange={(e) => handleEmailChange(e)}
                  />

                  <Checkbox
                    ml={{ base: 0, xl: 4 }}
                    mt={{ base: 2, xl: 0 }}
                    size="lg"
                    name="notiYn"
                    value={String(emailNotify)}
                    onChange={handleEmailNotifyChange}
                  >
                    <Text fontSize="lg">이메일 수신</Text>
                  </Checkbox>
                </Flex>
                <Text fontSize={{ base: 'sm', xl: 'base' }} color="gray.600">
                  문의 내용에 대한 답변 알림 수신을 원치 않으시면 체크를
                  해제해주세요.
                </Text>
                {!isEmailValid && (
                  <Text
                    fontSize={{ base: 'sm', xl: 'lg' }}
                    color="red.500"
                    mt={2}
                    textAlign="left"
                  >
                    올바른 메일 형식이 아닙니다.
                  </Text>
                )}
              </Flex>
            </Flex>

            {/* 버튼들 */}
            <Flex justify="center" mt={{ base: 6, xl: 0 }}>
              <Button
                type="button"
                variant="outline"
                borderColor="blue.800"
                color="blue.800"
                fontSize="xl"
                mr={3}
                w="52"
                h="16"
                onClick={() => {
                  const userConfirmed =
                    window.confirm('작성중인 글을 취소하시겠습니까?');
                  if (userConfirmed) {
                    window.history.back(); // 뒤로가기
                  }
                }}
              >
                취소
              </Button>
              <Button
                type="submit"
                bg="blue.800"
                color="white"
                fontSize="xl"
                w="52"
                h="16"
                _hover={{ bg: 'blue.700' }}
              >
                접수하기
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AskForm;
