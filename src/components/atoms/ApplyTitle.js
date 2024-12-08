import { Box, Text } from "@chakra-ui/react";

const ApplyTitle = ({ title }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={{ base: "10rem", sm: "9rem" }}
      mt={{ md: "32" }}
      mb={{ md: "32" }}
    >
      <Text
        as="h2"
        fontSize={{ base: "xl", md: "5xl" }}
        fontWeight="bold"
        textDecoration="underline"
        textDecorationColor="yellow.400"
        w="fit-content"
        h="fit-content"
      >
        {title}
      </Text>
    </Box>
  );
};

export default ApplyTitle;
