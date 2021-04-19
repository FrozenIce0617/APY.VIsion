import React from "react";
import { Button, IconButton } from "@chakra-ui/button";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/table";
import EthLogo from "assets/svg/logo/eth.svg";
import ChainLogo from "assets/svg/logo/link.svg";

const CurrentPoolRow = () => (
  <Tr>
    <Td>
      <Flex alignItems="center">
        <Box zIndex={1} borderRadius="50%">
          <ChainLogo />
        </Box>
        <Box borderRadius="50%" ml={-3}>
          <EthLogo />
        </Box>
        <Box ml={2}>
          <Text as="b" color={"purple.700"}>
            LINK/ETH
          </Text>
          <Text color={"grey.500"} fontSize="xs" lineHeight="1rem">
            Sushiswap
          </Text>
        </Box>
      </Flex>
    </Td>
    <Td>
      <HStack justifyContent="space-between">
        <Box textAlign="center">
          <Text fontSize="sm" color="grey.800" lineHeight="short">
            400 <ArrowForwardIcon /> 460 LINK
          </Text>
          <Text fontSize="xs" color="green.500" fontWeight="bold">
            +59.99 LINK (+$745.75)
          </Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="sm" color="grey.800" lineHeight="short">
            400 <ArrowForwardIcon /> 460 LINK
          </Text>
          <Text fontSize="xs" color="red.700" fontWeight="bold">
            -1.19 WETH (-$678.59)
          </Text>
        </Box>
      </HStack>
    </Td>
    <Td>
      <Box textAlign="center">
        <Text fontSize="sm" color="grey.800" lineHeight="short">
          2.98 SUSHI
        </Text>
        <Text fontSize="xs" color="green.500" fontWeight="bold">
          (+$48.78)
        </Text>
      </Box>
    </Td>
    <Td>
      <Box textAlign="center">
        <Text
          fontSize="sm"
          color="grey.800"
          lineHeight="short"
          fontWeight="bold"
        >
          $11,434.63
        </Text>
        <Text fontSize="xs" color="green.500" fontWeight="bold">
          +0.58% (+$67.16)
        </Text>
      </Box>
    </Td>
    <Td>
      <HStack justifyContent="center">
        <Button colorScheme="purple" variant="outline" rounded="full" size="sm">
          Pool stats
        </Button>
        <Button colorScheme="purple" rounded="full" size="sm">
          View details
        </Button>
      </HStack>
    </Td>
  </Tr>
);

function CurrentPoolTable() {
  return (
    <Table variant="simple">
      <TableCaption textAlign="left">
        <Flex justifyContent="space-between">
          <Text fontSize="xs" color="grey.500">
            Using real time market price quotes. Thank you for being a pro
            member
          </Text>
          <HStack>
            <IconButton
              aria-label="prev"
              variant="ghost"
              icon={<ArrowBackIcon />}
            />
            <Text
              color="grey.800"
              fontWeight="400"
              fontSize="14px"
              lineHeight="19px"
            >
              Page 1 of 3
            </Text>
            <IconButton
              aria-label="next"
              variant="ghost"
              color="purple.700"
              icon={<ArrowForwardIcon />}
            />
          </HStack>
        </Flex>
      </TableCaption>
      <Thead>
        <Tr bg="grey.300">
          <Th borderTopLeftRadius="lg" fontSize="xs" textTransform="none">
            Pool Name
          </Th>
          <Th textAlign="center" fontSize="xs" textTransform="none">
            Tokens entered → current
          </Th>
          <Th fontSize="xs" textTransform="none">
            Farming rewards
          </Th>
          <Th fontSize="xs" textTransform="none">
            LP gains /{" "}
            <Text as="u" color="purple.700">
              Net market gains
            </Text>
            <InfoOutlineIcon color="grey.500" ml={1} />
          </Th>
          <Th fontSize="xs" borderTopRightRadius="lg" textTransform="none" />
        </Tr>
      </Thead>
      <Tbody bg="grey.100">
        <CurrentPoolRow />
      </Tbody>
    </Table>
  );
}

export default CurrentPoolTable;
