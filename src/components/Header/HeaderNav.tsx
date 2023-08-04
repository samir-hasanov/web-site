import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import ShowTime from "../lib/ShowTime";
import ValutaConverter from "../lib/ValutaConverter";
import Languages from "../lib/Languages";

const HeaderNav = () => {
  return (
    <Flex
      height="64.38px"
      bg="#1B324D"
      paddingLeft="39px"
      paddingRight="39px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex>
        <Icon as={LocationOnIcon} width="15px" h="15px" color="#ffff" />
        <Text
          fontFamily="Helvetica"
          fontWeight="700"
          fontSize="13px"
          color="#ffff"
        >
          Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025
        </Text>
      </Flex>
      <Flex
        justifyItems="center"
        justifyContent="space-between"
        alignItems="center"
        gap={5}
      >
        <Icon as={WhatsAppIcon} width="15px" h="15px" color="#ffff" />

        <Text
          fontFamily="Helvetica"
          fontSize="13px"
          fontWeight="400"
          color="#ffff"
        >
          +99450 7774779
        </Text>
        <Text
          fontFamily="Helvetica"
          fontSize="13px"
          fontWeight="400"
          color="#ffff"
          marginLeft={10}
        >
          +99450 7774779
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyItems="center"
        justifyContent="space-between"
        columnGap={5}
      >
        <Icon as={AiOutlineMail} width="15px" h="15px" color="#ffff" />
        <Text
          fontFamily="Helvetica"
          fontSize="13px"
          fontWeight="400"
          color="#ffff"
        >
          info@netprogroup.az
        </Text>
      </Flex>
      <Flex display="flex" justifyContent="space-between" columnGap={4}>
        <Box
          borderWidth="1px"
          borderRadius="2px"
          width="25px"
          height="25px"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Icon as={BiLogoFacebook} width="15px" h="15px" color="#D7D7D7" />
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="2px"
          width="25px"
          height="25px"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Icon as={BiLogoLinkedin} width="15px" h="15px" color="#D7D7D7" />
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="2px"
          width="25px"
          height="25px"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Icon as={BiLogoInstagram} width="15px" h="15px" color="#D7D7D7" />
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="2px"
          width="25px"
          height="25px"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Icon as={WhatsAppIcon} width="15px" h="15px" color="#D7D7D7" />
        </Box>
      </Flex>
      <Flex columnGap={4}>
        <Flex>
          <ShowTime />
        </Flex>
        <Flex>
          <ValutaConverter />
        </Flex>
      </Flex>
      <Flex>
        <Languages />
      </Flex>
    </Flex>
  );
};

export default HeaderNav;
