import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { formatCurrency } from "utils/formatter";

interface InfoCardProps {
  label: string;
  value: number;
  tooltip?: string;
}
const InfoCard: React.FC<InfoCardProps> = ({ label, value, tooltip }) => {
  return (
    <Box
      bg={"grey.100"}
      border="1px"
      w="100%"
      p={4}
      borderColor="grey.200"
      borderRadius={"md"}
      minWidth={248}
    >
      <Flex justifyContent="space-between">
        <Text
          color="grey.800"
          fontWeight="bold"
          fontSize="14px"
          lineHeight="20px"
          whiteSpace="nowrap"
        >
          {label}
        </Text>
        <InfoOutlineIcon color="grey.500" ml={5} />
      </Flex>
      <Text
        color="purple.900"
        fontWeight="bold"
        fontSize="x-large"
        lineHeight="5"
        mt="3.5"
      >
        {formatCurrency(value)}
      </Text>
    </Box>
  );
};

export default InfoCard;
