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
    { id: 1, name: "누적회원수", value: 0, icon: ICON1 },
    { id: 2, name: "후원아동수", value: 0, icon: ICON2 },
    { id: 3, name: "후원금액", value: 0, icon: ICON3 },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // 누적회원 수 조회
        const nanumCountResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/all/donations`
        );

        // 후원아동 수 조회
        const sponsoredUserCountResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/all/donations/total-children-count`
        );

        // 후원금액 조회
        const donationAmountResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/all/donations`
        );

        setStats([
          {
            id: 1,
            name: "매장 회원수",
            value: nanumCountResponse.data.totalCount,
            icon: ICON1,
          },
          {
            id: 2,
            name: "후원 아동수",
            value: sponsoredUserCountResponse.data.totalChildrenCount,
            icon: ICON2,
          },
          {
            id: 3,
            name: "후원 금액",
            value: donationAmountResponse.data.totalDonation,
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
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex align="center" gap={4}>
                <Image src={stat.icon} alt="Icon" boxSize="24px" />
                <Text
                  fontSize={{ base: "md", md: "base" }}
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
                {stat.value.toLocaleString()}
                {stat.id === 3
                  ? "원"
                  : stat.id === 1 || stat.id === 2
                  ? "명"
                  : ""}
              </Heading>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
