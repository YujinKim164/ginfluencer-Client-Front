import { Box } from "@chakra-ui/react";

const items = [
  { id: 1, content: "sidsidd" },

  // More items...
];

export default function Dividers() {
  return <Box borderBottom="2px" borderColor="gray.200" py={6} width="100%" />;
}
