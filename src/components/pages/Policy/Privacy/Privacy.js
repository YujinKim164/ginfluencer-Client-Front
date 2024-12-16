import { PRIVACY_ITEMS } from "../../../../constants/privacyItems";
import { Box } from "@chakra-ui/react";
import ApplyTitle from "../../../atoms/ApplyTitle";
import PolicyContent from "../../../atoms/PolicyContent";
import TermsTitle from "../../../atoms/TermsTitle";

const Privacy = () => {
  return (
    <>
      <ApplyTitle title={"개인정보처리방침"} />
      <Box maxW="7xl" mx="auto" px={{ base: "6", lg: "8" }}>
        {PRIVACY_ITEMS.map((item) => (
          <Box key={item.id}>
            {item.bt && <TermsTitle text={item.bt} />}
            <PolicyContent item={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Privacy;
