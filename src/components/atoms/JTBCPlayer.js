import React from "react";
import { Box, Text } from "@chakra-ui/react";
import YouTube from "react-youtube";

const VIDEO = () => {
  const videoId = "eC1Kbpraw3c"; // YouTube 비디오 ID
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: videoId,
      controls: 0,
      modestbranding: 0,
      showinfo: 0,
      rel: 0,
    },
  };

  return (
    <Box
      position="relative"
      width="full"
      height="full"
      py={{ base: 4, md: 12 }}
      bg="rgba(250, 229, 166, 0.8)"
    >
      <YouTube
        videoId={videoId}
        opts={opts}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <Box
        position="absolute"
        bottom={{ base: "5rem", md: "3rem", lg: "1.5rem" }}
        left={{ base: "0.5rem", md: "4rem", lg: "14rem" }}
        px={2}
        py={1}
        color="black"
        fontSize={{ base: "4px", md: "6px", lg: "8px" }}
      >
        <Text>출처: 채널: JTBC Brand Design</Text>
        <Text>
          영상제목: “함께 있지 않아도 함께 | 선한 영향력 (내레이션 배우 소유진)”
        </Text>
        <Text>업로드일: 2021. 11. 17, 영상길이: 0:52</Text>
      </Box>
    </Box>
  );
};

export default VIDEO;
