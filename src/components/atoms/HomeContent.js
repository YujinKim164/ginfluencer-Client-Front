import { Fragment } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import nextIcon from "../../assets/images/detail.png";
import nextIcon2 from "../../assets/images/go_basket_button.png";
import xButton from "../../assets/images/X_button.png";

export default function HomeContent({
  onlyContent,
  content,
  onLink,
  id,
  onModal,
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
            fontSize={{ base: "xl", sm: "4xl" }}
            fontWeight="bold"
            textAlign="center"
            color="gray.900"
            flex="1"
          >
            {content.title}
          </Heading>
          <Box onClick={onModal} cursor="pointer">
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

            <UnorderedList
              spacing={3}
              maxW="xl"
              color="gray.600"
              fontSize="sm"
              mt={4}
            >
              {content.items.map((item, index) => (
                <ListItem
                  key={index}
                  display="flex"
                  gap={3}
                  alignItems="center"
                >
                  <Text>
                    <strong className="font-semibold text-gray-900">
                      {item.subTitle}
                    </strong>
                    <br />
                    {item.contents.map((contentItem, itemIndex) => (
                      <Fragment key={itemIndex}>
                        {contentItem}
                        <br />
                      </Fragment>
                    ))}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>

          <Flex justify="center" mt={10} cursor="pointer">
            <Image
              src={id != null ? nextIcon : nextIcon2}
              onClick={onLink}
              w={{ base: "24", md: id != null ? "36" : "56" }}
            />
          </Flex>

          <Flex justify="center" mt={10}>
            <Image
              src={content.img}
              objectFit="cover"
              w="full"
              maxW={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
}
