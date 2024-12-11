import { Button, Box, Image, Flex } from "@chakra-ui/react";
import { saveAs } from "file-saver";
import AI from "../../../assets/images/intro_banner.png";
import PNG from "../../../assets/images/intro_CI.png";
import BANNER1 from "../../../assets/images/intro_banner_1.png";

const Index = () => {
  const handleDownload = (e) => {
    const { name } = e.target;
    if (name === "AI 다운로드") {
      saveAs(AI, "선한영량력가게_AI.png");
    } else if (name === "png 다운로드") {
      saveAs(PNG, "선한영량력가게_CI.png");
    } else if (name === "배너 다운로드") {
      saveAs(BANNER1, "선한영량력가게_배너.png");
    }
    // else if (name === "보고서 다운로드") {
    //   saveAs(logo, "선한영량려가게_로고.png");
    // }
  };

  return <Introduction onDownload={handleDownload} />;
};

export default Index;
