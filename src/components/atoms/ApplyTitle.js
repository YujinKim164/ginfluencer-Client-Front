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
        textDecorationColor="#fef08a"
        textDecorationThickness="16px"
        textUnderlineOffset="-1px"
        w="fit-content"
        h="fit-content"
        letterSpacing="-3px"
      >
        {title}
      </Text>
    </Box>
  );
};

export default ApplyTitle;
