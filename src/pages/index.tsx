import { useCallback, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  HStack,
  IconButton,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, CopyIcon } from "@chakra-ui/icons";

import { Main } from "components/Main";
import Layout from "components/Layout";
import Blockie from "components/common/Blockie";
import InfoCard from "components/InfoCard";
import CurrentPoolTable from "components/CurrentPoolTable";
import { getShortAddress } from "utils/address";

const cardInfo = [
  {
    label: "Current Market Value (USD)",
    value: 21009.08,
  },
  {
    label: "Gas Fees + Exit Transactions",
    value: 14.32,
  },
  {
    label: "Liquidity Pool Gains",
    value: 345.18,
  },
  {
    label: "Net Market Gains",
    value: 5447.61,
  },
];

const Index = () => {
  const toast = useToast();
  const [address, setAddress] = useState(
    "0x060cb92711d2aac55484837b78649b7244f0136d"
  );
  const { onCopy } = useClipboard(address);

  const onCopyAddress = useCallback(() => {
    onCopy();
    toast({
      title: "Copied your account address",
      status: "success",
      duration: 5000,
    });
  }, [onCopy]);

  return (
    <Layout>
      <Main>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Heading size="lg">Your liquidity pool positions:</Heading>
          <Box
            display="flex"
            alignItems="center"
            px={2}
            py={1.5}
            bgColor="#08b5dd"
            h={9}
            borderRadius={18}
          >
            <Blockie isRound />
            <Text ml={2} color="white" as="b">
              {getShortAddress(address)}
            </Text>
            <IconButton
              variant="ghost"
              color="white"
              colorScheme="whiteAlpha"
              aria-label="Copy Address"
              icon={<CopyIcon />}
              onClick={onCopyAddress}
            />
            <ChevronDownIcon ml={2} color="white" />
          </Box>
        </Box>
        <Box w="100%" display="flex" flexWrap="wrap" boxSizing="border-box">
          {cardInfo.map((card) => (
            <Box
              flex={1}
              key={card.label}
              my={1}
              px={2}
              maxWidth={{ md: "50%", lg: "50%", xl: "25%" }}
              flexBasis={{ md: "50%", lg: "50%", xl: "25%" }}
            >
              <InfoCard label={card.label} value={card.value} />
            </Box>
          ))}
        </Box>
        <Flex justifyContent="space-between">
          <Text
            fontWeight="bold"
            fontSize={{ md: "18px" }}
            lineHeight={{ md: "25px" }}
          >
            Your current pools
          </Text>
          <HStack alignItems="center">
            <Text color="#6B57B8" fontSize="sm">
              View exited pools
            </Text>
            <ChevronRightIcon
              color="#6B57B8"
              border="2px"
              borderColor="#6B57B8"
              borderRadius="50%"
            />
          </HStack>
        </Flex>
        <CurrentPoolTable />
      </Main>
    </Layout>
  );
};

export default Index;
