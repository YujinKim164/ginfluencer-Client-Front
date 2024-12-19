import React, { useEffect, useState } from "react";
import { Grid, Image, Flex, Text } from "@chakra-ui/react";
import icon1 from "../../assets/images/devote_icon_1.png";
import icon2 from "../../assets/images/devote_icon_2.png";
import icon3 from "../../assets/images/devote_icon_3.png";
import axios from "axios";

export default function Stats() {
  const [stats, setStats] = useState([
    {
      id: 1,
      name: "누적금액",
      value: 0,
      finalValue: 0,
      icon: icon1,
      scale: "원",
    },
    {
      id: 2,
      name: "기부자",
      value: 0,
      finalValue: 0,
      icon: icon2,
      scale: "명",
    },
    {
      id: 3,
      name: "사용금액",
      value: 0,
      finalValue: 0,
      icon: icon3,
      scale: "원",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/all/donations`
        );

        setStats([
          {
            id: 1,
            name: "누적금액",
            value: 0,
            finalValue: response.data.totalDonation,
            icon: icon1,
            scale: "원",
          },
          {
            id: 2,
            name: "기부자",
            value: 0,
            finalValue: response.data.totalCount,
            icon: icon2,
            scale: "명",
          },
          {
            id: 3,
            name: "사용금액",
            value: 0,
            finalValue: response.data.totalSpend,
            icon: icon3,
            scale: "원",
          },
        ]);
      } catch (error) {
        console.error("Error fetching donation data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          if (stat.value < stat.finalValue) {
            const increment = Math.ceil((stat.finalValue - stat.value) / 10);
            return { ...stat, value: stat.value + increment };
          }
          return stat;
        })
      );
    }, 10);

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap={4}
      pt={{ base: 2, md: 4 }}
      pb={{ base: 2, md: 4 }}
      bg="rgba(243, 244, 246, 0.8)"
      borderRadius="xl"
      height="auto"
    >
      {stats.map((stat) => (
        <Flex
          key={stat.id}
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-evenly"
          borderLeftWidth={{ sm: stat.id !== 1 ? "2px" : "0" }}
          borderLeftStyle="solid"
          borderLeftColor="#e5e7eb"
        >
          <Image
            src={stat.icon}
            boxSize={12}
            alt={stat.name}
            mb={{ base: 4, sm: 0 }}
          />
          <Flex
            direction="column"
            textAlign={{ base: "center", sm: "left" }}
            gap={2}
          >
            <Text
              fontSize={{ base: "xs", md: "lg" }}
              fontWeight="semibold"
              lineHeight="tight"
            >
              {stat.name}
            </Text>
            <Text
              fontSize={{ base: "sm", md: "3xl" }}
              fontWeight="semibold"
              lineHeight="short"
              color="rgb(8, 47, 73)"
            >
              {stat.value.toLocaleString()}
              {stat.scale}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Grid>
  );
}
