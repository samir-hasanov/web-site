import { Box, Text } from "@chakra-ui/react";
import { format } from "date-fns";
const ShowTime = () => {
  const date = new Date();

  const formattedDate = format(date, "dd.MM.yyyy");

  return (
    <Box>
      <Text fontSize="14px" color="white">
        {formattedDate}:
      </Text>
    </Box>
  );
};

export default ShowTime;
