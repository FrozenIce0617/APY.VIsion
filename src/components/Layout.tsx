import React, { useState } from "react";
import { Box, Container, useBreakpointValue } from "@chakra-ui/react";

import GlobalHeader from "./common/Header";
import Sidebar from "./Drawer";

type SidebarVariant = {
  navigation: "drawer" | "sidebar";
  navigationButton: boolean;
};

const smVariant: SidebarVariant = {
  navigation: "drawer",
  navigationButton: true,
};
const mdVariant: SidebarVariant = {
  navigation: "sidebar",
  navigationButton: false,
};

const Layout: React.FC = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, xl: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <GlobalHeader />
      <Box display="flex">
        <Sidebar
          variant={variants?.navigation!}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box px={14} py={45} w="100%">
          <Container maxW="container.xl">{props.children}</Container>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
