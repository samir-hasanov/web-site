import React from "react";

import { Icon } from "@chakra-ui/react";

const imageMap: { [key: string]: any } = {};

interface Props {
  icon: string;
}
const IconType: React.FC<Props> = ({ icon }) => {
  const IconComponent = imageMap[icon];

  if (!IconComponent) {
    console.warn(`Icon '${icon}' not found.`);
    return null;
  }

  return <Icon as={IconComponent} width="34px" height="34px" />;
};

export default IconType;
