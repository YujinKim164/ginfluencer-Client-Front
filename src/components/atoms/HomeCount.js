import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import ICON1 from "../../assets/images/count_icon_1.png";
import ICON2 from "../../assets/images/count_icon_2.png";
import ICON3 from "../../assets/images/count_icon_3.png";

export default function HomeCount() {
  const [stats, setStats] = useState([
    { id: 1, name: "누적회원수", value: "0명", icon: ICON1 },
    { id: 2, name: "후원아동수", value: "0명", icon: ICON2 },
    { id: 3, name: "후원금액", value: "0원", icon: ICON3 },
  ]);

  useEffect(() => {
    const API_KEY = "Basic " + process.env.REACT_APP_NAVI_KEY;

    const fetchStats = async () => {
      try {
        // 나눔 수 조회
        const nanumCountResponse = await axios.get(
          process.env.REACT_APP_NAVI_API_URL + "nanum-count",
          {
            headers: {
              Authorization: API_KEY,
              "Content-Type": "application/json",
            },
          }
        );

        // 후원아동 수 조회
        const sponsoredUserCountResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/all/donations`
        );

        // 후원금액 조회
        const donationAmountResponse = await axios.get(
          process.env.REACT_APP_NAVI_API_URL + "donation-amount",
          {
            headers: {
              Authorization: API_KEY,
              "Content-Type": "application/json",
            },
          }
        );

        setStats([
          {
            id: 1,
            name: "누적회원수",
            value: `${nanumCountResponse.data.result}명`,
            icon: ICON1,
          },
          {
            id: 2,
            name: "후원아동수",
            value: `${sponsoredUserCountResponse.data.totalChildrenCount}명`,
            icon: ICON2,
          },
          {
            id: 3,
            name: "후원금액",
            value: `${donationAmountResponse.data.result}원`,
            icon: ICON3,
          },
        ]);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <Box bg="yellow.100" py={{ base: 8, sm: 12 }} rounded="3xl" mt={12}>
      <Box maxW="full" px={4} mx="auto">
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
          gap={4}
          textAlign="center"
        >
          {stats.map((stat) => (
            <GridItem
              key={stat.id}
              bg="white"
              rounded="md"
              p={4}
              maxW="full"
              mx="auto"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex align="center" gap={2}>
                <Image src={stat.icon} alt="Icon" boxSize="24px" />
                <Text
                  fontSize={{ base: "xs", md: "base" }}
                  fontWeight="semibold"
                  color="gray.600"
                >
                  {stat.name}
                </Text>
              </Flex>
              <Heading
                fontSize={{ base: "xl", sm: "3xl" }}
                fontWeight="semibold"
                color="gray.900"
                lineHeight="shorter"
              >
                {stat.value}
              </Heading>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
