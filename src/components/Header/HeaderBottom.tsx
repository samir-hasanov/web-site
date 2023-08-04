import { Flex, Icon, Image, Link } from "@chakra-ui/react";
import Logo from "../../asserts/Logo.png";
import { BsSearch } from "react-icons/bs";
import PageContainer from "../lib/PageContainer";
import HeadreNavMenu from "./HeadreNavMenu";

const HeaderBottom = () => {
  return (
    <PageContainer>
      <Flex
        height="120px"
        justifyContent="space-between"
        alignItems="center"
        columnGap="100px"
      >
        <Flex>
          <Image src={Logo} />
        </Flex>
        <Flex>
          <HeadreNavMenu />
        </Flex>
        <Flex>
          <Icon as={BsSearch} />
        </Flex>
      </Flex>
    </PageContainer>
  );
};

export default HeaderBottom;
