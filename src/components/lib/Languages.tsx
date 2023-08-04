import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import Azerbaijan from "../../asserts/Azerbaijan.png";
import Turkey from "../../asserts/Turkey.png";
import Eng from "../../asserts/Eng.png";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import React from "react";

type ILang = "AZ" | "TR" | "EN";

const Languages = () => {
  const [lang, setLang] = React.useState<ILang>("AZ");

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={
              isOpen ? (
                <Icon as={BsChevronDown} color="skyblue" />
              ) : (
                <Icon as={BsChevronUp} color="skyblue" />
              )
            }
          >
            <>
              {lang === "AZ" ? (
                <>
                  <>
                    <Avatar
                      width="16px"
                      height="16px"
                      src={Azerbaijan}
                      marginEnd={10}
                    />
                  </>
                </>
              ) : (
                <></>
              )}

              {lang === "TR" ? (
                <>
                  <Avatar
                    width="18px"
                    height="18px"
                    src={Turkey}
                    marginEnd={10}
                  />
                </>
              ) : (
                <></>
              )}

              {lang === "EN" ? (
                <>
                  <Avatar width="16px" height="16px" src={Eng} marginEnd={10} />
                </>
              ) : (
                <></>
              )}
            </>

            <span style={{ color: "white" }}>{lang}</span>
          </MenuButton>
          <MenuList minW="70px">
            <MenuItem onClick={() => setLang("AZ")}>
              <span>AZ</span>
            </MenuItem>
            <MenuItem onClick={() => setLang("TR")}>
              <span>TR</span>
            </MenuItem>
            <MenuItem onClick={() => setLang("EN")}>
              <span>EN</span>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default Languages;
