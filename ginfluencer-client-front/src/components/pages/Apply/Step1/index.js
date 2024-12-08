import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Box, Checkbox, Button, Alert, AlertIcon } from "@chakra-ui/react";
import Step1 from "./Step1";

const Index = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState([false, false, false]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const allChecked = checkedItems.slice(1).every((item) => item === true);
    setIsAllChecked(allChecked);
  }, [checkedItems]);

  const handleCheckBox = (e, box) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[box] = e.target.checked;
    setCheckedItems(newCheckedItems);

    if (box === 0) {
      setCheckedItems(newCheckedItems.map(() => e.target.checked));
    }
  };

  const nextTo = () => {
    if (isAllChecked) {
      // navigate("/apply/step2");
      navigate("/apply/step3");

      window.scrollTo(0, 0);
    } else {
      setAlertVisible(true);
      const firstUncheckedIndex =
        checkedItems.slice(1).findIndex((item) => !item) + 1;
      if (firstUncheckedIndex !== -1) {
        document
          .getElementById(`checkbox-${firstUncheckedIndex}`)
          .scrollIntoView({
            behavior: "smooth",
          });
      }
    }
  };

  return (
    <Box p={4}>
      {alertVisible && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          필수 항목에 동의해주세요.
        </Alert>
      )}

      <Step1
        nextTo={nextTo}
        handleCheckBox={handleCheckBox}
        isAllChecked={isAllChecked}
        checkBox1={checkedItems[1]}
        checkBox2={checkedItems[2]}
      />

      <Box mt={4}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => handleCheckBox(e, 0)}
          ref={(el) => (checkboxesRef.current[0] = el)}
        >
          전체 동의
        </Checkbox>

        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => handleCheckBox(e, 1)}
          ref={(el) => (checkboxesRef.current[1] = el)}
        >
          항목 1 동의
        </Checkbox>

        <Checkbox
          isChecked={checkedItems[2]}
          onChange={(e) => handleCheckBox(e, 2)}
          ref={(el) => (checkboxesRef.current[2] = el)}
        >
          항목 2 동의
        </Checkbox>
      </Box>

      <Button
        mt={4}
        colorScheme="teal"
        onClick={nextTo}
        isDisabled={!isAllChecked}
      >
        다음
      </Button>
    </Box>
  );
};

export default Index;
