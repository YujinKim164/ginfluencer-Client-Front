import {
  Box,
  Text,
  Flex,
  useBreakpointValue,
  Image,
  Button,
  Link,
} from '@chakra-ui/react';
import ApplyPageHeader from '../../atoms/ApplyPageHeader';
import banner from '../../../assets/images/devote_banner.png';
import Stats from '../../atoms/Stats';
import card1 from '../../../assets/images/devote_card_img_1.png';
import card2 from '../../../assets/images/devote_card_img_2.png';
import card3 from '../../../assets/images/devote_card_img_3.png';
import ArrowRight from '../../../assets/svg/Arrow-right';

const Donate = ({ onDownload }) => {
  const textSize = useBreakpointValue({ base: 'sm', md: 'lg' });

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
          후원
        </Text>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight="semibold"
          lineHeight={{ base: 'tall', md: 'taller' }}
        >
          사단법인 선한영향력가게는 회비와 특별회비로 운영되며
          <br />
          후원금은 아이들을 위한 사업에 사용됩니다.
        </Text>
      </Box>
      <Stats />
      <Flex direction={{ base: 'column', md: 'row' }} gap={8} px={8} py={16}>
        {/* 첫 번째 카드 */}
        <Box
          flex="1"
          p={8}
          shadow="xl"
          rounded="2xl"
          bg="white"
          position="relative"
        >
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            단기 • 정기 후원
          </Text>
          <Text fontSize={textSize} mb={8}>
            한번이든, 정기적이든 모이면 큰 힘을 발휘합니다.
            <br />
            후원한 금액은 동무이 필요한 아동, 청소년들에게
            <br />
            의미있게 사용됩니다.
          </Text>
          {/* <Link href="/apply/step1" _hover={{ textDecoration: 'none' }}> */}
          <Button
            colorScheme="yellow"
            size="lg"
            rightIcon={<ArrowRight size={10} strokeWidth={1.8} />}
            rounded="full"
          >
            정기 후원하기
          </Button>
          {/* </Link> */}
          <Box h={48} />
          <Image
            src={card1}
            alt="Card 1"
            w={{ base: '36', md: '72' }}
            h={{ base: '28', md: '56' }}
            position="absolute"
            bottom={4}
            right={4}
          />
        </Box>
        {/* 두 번째 카드 */}
        <Box
          flex="1"
          p={8}
          shadow="xl"
          rounded="2xl"
          bg="white"
          position="relative"
        >
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            공헌
          </Text>
          <Text fontSize={textSize} mb={8}>
            기업이나 단체와 협업을 통해
            <br />
            소상공인과 아이들에게 선한 영향력이 펼쳐지는
            <br />
            세상을 만들어갑니다.
            <br />
            <br />
            금전이 아닌 직업, 재능, 현물 등으로
            <br />
            단체와 아이들을 위한 사업에 함께 할 수 있습니다.
          </Text>
          <Link
            href="https://pf.kakao.com/_vSXxob"
            _hover={{ textDecoration: 'none' }}
            target="_blank"
          >
            <Button
              colorScheme="yellow"
              size="lg"
              rightIcon={<ArrowRight size={10} strokeWidth={1.8} />}
              rounded="full"
            >
              후원 문의하기
            </Button>
          </Link>
          <Box h={48} />
          <Image
            src={card2}
            alt="Card 2"
            w={{ base: '36', md: '72' }}
            h={{ base: '28', md: '56' }}
            position="absolute"
            bottom={4}
            right={320}
          />
          <Image
            src={card3}
            alt="Card 3"
            w={{ base: '36', md: '72' }}
            h={{ base: '28', md: '56' }}
            objectFit="cover"
            position="absolute"
            bottom={4}
            right={4}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Donate;
