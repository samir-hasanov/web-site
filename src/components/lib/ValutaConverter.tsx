import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  Button,
  Icon,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import axios from "axios";
export interface IInfo {
  timestamp: number;
  rate: number;
}

export interface IQuery {
  from: string;
  to: string;
  amount: number;
}

export interface ICurrency {
  success?: true;
  query?: IQuery;
  info?: IInfo;
  date?: Date;
  result?: number;
}

const ValutaConverter = () => {
  const [data, setData] = useState<ICurrency>({});
  const [country, setCaountry] = useState<string>("AZN");

  var myHeaders = new Headers();
  myHeaders.append("apikey", "7FZgHwX9MvCJsDMo3GcauALFoifhdDqc");

  React.useEffect(() => {
    const covert = async () => {
      await axios
        .get<ICurrency>(
          "https://api.apilayer.com/exchangerates_data/convert?to=" +
            `${country}` +
            "&from=USD&amount=1",

          {
            timeout: 3000,
            headers: {
              apikey: "7FZgHwX9MvCJsDMo3GcauALFoifhdDqc",
            },
          }
        )
        .then((response) => setData(response.data));
    };

    covert();
  }, [country]);

  return (
    <>
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
              <span style={{ color: "white" }}>
                1 USD - {data.result?.toFixed(4)} {country}
              </span>
            </MenuButton>
            <MenuList>
              <MenuItem minH="48px" onClick={() => setCaountry("AZN")}>
                <span>AZN</span>
              </MenuItem>
              <MenuItem minH="48px" onClick={() => setCaountry("TRY")}>
                <span>TRY</span>
              </MenuItem>
              <MenuItem minH="40px" onClick={() => setCaountry("EUR")}>
                <span>EUR</span>
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
};

export default ValutaConverter;
