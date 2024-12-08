import { Box, Flex, Image } from "@chakra-ui/react";

export default function ApplyPageHeader({ IMG }) {
  return (
    <Flex justify="center">
      <Box
        position="relative"
        overflow="hidden"
        w="full"
        h={{ base: "100px", md: "400px" }}
        borderRadius="3xl"
      >
        <Image
          alt=""
          src={IMG}
          position="absolute"
          inset="0"
          zIndex="-1"
          h="full"
          w="full"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
}
