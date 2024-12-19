import { Fragment } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import nextIcon from '../../assets/images/detail.png';
import nextIcon2 from '../../assets/images/go_basket_button.png';
import xButton from '../../assets/images/X_button.png';

export default function HomeContent({
  onlyContent,
  content,
  onLink,
  id,
  onModal,
  closeModal,
}) {
  return (
    <>
      <Flex bg="white" px={{ base: 4, lg: 8 }} mt={6} justify="center">
        <Flex
          direction="row"
          mx="auto"
          textBase="base"
          align="center"
          justify="center"
          w="full"
        >
          <Heading
            as="h1"
            mt={2}
            ml={2}
            fontSize={{ base: 'xl', sm: '4xl' }}
            fontWeight="bold"
            textAlign="center"
            color="gray.900"
            flex="1"
          >
            {content.title}
          </Heading>
          <Box onClick={closeModal} cursor="pointer">
            <Image src={xButton} alt="Close Button" />
          </Box>
        </Flex>
      </Flex>

      <Box
        bg="white"
        px={{ base: 6, lg: 8 }}
        mb={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box maxW="full" textBase="sm" color="gray.700" mx="auto">
          <Box mt={8} maxW="2xl" mx="auto">
            <Text fontWeight="bold">
              {content.describe.map((title, index) => (
                <Fragment key={index}>
                  {title}
                  <br />
                </Fragment>
              ))}
            </Text>

            {content.items.map((item, index) => (
              <Box key={index} mb={6}>
                <Text fontWeight="bold" color="gray.900" mb={3}>
                  {item.subTitle}
                </Text>
                {item.contents.map((contentItem, itemIndex) => (
                  <Text key={itemIndex} color="gray.700">
                    {contentItem}
                  </Text>
                ))}
              </Box>
            ))}
          </Box>

          <Flex justify="center" mt={10} cursor="pointer">
            <Image
              src={id != null ? nextIcon : null}
              onClick={onLink}
              w={{ base: '24', md: id != null ? '36' : '56' }}
            />
          </Flex>

          <Flex justify="center" mt={10}>
            <Image
              src={content.img}
              objectFit="cover"
              w="full"
              maxW={{ base: 'xs', sm: 'md', md: 'lg', lg: 'xl' }}
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
}
