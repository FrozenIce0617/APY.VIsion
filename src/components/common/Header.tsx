import React from "react";
import { Box, HStack, Link, Text } from "@chakra-ui/react";

import ValuePoolLogo from "../../assets/svg/logo/valuePool.svg";
import MediumLogo from "../../assets/svg/logo/medium.svg";
import TwitterLogo from "../../assets/svg/logo/twitter.svg";
import DiscordLogo from "../../assets/svg/logo/discord.svg";
import EmailLogo from "../../assets/svg/logo/email.svg";

const Header: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={3}
      py={2}
      w="100%"
      h={10}
      bg="#061c3b"
    >
      <Box display="flex" alignItems="center">
        <ValuePoolLogo />
        <Text ml={2} color="white" as="b">
          VALUE pool data coming soon!
        </Text>
      </Box>
      <Box display="flex" alignItems="center">
        <Text color="white" as="b">
          Subscribe to updates:
        </Text>
        <HStack ml={3} spacing="12px">
          <Link href="https://apyvision.medium.com/" isExternal>
            <MediumLogo />
          </Link>
          <Link href="https://discord.com/invite/ePfGAYbqUq" isExternal>
            <DiscordLogo />
          </Link>
          <Link href="https://twitter.com/ApyVision" isExternal>
            <TwitterLogo />
          </Link>
          <EmailLogo />
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
