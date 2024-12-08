import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import ArrowRight from "../../assets/svg/Arrow-right";
import { scrollTop } from "../../util/scroll";

const Post = ({ idx, type, title }) => {
  const data = { "01": "notice", "02": "notice", "03": "ask" };

  return (
    <Link to={`/community/${data[type]}/view/${idx}`} onClick={scrollTop}>
      <Flex
        as="li"
        borderBottom="1px solid"
        borderColor="gray.200"
        alignItems="center"
        justify="space-between"
        _hover={{ bg: "gray.100" }}
      >
        <Flex
          p={{ base: 3, md: 6 }}
          gap={4}
          alignItems="center"
          w={{ base: "5/6", md: "full" }}
        >
          <Box
            bg="blue.50"
            borderRadius="md"
            w={{ base: "12", md: "16" }}
            h={{ base: "6", md: "8" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="semibold"
            color="blue.900"
          >
            {type === "01" ? "공지사항" : "뉴스"}
          </Box>
          <Text
            fontSize={{ base: "xs", md: "lg" }}
            fontWeight="medium"
            noOfLines={1}
            flex="1"
          >
            {title}
          </Text>
        </Flex>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          w={{ base: "1/6", md: "1/12" }}
          p={{ base: 0, md: 6 }}
        >
          <ArrowRight size={10} strokeWidth={1.5} />
        </Box>
      </Flex>
    </Link>
  );
};

export default Post;
