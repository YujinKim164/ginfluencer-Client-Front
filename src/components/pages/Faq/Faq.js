import { Box, Text, Flex, Button, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ApplyPageHeader from '../../atoms/ApplyPageHeader';
import banner from '../../../assets/images/community_notice_banner.png';
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [curPages, setCurPages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handlePaginationNumber = (e) => {
    setCurPages(e.target.innerText - 1);
    e.target.className =
      'bg-sky-800 text-white inline-flex justify-center items-center w-12 h-12 hover:cursor-pointer';
  };

  const handlePaginationPrev = (e) => {
    if (curPages > 0) {
      setCurPages(curPages - 1);
    }
  };

  const handlePaginationNext = () => {
    if (curPages < totalPages - 1) {
      setCurPages(curPages + 1);
    } else {
      alert('마지막 페이지 입니다.');
    }
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/all/faqs`
      );
      setFaqs(result.data);
      // setTotalPages(result['page']['totalPages']);
    }
    fetchData();
  }, []);

  return (
    <Box p={{ base: 4, md: 8 }} mb={{ base: 8, md: 16 }}>
      <ApplyPageHeader IMG={banner} />
      <Box
        mx={{ base: 4, md: 10 }}
        mt={{ base: 8, md: 12 }}
        mb={{ base: 12, md: 16 }}
      >
        <Text
          fontSize={{ base: '2xl', md: '5xl' }}
          fontWeight="semibold"
          mb={4}
        >
          커뮤니티
        </Text>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight="semibold"
          lineHeight={{ base: 'tall', md: 'taller' }}
        >
          선한영향력가게의 다양한 정보를 공유하고 알려 드립니다.
        </Text>

        <Box boxSizing="border-box" display="block" fontWeight="bold" w="full">
          <Flex
            justify={{ base: 'center', md: 'flex-end' }}
            mt={{ base: 16, md: 4 }}
            mb={4}
          >
            <Box
              as="a"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              bg="white"
              borderWidth="2px"
              borderColor="white"
              borderRadius="lg"
              transition="all 0.3s"
              px={{ base: 4, md: 6 }}
              py={{ base: 2, md: 3 }}
              fontSize={{ base: 'sm', md: 'lg' }}
              lineHeight={{ base: 'normal', md: 'tall' }}
              fontWeight={{ base: 'bold', md: 'medium' }}
              borderStyle="solid"
            />
          </Flex>

          {/* PC 메뉴 */}
          <Box
            as="ul"
            display={{ base: 'none', xl: 'flex' }}
            listStyleType="none"
            w="full"
          >
            <Box
              as={RouterLink}
              to="/community/notice"
              fontSize="xl"
              w="1/6"
              bg="gray.100"
              h="20"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{ color: 'sky.800' }}
              borderStyle="solid"
              borderColor="sky.800"
              borderBottomWidth="2px"
              px={16}
              py={8}
              color="black"
            >
              공지
            </Box>
            <Box
              as={RouterLink}
              to="/community/ask"
              fontSize="xl"
              w="1/6"
              bg="gray.100"
              h="20"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{ color: 'sky.800' }}
              borderStyle="solid"
              borderColor="sky.400"
              borderBottomWidth="2px"
              px={16}
              py={8}
              color="black"
            >
              1:1 문의
            </Box>
            <Box
              fontSize="xl"
              w="1/6"
              bg="white"
              h="20"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderStyle="solid"
              borderTop="2px"
              borderX="2px"
              px={16}
              py={8}
              color="sky.800"
            >
              FAQ
            </Box>
            <Box
              flex="1"
              borderBottomWidth="2px"
              borderStyle="solid"
              borderColor="sky.800"
            />
          </Box>

          {/* 모바일 드롭다운 */}
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
              FAQ
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
                  to="/community/notice"
                  position="absolute"
                  left={0}
                  display="flex"
                  alignItems="center"
                  p={4}
                  fontWeight="medium"
                  fontSize="xl"
                  color="sky.800"
                  w="full"
                  transform="translateY(7rem)"
                  bg="white"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="sky.800"
                  mt={1}
                >
                  공지
                </Box>
                <Box
                  as={RouterLink}
                  to="/community/ask"
                  position="absolute"
                  left={0}
                  display="flex"
                  alignItems="center"
                  p={4}
                  fontWeight="medium"
                  fontSize="xl"
                  color="sky.800"
                  w="full"
                  transform="translateY(3.5rem)"
                  bg="white"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="sky.800"
                  mt={1}
                >
                  1:1 문의
                </Box>
              </>
            )}
          </Box>
        </Box>

        <Box fontFamily="sans" w="full">
          <Box
            mb={10}
            borderBottomWidth="1px"
            borderBottomColor="black"
            borderStyle="solid"
          >
            <Box as="ul">
              {faqs?.map((item) => (
                <Box
                  as={RouterLink}
                  to={`/community/faq/view/${item.id}`}
                  key={item.id}
                  display={{ base: 'block', xl: 'flex' }}
                  textAlign={{ base: 'left', xl: 'center' }}
                  w="full"
                  alignItems="center"
                  py={6}
                  borderBottomWidth="1px"
                  borderBottomColor="gray.300"
                  borderStyle="solid"
                >
                  <Flex w="60" mb={{ base: 4, xl: 0 }}>
                    <Flex
                      rounded="md"
                      bg="blue.50"
                      w="24"
                      h="12"
                      fontSize="sm"
                      fontWeight="semibold"
                      color="blue.900"
                      align="center"
                      justify="center"
                    >
                      FAQ
                    </Flex>
                  </Flex>
                  <Box
                    mb={{ base: 4, xl: 0 }}
                    flexGrow={1}
                    textAlign="left"
                    fontWeight="semibold"
                    fontSize="lg"
                    transition="color 0.2s"
                    _hover={{ color: 'sky.700' }}
                  >
                    <Box>{item.title}</Box>
                  </Box>
                  <Box w="60" color="gray.500">
                    {item.createdDate.slice(0, 10)}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          display={{ base: 'flex', xl: 'block' }}
          textAlign="center"
          fontSize="xl"
          pb={48}
        >
          <Box display={{ base: 'inline-flex', xl: 'inline-block' }}>
            <Button
              variant="ghost"
              display="inline-flex"
              justifyContent="center"
              alignItems="center"
              w="12"
              h="12"
              onClick={handlePaginationPrev}
            >
              <Icon as={ChevronLeftIcon} color="gray.500" />
            </Button>
            <Box
              as="ul"
              display="inline-flex"
              mx={{ xl: 10 }}
              listStyleType="none"
            >
              {[...Array(totalPages).keys()]
                .map((i) => i + 1)
                .slice(
                  Math.floor(curPages / 10) * 10,
                  Math.floor(curPages / 10) * 10 + 10
                )
                ?.map((idx) => (
                  <Box as="li" display="inline-flex" key={idx}>
                    <Box
                      onClick={handlePaginationNumber}
                      bg={idx === curPages + 1 ? 'blue.800' : 'transparent'}
                      color={idx === curPages + 1 ? 'white' : 'gray.500'}
                      display="inline-flex"
                      justifyContent="center"
                      alignItems="center"
                      w="12"
                      h="12"
                      cursor="pointer"
                      _hover={{ color: 'sky.700' }}
                    >
                      {idx}
                    </Box>
                  </Box>
                ))}
            </Box>
            <Button
              variant="ghost"
              display="inline-flex"
              justifyContent="center"
              alignItems="center"
              w="12"
              h="12"
              onClick={handlePaginationNext}
            >
              <Icon as={ChevronRightIcon} color="gray.500" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
