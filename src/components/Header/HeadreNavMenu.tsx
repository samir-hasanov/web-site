import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Icon,
  Text,
  Flex,
  Link,
  MenuDivider,
} from "@chakra-ui/react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Vector from "../../asserts/Vector.png";
import Frame from "../../asserts/Frame.png";
import { NavLink } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const HeadreNavMenu = () => {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" columnGap="50px">
        <Link as={NavLink} fontWeight="600">
          <Icon as={PlayArrowIcon} /> Əsas səhifə
        </Link>
        <Link as={NavLink} fontWeight="600">
          <Icon as={PlayArrowIcon} /> Haqqımızda
        </Link>
        <Menu>
          {({ isOpen }) => (
            <>
              {" "}
              <MenuButton
                as={Button}
                rightIcon={
                  isOpen ? (
                    <Icon as={BsChevronDown} />
                  ) : (
                    <Icon as={BsChevronUp} />
                  )
                }
              >
                <Icon as={PlayArrowIcon} />{" "}
                <Text as="span" fontWeight="600">
                  Məhsullar
                </Text>
              </MenuButton>
              <MenuList
                width="150px"
                height="130px"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                bg="white"
                py="2"
                px="4"
                borderRadius="md"
              >
                <MenuItem minH="48px" marginLeft="10px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src={Vector}
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <Text as="span" fontWeight="700">
                    VERTIV
                  </Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem minH="40px" marginLeft="10px">
                  <Text as="span" fontWeight="100" color="tomato">
                    MAKELSAN
                  </Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem minH="40px" marginLeft="10px">
                  <Image
                    width="98px"
                    height="24px"
                    borderRadius="full"
                    src={Frame}
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                </MenuItem>
                <MenuDivider />
              </MenuList>
            </>
          )}
        </Menu>
        <Link as={NavLink} fontWeight="600">
          <Icon as={PlayArrowIcon} /> Xidmətlər və Həllər
        </Link>
        <Link as={NavLink} fontWeight="600">
          <Icon as={PlayArrowIcon} /> Əlaqə
        </Link>
      </Flex>
    </>
  );
};

export default HeadreNavMenu;
