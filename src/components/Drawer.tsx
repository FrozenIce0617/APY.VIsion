import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  VStack,
  Button,
} from "@chakra-ui/react";

import Logo from "./Logo";
import { DarkModeSwitch } from "./DarkModeSwitch";

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean;
  variant?: "drawer" | "sidebar";
}

const SidebarContent = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <>
    <Logo />
    <VStack mt={9}>
      <Button
        w="100%"
        variant="ghost"
        color="purple.700"
        justifyContent="flex-start"
        onClick={onClick}
      >
        Dashbaord
      </Button>
      <Button
        w="100%"
        variant="ghost"
        justifyContent="flex-start"
        onClick={onClick}
      >
        Pools
      </Button>
    </VStack>
    <VStack mt={14}>
      <Button
        w="100%"
        variant="ghost"
        justifyContent="flex-start"
        onClick={onClick}
      >
        FAQ
      </Button>
      <Button
        w="100%"
        variant="ghost"
        justifyContent="flex-start"
        onClick={onClick}
      >
        Blog
      </Button>
      <Button
        w="100%"
        variant="ghost"
        justifyContent="flex-start"
        onClick={onClick}
      >
        Support us
      </Button>
    </VStack>
  </>
);

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { colorMode } = useColorMode();
  const bgContainer = { light: "white", dark: "grey.900" };
  const { isOpen, variant, onClose } = props;

  return variant === "sidebar" ? (
    <Box p={9} w="288px" h="calc(100vh - 40px)" bg={bgContainer[colorMode]}>
      <SidebarContent onClick={onClose} />
      <DarkModeSwitch />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
        <DrawerFooter>
          <DarkModeSwitch />
        </DrawerFooter>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
