import { Icon } from "@chakra-ui/react";

const ArrowRight = ({ hover, size = 6, strokeWidth = 2 }) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      boxSize={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      transition="all 0.2s"
      _hover={{ color: hover }}
      mr={4} // 마진 조정
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </Icon>
  );
};

export default ArrowRight;
