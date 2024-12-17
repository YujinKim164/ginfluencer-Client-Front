import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  OrderedList,
  List,
  Heading,
  Link,
} from "@chakra-ui/react";

const Terms02 = () => {
  return (
    <Box maxW="4xl" mx="auto" p="5" color="gray.700">
      <Text mb="2">
        선한영향력가게(이하 ‘협회')는 개인정보보호법 제30조에 따라 정보주체의
        개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
        있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립·공개합니다.
      </Text>
      <Text mb="2">
        협회에서 운영하는 모든 사이트에도 동일하게 적용됩니다. 단, 사이트의
        서비스 특수성 및 전문성을 고려하여 상세한 개인정보 관리가 요구되는
        경우에는 별도의 개인정보 처리방침을 둘수 있습니다.
      </Text>
      <Heading as="h3" size="md" mt="5" mb="2">
        01.개인정보의 처리목적
      </Heading>
      <Text mb="2">
        협회는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
        개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
        변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등
        필요한 조치를 이행할 예정입니다.
      </Text>
      <UnorderedList>
        <Heading as="h4" size="sm" mt="3">
          온라인 회원 가입 및 관리
        </Heading>
        <Text mb="2">
          회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격
          유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용
          방지 각종 고지·통지, 고충처리 등을 목적으로 개인정보를 처리합니다.
        </Text>
        <Heading as="h4" size="sm" mt="3">
          민원사무처리
        </Heading>
        <Text mb="2">
          민원사항 확인, 사실 확인을 위한 연락·통지, 처리결과 통보 등의 목적으로
          개인정보를 처리합니다.
        </Text>
        <Heading as="h4" size="sm" mt="3">
          협회 사업 안내 및 홍보, 유관기관 사업 홍보를 위한 처리
        </Heading>
        <Text mb="2">협회 내에서 수행하는 모든 사업과 유관기관 사업.</Text>
        <Heading as="h4" size="sm" mt="3">
          세미나·포럼, 교육·연수, 교류회, 조사, 기타 사업 등 안내 및 후속 사업
          안내
        </Heading>
        <Heading as="h4" size="sm" mt="3">
          협회는 사업안내 및 홍보를 위한 정보 이외의 민감정보는 수집하지
          않습니다.
        </Heading>
      </UnorderedList>

      <Heading as="h3" size="md" mt="5" mb="2">
        02. 개인정보의 처리 및 보유기간
      </Heading>
      <UnorderedList>
        <Text mb="2">
          협회는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
          개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서
          개인정보를 처리·보유합니다.
        </Text>
        <Text>
          각각의 개인정보 처리 및 보유 기간은 다음과 같습니다. 협회는 법령의
          규정과 정보주체의 동의에 의해서만 개인정보를 수집·보유하며 그 보유기간
          및 이용기간은 이용자가 회원가입을 신청한 시점부터 해지하겠다는 의사
          표시를 하여 해지가 처리된 시점까지로 합니다. 사업참가자가 사업중지 및
          정보 수신 거부 시 개인정보를 파기합니다. 홈페이지 회원가입으로 수집된
          개인정보의 경우 회원탈퇴 시를 개인정보 파기 사유가 발생한 경우로
          판단하여 파기합니다.
        </Text>
      </UnorderedList>

      <Heading as="h3" size="md" mt="5" mb="2">
        03. 개인정보의 제3자 제공
      </Heading>
      <Text>협회는 개인정보를 제3자에게 제공하지 않습니다.</Text>

      <Heading as="h3" size="md" mt="5" mb="2">
        04. 정보주체의 권리·의무 및 행사방법
      </Heading>
      <OrderedList pl="4">
        <ListItem mb="2">
          <Heading as="h4" size="sm" mt="3">
            정보주체는 협회에 대해 언제든지 다음 각 호의 개인정보 보호 관련
            권리를 행사할 수 있습니다.
          </Heading>
          <UnorderedList pl="4">
            <ListItem>개인정보 열람요구</ListItem>
            <ListItem>오류 등이 있을 경우 정정 요구</ListItem>
            <ListItem>삭제 요구</ListItem>
            <ListItem>처리정지 요구</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem mb="2">
          <Heading as="h4" size="sm" mt="3">
            제1항에 따른 권리 행사는 협회에 대해 서면, 전화, 전자우편 등을
            통하여 하실 수 있으며 협회는 이에 대해 지체 없이 조치하겠습니다.
          </Heading>
        </ListItem>
        <ListItem mb="2">
          <Heading as="h4" size="sm" mt="3">
            정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한
            경우에는 협회는 정정 또는 삭제를 완료할 때까지 당해 개인정보를
            이용하거나 제공하지 않습니다.
          </Heading>
        </ListItem>
        <ListItem mb="2">
          <Heading as="h4" size="sm" mt="3">
            제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
            대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙
            별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
          </Heading>
        </ListItem>
        <ListItem>
          <Heading as="h4" size="sm" mt="3">
            정보주체는 개인정보 보호법 등 관계법령을 위반하여 협회가 처리하고
            있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는
            아니됩니다.
          </Heading>
        </ListItem>
      </OrderedList>

      <Heading as="h3" size="md" mt="5" mb="2">
        05. 처리하는 개인정보 항목
      </Heading>
      <Text mb="2">협회는 다음의 개인정보 항목을 처리하고 있습니다.</Text>
      <Heading as="h5" size="sm" mt="3">
        [온라인 회원사 가입 및 관리]
      </Heading>
      <Text mb="2">
        필수항목 : 이메일(ID), 이름, 비밀번호, 휴대폰 번호, 전화번호, 상호명,
        업종, 지역, 사업장주소, 사업자등록번호
      </Text>
      <OrderedList pl="4">
        <ListItem mb="2">
          인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어
          수집될 수 있습니다.
          <UnorderedList>
            <Text mb="2">IP주소, 쿠키, 서비스 이용기록, 방문기록 등</Text>
            <Text mb="2">
              협회는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’를
              운용합니다. 쿠키란 협회의 웹사이트를 운영하는데 이용되는 서버가
              귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터
              하드디스크에 저장됩니다.
            </Text>
            <Text mb="2">
              이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서
              이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를
              허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든
              쿠키의 저장을 거부할 수도 있습니다. 다만, 쿠키 설치를 거부하셨을
              경우 일부 서비스제공에 어려움이 있을 수 있습니다.
            </Text>
            <OrderedList mb="2">
              <Text>1. [도구] 메뉴에서 [인터넷 옵션]을 선택합니다.</Text>
              <Text> 2. [개인정보 탭]을 클릭합니다.</Text>
              <Text> 3. [개인정보취급 수준]을 설정하시면 됩니다.</Text>
            </OrderedList>
            <Text mb="2">
              협회는 사업안내 및 홍보를 위한 정보 이외의 민감정보는 수집하지
              않습니다.
            </Text>
          </UnorderedList>
        </ListItem>
      </OrderedList>

      <Heading as="h3" size="md" mt="5" mb="2">
        06. 개인정보의 파기
      </Heading>
      <OrderedList pl="4">
        <ListItem mb="2">
          협회는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
          불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
        </ListItem>
        <ListItem mb="2">
          정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이
          달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
          하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
          보관장소를 달리하여 보존합니다.
        </ListItem>
        <ListItem>
          개인정보 파기의 절차 및 방법은 다음과 같습니다.
          <UnorderedList mt="2">
            <Text fontWeight="bold">[파기절차]</Text>
            <UnorderedList pl="4">
              <ListItem mb="2">
                개인정보: 이용자가 입력한 정보는 목적 달성 후 지체 없이
                파기합니다.
              </ListItem>
              <ListItem mb="2">
                개인정보파일: 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등
                그 개인정보 파일이 불필요하게 되었을 때에는 개인정보의 처리가
                불필요한 것으로 인정되는 날로부터 지체 없이 파기합니다.
              </ListItem>
            </UnorderedList>
            <Text fontWeight="bold">[파기방법]</Text>
            <UnorderedList pl="4">
              <ListItem mb="2">
                전자적 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
                사용합니다.
              </ListItem>
              <ListItem mb="2">
                종이에 출력된 개인정보는 분쇄기로 분쇄하여 파기합니다.
              </ListItem>
            </UnorderedList>
          </UnorderedList>
        </ListItem>
      </OrderedList>
      <Heading as="h3" size="md" mt="5" mb="2">
        07. 개인정보 보호책임자
      </Heading>
      <OrderedList pl="4">
        <ListItem mb="2">
          협회는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
          관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이
          개인정보 보호책임자를 지정하고 있습니다.
        </ListItem>
        <UnorderedList>
          <ListItem mb="2">개인정보 관리 책임자 : 오인태 대표 </ListItem>
          <ListItem mb="2">
            개인정보 관리 담당자 : 김은아 사무국장 keahkey@gmail.com
          </ListItem>
        </UnorderedList>
        <ListItem mb="2">
          이용자는 협회의 서비스(또는 사업)을 이용하면서 발생한 모든 개인정보
          보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보
          보호책임자 및 담당부서로 문의하실 수 있습니다. 협회는 정보주체의
          문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
        </ListItem>
      </OrderedList>
      <Heading as="h3" size="md" mt="5" mb="2">
        08. 개인정보 처리방침의 변경에 관한 사항
      </Heading>
      <Text mb="2">이 개인정보 처리방침은 2021. 7. 15부터 적용됩니다.</Text>
      <Heading as="h3" size="md" mt="5" mb="2">
        09. 동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익
      </Heading>
      <Text mb="2">
        이용자는 협회에서 수집하는 개인정보에 대해 동의를 거부할 권리가 있으며
        동의 거부 시에는 협회 정보제공 서비스가 일부 제한됩니다.
      </Text>
      <Heading as="h3" size="md" mt="5" mb="2">
        10. 권익침해 구제방법
      </Heading>
      <UnorderedList>
        <Heading as="h4" size="sm" mt="3">
          개인정보분쟁 조정위원회
        </Heading>
        <OrderedList>
          <ListItem mb="2">
            홈페이지 : {""}
            <Link
              href="https://www.kopico.go.kr"
              isExternal
              textDecoration="underline"
              cursor="pointer"
            >
              https://www.kopico.go.kr
            </Link>
          </ListItem>
          <ListItem mb="2">전화번호 : (국번없이) 118 (내선2번)</ListItem>
        </OrderedList>
        <Heading as="h4" size="sm" mt="3">
          대검찰청 사이버범죄 수사단{" "}
        </Heading>
        <OrderedList>
          <ListItem mb="2">
            홈페이지 : {""}
            <Link
              href="http://www.spo.go.kr"
              isExternal
              textDecoration="underline"
              cursor="pointer"
            >
              http://www.spo.go.kr
            </Link>
          </ListItem>
          <ListItem mb="2">전화번호 : 02-3480-3582</ListItem>
        </OrderedList>
      </UnorderedList>
    </Box>
  );
};

export default Terms02;
