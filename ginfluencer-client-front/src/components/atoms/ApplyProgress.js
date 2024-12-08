import { useEffect, useState } from "react";
import { Box, Flex, Text, HStack, VStack, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const ApplyProgress = ({ title, semiTitle, step }) => {
  const [progress, setProgress] = useState([false, false, false]);

  useEffect(() => {
    const newProgress = [...progress];
    newProgress[step - 1] = true; // Set the current step as active
    setProgress(newProgress);
  }, [step]);

  return (
    <Box
      w="full"
      mb={{ base: 8, md: 12 }}
      borderBottom="2px solid"
      borderColor="gray.500"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        gap={4}
      >
        {/* Progress Step Indicators */}
        <HStack
          spacing={4}
          align="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <HStack
            spacing={1}
            align="center"
            fontWeight="bold"
            fontSize={{ base: "sm", md: "lg" }}
          >
            <Text color={progress[0] ? "teal.500" : "gray.500"}>
              01 약관동의
            </Text>
            <Icon
              as={ArrowForwardIcon}
              boxSize={4}
              color={progress[0] ? "teal.500" : "gray.500"}
            />
          </HStack>

          <HStack
            spacing={1}
            align="center"
            fontWeight="bold"
            fontSize={{ base: "sm", md: "lg" }}
          >
            <Text color={progress[1] ? "teal.500" : "gray.500"}>
              02 정보입력
            </Text>
            <Icon
              as={ArrowForwardIcon}
              boxSize={4}
              color={progress[1] ? "teal.500" : "gray.500"}
            />
          </HStack>

          <HStack
            spacing={1}
            align="center"
            fontWeight="bold"
            fontSize={{ base: "sm", md: "lg" }}
          >
            <Text color={progress[2] ? "teal.500" : "gray.500"}>
              03 신청완료
            </Text>
          </HStack>
        </HStack>

        {/* Title and Sub-title */}
        <VStack spacing={1} align="flex-start" mt={{ base: 4, md: 0 }}>
          <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
            {semiTitle}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ApplyProgress;
