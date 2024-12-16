import { Box } from "@chakra-ui/react";
import ApplyTitle from "../../../atoms/ApplyTitle";
import Dividers from "../../../atoms/Dividers";
import PolicyContent from "../../../atoms/PolicyContent";
import TermsTitle from "../../../atoms/TermsTitle";

const Terms = ({ items }) => {
  return (
    <>
      <ApplyTitle title={"이용약관"} />
      <Box mx="auto" maxW="7xl" px={{ base: 6, lg: 8 }}>
        {items.map((item) => (
          <Box key={item.id}>
            {item.bt != null && <TermsTitle text={item.bt} />}
            <PolicyContent item={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Terms;
