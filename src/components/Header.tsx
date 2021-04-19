import { Box, IconButton, Flex } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface Props {
  onShowSidebar: React.MouseEventHandler<HTMLButtonElement>;
  showSidebarButton?: boolean;
}

const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {
  return (
    <Flex p={4} color="white" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            aria-label="icon"
            icon={<HamburgerIcon w={5} h={5} />}
            color="purple.700"
            variant="unstyled"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Box flex="1" />
    </Flex>
  );
};

export default Header;
