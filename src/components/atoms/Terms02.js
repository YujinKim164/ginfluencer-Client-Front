import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  OrderedList,
  List,
  Heading,
} from "@chakra-ui/react";

const Terms02 = () => {
  return (
    <Box maxW="4xl" mx="auto" p="5" color="gray.700">
      <List>
        <ListItem>
          <Heading as="h3" size="lg" mt="5" mb="2">
            제 1장 총칙
          </Heading>
          <UnorderedList>
            <ListItem>
              <Heading as="h4" size="md" mt="3">
                제1조 (목적)
              </Heading>
              <Text>
                본 약관은 선한영향력가게 홈페이지 (이하 '당 홈페이지')가
                제공하는 모든 서비스(이하 '서비스')의 이용조건 및 절차,
                이용자/회원과 당 홈페이지의 권리, 의무, 책임사항과 기타 필요한
                사항을 규정함을 목적으로 합니다.
              </Text>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Heading as="h4" size="md" mt="3">
            제2조 (약관의 효력과 변경)
          </Heading>
          <OrderedList listStyleType="decimal" pl="4">
            <ListItem mb="2">
              당 홈페이지는 이용자/회원이 본 약관 내용에 동의하는 것을 조건으로
              이용자/회원에 한하여 서비스를 제공할 것이며, 이용자/회원이 본
              약관의 내용에 동의하는 경우, 당 홈페이지의 서비스 제공 행위 및
              이용자/회원의 서비스 사용 행위에는 본 약관이 우선적으로
              적용됩니다.
            </ListItem>
            <ListItem mb="2">
              당 홈페이지는 합리적 이유가 있는 경우 약관을 변경할 수 있으며,
              변경된 약관은 서비스 화면에 게재하거나 기타 방법으로 이용자에게
              공지함으로써 효력을 발생합니다.
            </ListItem>
            <ListItem>
              회원은 변경된 약관에 동의하지 않을 경우, 서비스 이용을 중단하고
              탈퇴할 수 있습니다. 약관이 변경된 이후에도 계속적으로 서비스를
              이용하는 경우에는 회원이 약관의 변경 사항에 동의한 것으로 봅니다.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Heading as="h4" size="md" mt="3">
            제3조 (약관 외 준칙)
          </Heading>
          <OrderedList listStyleType="decimal" pl="4">
            <ListItem mb="2">
              본 약관에 명시되지 않은 사항이 국내 관계법령에 규정되어 있을
              경우에는 그 규정에 따릅니다.
            </ListItem>
            <ListItem>
              본 약관 이외에 개별 서비스에 대한 세부적인 사항을 정할 수 있으며,
              그 내용은 개별 이용 동의 절차에 따릅니다.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Heading as="h4" size="md" mt="3">
            제4조 (용어의 정의)
          </Heading>
          <Text mb="2">
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
          </Text>
          <OrderedList listStyleType="decimal" pl="4">
            <ListItem mb="2">
              이용자 : 당 홈페이지에 접속하여 본 약관에 따라 선한영향력가게(이하
              ‘협회’)가 제공하는 콘텐츠를 이용하는 회원 및 방문자.
            </ListItem>
            <ListItem mb="2">
              가입 : 본 약관에 따라 당 홈페이지의 서비스를 받기 위해 가입을 하는
              행위.
            </ListItem>
            <ListItem mb="2">
              회원 : 협회가 제공하는 서비스를 받기 위해 정회원이 된 자.
            </ListItem>
            <ListItem mb="2">
              종료 : 회원이 서비스를 이용 후 홈페이지를 종료하는 행위.
            </ListItem>
            <ListItem>
              본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관 및
              이용규정에서 정의합니다.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Heading as="h3" size="lg" mt="5" mb="2">
            제2장 서비스 제공 및 이용
          </Heading>
          <UnorderedList>
            <ListItem>
              <Heading as="h4" size="md" mt="3">
                제5조 (이용계약의 성립)
              </Heading>
              <UnorderedList listStyleType="decimal" pl="4">
                <ListItem mb="2">
                  이용계약은 신청자가 온라인으로 당 홈페이지에서 제공하는 소정의
                  가입신청 양식에서 요구하는 사항을 기록하여 가입을 완료하는
                  것으로 성립됩니다.
                </ListItem>
                <ListItem mb="2">
                  당 홈페이지는 다음 각 호에 해당하는 이용계약에 대하여는 가입을
                  취소할 수 있습니다.
                  <OrderedList listStyleType="decimal" pl="4">
                    <ListItem mb="2">
                      다른 사람의 명의를 사용하여 신청하였을 때
                    </ListItem>
                    <ListItem mb="2">
                      이용 계약 신청서의 내용을 허위로 기재하였거나 신청하였을
                      때
                    </ListItem>
                    <ListItem mb="2">
                      다른 사람의 당 홈페이지 서비스 이용을 방해하거나 그 정보를
                      도용하는 등의 행위를 하였을 때
                    </ListItem>
                    <ListItem mb="2">
                      당 홈페이지를 이용하여 법령과 본 약관이 금지하는 행위를
                      하는 경우
                    </ListItem>
                    <ListItem mb="2">
                      기타 당 홈페이지가 정한 이용신청요건이 미비 되었을 때
                    </ListItem>
                  </OrderedList>
                </ListItem>
                <ListItem mb="2">
                  당 홈페이지는 다음 각 항에 해당하는 경우 그 사유가 해소될
                  때까지 이용계약 성립을 유보할 수 있습니다.
                  <OrderedList listStyleType="decimal" pl="4">
                    <ListItem mb="2">
                      서비스 관련 제반 용량이 부족한 경우
                    </ListItem>
                    <ListItem mb="2">기술상 장애 사유가 있는 경우</ListItem>
                  </OrderedList>
                </ListItem>
                <ListItem>
                  당 홈페이지가 제공하는 서비스는 협회가 개발하거나 다른
                  기관과의 협의 등을 통해 제공하는 일체의 서비스이며, 그 내용을
                  변경하여 제공할 수 있습니다.
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </ListItem>
      </List>
    </Box>
  );
};

export default Terms02;
