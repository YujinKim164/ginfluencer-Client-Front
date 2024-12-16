import { EMAIL_ITEMS } from "../../../../constants/emailItems";
import ApplyTitle from "../../../atoms/ApplyTitle";
import PolicyContent from "../../../atoms/PolicyContent";
import { Box, Container } from "@chakra-ui/react";

const Email = () => {
  return (
    <>
      <ApplyTitle title={"이메일무단수집거부"} />
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
        {EMAIL_ITEMS.map((item, index) => (
          <Box key={index} mb={6}>
            <PolicyContent item={item} />
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Email;
