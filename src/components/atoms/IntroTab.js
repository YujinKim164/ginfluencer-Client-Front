import { useEffect, useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import {
  Box,
  Select,
  Flex,
  Text,
  Tab,
  TabList,
  Tabs,
  useBreakpointValue,
} from "@chakra-ui/react";

const initialTabs = [
  { name: "의장인사말", href: "section1", current: true },
  { name: "CI", href: "CI", current: false },
  { name: "연혁", href: "연혁", current: false },
  { name: "찾아오시는 길", href: "찾아오시는 길", current: false },
];

export default function IntroTab() {
  const [tabs, setTabs] = useState(initialTabs);
  const isMobile = useBreakpointValue({ base: true, sm: false });

  const handleSelectTab = (e) => {
    const { value } = e.target;
    const selectedTab = tabs.find((tab) => tab.name === value);

    setTabs((prev) =>
      prev.map((item) =>
        item.name === value
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );

    // 해당 섹션으로 스크롤 이동
    scroller.scrollTo(selectedTab.href, {
      smooth: true,
      duration: 500,
      offset: -70, // 헤더 고려
    });
  };

  const handleTabClick = (name, href) => {
    setTabs((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );

    // 해당 섹션으로 스크롤 이동
    scroller.scrollTo(href, {
      smooth: true,
      duration: 500,
      offset: -70, // 헤더 고려
    });
  };

  return (
    <Box>
      {isMobile ? (
        <Select onChange={handleSelectTab} focusBorderColor="black" size="lg">
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </Select>
      ) : (
        <Tabs variant="unstyled" align="center">
          <TabList borderBottom="2px solid #E2E8F0">
            {tabs.map((tab) => (
              <Flex key={tab.name}>
                <Tab
                  fontWeight="bold"
                  fontSize="xl"
                  color={tab.current ? "black" : "gray.500"}
                  borderBottom={
                    tab.current ? "2px solid black" : "2px solid gray.400"
                  }
                  onClick={() => handleTabClick(tab.name, tab.href)}
                  _hover={{
                    color: "gray.700",
                    borderBottom: "2px solid gray.600",
                  }}
                  _selected={{
                    color: "black",
                  }}
                >
                  {tab.name}
                </Tab>
              </Flex>
            ))}
          </TabList>
        </Tabs>
      )}
    </Box>
  );
}
