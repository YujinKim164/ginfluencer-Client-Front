import {
  Box,
  Image,
  Text,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Modal from "./Modal";
import IMG1 from "../../assets/images/modal_img_1.png";
import IMG2 from "../../assets/images/modal_img_2.png";
import IMG3 from "../../assets/images/modal_img_3.png";
import MAIN_IMG1 from "../../assets/images/bizinfo_img_1.png";
import MAIN_IMG2 from "../../assets/images/bizinfo_img_2.png";
import MAIN_IMG3 from "../../assets/images/bizinfo_img_3.png";

const posts = [
  {
    id: 1,
    title: "매장동행사업",
    href: "/test",
    description: "아동 지역생활권 매장이 직접 후원",
    imageUrl: MAIN_IMG1,
  },
  {
    id: 2,
    title: "같이동행사업",
    href: "#",
    description: "보육시설, 지역아동센터 등 지원",
    imageUrl: MAIN_IMG2,
  },
  {
    id: 3,
    title: "기업과 함께하는 사회공헌 프로그램",
    href: "#",
    description: "특별한 외식사업, 재료구입비 지원",
    imageUrl: MAIN_IMG3,
  },
];

const content1 = [
  {
    img: IMG1,
    title: "매장동행사업",
    describe: [
      "아동 지역에 있는 선한영향력가게 매장에서 판매하는 음식 및 서비스를 직접 제공하는 나눔사업입니다.",
      "아동 대상 불가업종을 제외하고 다양한 업종이 참여 가능합니다.",
    ],
    items: [
      {
        subTitle: "",
        contents: [
          "현재 선한영향력가게는 음식점, 커피전문점, 교육학원, 체력단련, 직업교육, 미용, 헬스, 꽃, 과일, 안경, 병원, 약국, 펜션, 판매, 도소매, 제조 등의 업종들이 참여하고 있습니다.",
        ],
      },
    ],
  },
  {
    img: IMG2,
    title: "같이동행사업",
    describe: [],
    items: [
      {
        subTitle: "푸드트럭",
        contents: [
          "스테이크 도시락, 타코, 에이드 등 아이들이 좋아하지만 시설에서 접하기 어려운 음식으로 구성",
          "푸드트럭이라는 새로운 문화 생활의 기회를 제공",
        ],
      },
      {
        subTitle: "지역나눔활동",
        contents: [
          "전국 지역아동센터와 그룹홈 등 찾아가는 지역 단위 나눔행사 후원 캠페인 후원금과 지역 회원사 동참으로 더 커지는 나눔을 실천합니다.",
        ],
      },
    ],
  },
  {
    img: IMG3,
    title: "기업동행사업",
    describe: [
      "소상공인을 위한 사업을 하니 아이들에게 후원 됩니다.",
      "아이들을 후원하니 소상공인 매출이 증가됩니다.",
    ],
    items: [],
  },
];

export default function NewCardNews({
  showModal,
  closeModal,
  onModal,
  onLink,
}) {
  return (
    <Box bg="white" py={{ base: 4, md: 12 }}>
      <Box maxW="7xl" mx="auto" px={{ base: 6, lg: 8 }}>
        <Box
          mx="auto"
          mt={{ base: 8, lg: 16 }}
          gridTemplateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
          gap={{ base: 8, lg: 20 }}
          display="grid"
        >
          {posts.map((post, idx) => (
            <Box key={post.id} data-id={idx}>
              <Modal
                show={showModal[idx]}
                onClose={closeModal}
                content={content1[idx]}
                onLink={() => onLink(post.id)}
                id={idx}
                onModal={onModal}
              />
              <Box position="relative" onClick={onModal}>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  borderRadius="2xl"
                  objectFit="cover"
                  w="full"
                  h="auto"
                  aspectRatio={{ base: "16/9", lg: "3/2" }}
                />
                <Box
                  position="absolute"
                  top="0"
                  right="0"
                  bottom="0"
                  left="0"
                  borderRadius="2xl"
                  borderWidth="1px"
                  borderColor="gray.200"
                />
                <Box position="absolute" right="4" bottom="4">
                  <IconButton
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width="16px"
                        height="16px"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    }
                    bg="white"
                    borderRadius="full"
                    size="sm"
                    _hover={{ bg: "gray.200" }}
                    onClick={() => onModal(idx)}
                  />
                </Box>
              </Box>
              <Box maxW="xl" mt="3">
                <Heading
                  as="h3"
                  size="lg"
                  fontWeight="semibold"
                  color="gray.900"
                >
                  <Text fontSize="18px" onClick={onModal}>
                    {post.title}
                  </Text>
                </Heading>
                <Text mt="2" fontSize="sm" color="gray.600" noOfLines={3}>
                  {post.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
