import { Text } from "@chakra-ui/react";

const TermsTitle = ({ text }) => {
  return (
    <Text fontWeight="extrabold" fontSize="2xl" mb={16}>
      {text}
    </Text>
  );
};

export default TermsTitle;
