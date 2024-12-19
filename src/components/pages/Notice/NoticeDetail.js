import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Spinner,
} from '@chakra-ui/react';
import axios from 'axios';

const NoticeDetail = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [noticeContents, setNoticeContents] = useState({});
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true); // 페치 시작 전 로딩 표시
        const result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/all/announcements/${id}`
        );

        // 파일 관련 처리
        const domain = 'https://www.선한영향력가게.com';
        const serverFiles =
          result.data.announcementFiles.map((file) => ({
            ...file,
            link: '/file/notice/' + file.originalFileName,
            state: 'stable',
            type: 'server',
          })) || [];
        setFiles(serverFiles);

        // 이미지 주소(domain) 덧붙여서 교체
        const updatedContents = result.data.content.replace(
          /<img src="\/file\/notice\//g,
          `<img src="${domain}/file/notice/`
        );

        // noticeContents를 업데이트
        const updatedData = { ...result.data, content: updatedContents };
        setNoticeContents(updatedData);
      } catch (error) {
        console.error('Failed to fetch notice:', error);
      } finally {
        setIsLoading(false); // 데이터 페치가 끝나면 로딩 false
      }
    }
    fetchData();
  }, [id]);

  // HTML 문자열을 dangerouslySetInnerHTML로 렌더링하기 위한 함수
  const createMarkup = (html) => {
    return { __html: html };
  };

  // 로딩 중일 때 표시할 UI
  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="50vh">
        <Spinner size="xl" thickness="4px" />
      </Flex>
    );
  }

  // 실제 렌더링할 내용
  return (
    <Box as="section" mx="auto" my={0} textAlign="center" p={0}>
      <Flex direction="column" align="center" justify="center" px={200}>
        {/* 상단 제목 영역 */}
        <Box
          boxSizing="border-box"
          w="full"
          display="block"
          py="20"
          px={0}
          fontFamily="sans-serif"
        >
          <Heading
            as="h2"
            display="block"
            fontSize="4xl"
            fontWeight="black"
            mb={2}
          >
            커뮤니티
          </Heading>
        </Box>

        {/* 탭 메뉴 (공지사항, 1:1문의, FAQ) */}
        <Box
          boxSizing="border-box"
          display="block"
          pb={10}
          w={{ base: 'full', xl: '3/4' }}
          fontFamily="sans-serif"
        >
          {/* 데스크톱용 메뉴 */}
          <Flex
            as="ul"
            display={{ base: 'none', xl: 'flex' }}
            listStyleType="none"
            w="full"
          >
            <Box
              as={RouterLink}
              to="/community/notice"
              flexGrow={1}
              w="1/2"
              h="20"
              bg="#365CA5"
              color="white"
              fontWeight="medium"
              fontSize="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              공지사항
            </Box>
            <Box
              as={RouterLink}
              to="/community/ask"
              flexGrow={1}
              w="1/2"
              h="20"
              bg="gray.100"
              borderWidth="1px"
              borderRightWidth="0"
              borderStyle="solid"
              borderColor="gray.200"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="medium"
              fontSize="xl"
              color="black"
              _hover={{ color: 'sky.800' }}
            >
              1:1문의
            </Box>
            <Box
              as={RouterLink}
              to="/community/faq"
              flexGrow={1}
              w="1/2"
              h="20"
              bg="gray.100"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="gray.200"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="medium"
              fontSize="xl"
              color="black"
              _hover={{ color: 'sky.800' }}
            >
              FAQ
            </Box>
          </Flex>

          {/* 모바일용 드롭다운 메뉴 */}
          <Box
            display={{ base: 'flex', xl: 'none' }}
            cursor="pointer"
            position="relative"
          >
            <Flex
              align="center"
              justify="space-between"
              fontWeight="medium"
              fontSize="xl"
              w="full"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="sky.800"
              color="sky.800"
              p={4}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              공지
              <Icon w={8}>
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Icon>
            </Flex>
            {dropdownOpen && (
              <>
                <Box
                  as={RouterLink}
                  to="/community/ask"
                  position="absolute"
                  left={0}
                  p={4}
                  fontWeight="medium"
                  fontSize="xl"
                  color="sky.800"
                  display="flex"
                  w="full"
                  transform="translateY(3.5rem)"
                  bg="white"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="sky.800"
                  mt={1}
                >
                  1:1문의
                </Box>
                <Box
                  as={RouterLink}
                  to="/community/faq"
                  position="absolute"
                  left={0}
                  p={4}
                  fontWeight="medium"
                  fontSize="xl"
                  color="sky.800"
                  display="flex"
                  w="full"
                  transform="translateY(7rem)"
                  bg="white"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="sky.800"
                  mt={1}
                >
                  FAQ
                </Box>
              </>
            )}
          </Box>
        </Box>

        {/* 본문 영역 */}
        <Box py={10} fontFamily="sans-serif" w={{ base: 'full', xl: '3/4' }}>
          <Box
            mb={10}
            borderTopWidth="1px"
            borderBottomWidth="1px"
            borderTopColor="black"
            borderBottomColor="black"
            borderStyle="solid"
          >
            <Flex
              direction={{ base: 'column', xl: 'row' }}
              w="full"
              textAlign="center"
              alignItems="center"
              py={6}
              borderBottomWidth="1px"
              borderBottomColor="gray.300"
              borderStyle="solid"
              h="28"
            >
              <Heading
                as="h2"
                fontSize="2xl"
                fontWeight="bold"
                flexGrow={1}
                textAlign={{ base: 'left', xl: 'left' }}
                mb={{ base: 2, xl: 0 }}
              >
                {noticeContents.title}
              </Heading>
              <Text
                fontSize="lg"
                color="gray.500"
                fontWeight="medium"
                whiteSpace="nowrap"
              >
                {noticeContents.createdDate.slice(0, 10)}
              </Text>
            </Flex>
            <Box
              textAlign="start"
              fontSize="lg"
              py={20}
              fontWeight="medium"
              dangerouslySetInnerHTML={createMarkup(noticeContents.content)}
            />
          </Box>

          {/* 첨부파일 리스트 */}
          {files.length === 0 ? null : (
            <Flex direction="column" w="full" alignItems="flex-start">
              <Heading as="h2" fontSize="xl" fontWeight="bold" mb={4}>
                첨부파일
              </Heading>
              <Flex direction="column" gap={2}>
                {files.map((file, index) => (
                  <Flex
                    key={index}
                    align="center"
                    fontSize="sm"
                    color="gray.700"
                  >
                    <Box
                      as="a"
                      href={file.link}
                      download={file.originalFileName}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {file.originalFileName}
                    </Box>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          )}

          {/* 목록 버튼 */}
          <Button
            type="button"
            variant="outline"
            borderColor="gray.200"
            color="gray.600"
            mt={4}
            fontSize={{ base: 'xs', lg: '2xl' }}
            w={{ base: '4rem', lg: '8rem' }}
            h={{ base: '2rem', lg: '4rem' }}
            float="right"
            onClick={() => navigate(-1)}
          >
            목록
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default NoticeDetail;
