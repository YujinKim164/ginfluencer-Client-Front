import { useEffect, useState } from "react";
import { Box, Flex, Text, HStack, VStack, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ArrowDropRight from "./../../assets/svg/arrow-drop-right";

const ApplyProgress = ({ step }) => {
  const steps = ["약관동의", "기본정보", "신청완료"];

  return (
    <Box
      w="80%"
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
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="bold"
          letterSpacing="-1px"
        >
          {steps[step - 1]}
        </Text>
        <HStack
          spacing={4}
          align="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          {steps.map((title, index) => (
            <HStack
              key={index}
              spacing={1}
              align="center"
              fontWeight="bold"
              fontSize={{ base: "sm", md: "lg" }}
            >
              <Text
                color={
                  step === index + 1
                    ? "teal.600" // 현재 단계
                    : "gray.500" // 이전 단계
                }
              >
                {`0${index + 1} ${title}`}
              </Text>
              {index < steps.length - 1 && (
                <Icon
                  as={ArrowDropRight}
                  boxSize={4}
                  color={
                    step === index + 1
                      ? "teal.600" // 현재 단계
                      : "gray.500" // 이전 단계
                  }
                />
              )}
            </HStack>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default ApplyProgress;
