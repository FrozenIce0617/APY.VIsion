import { useColorMode, Switch } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Switch
      position="absolute"
      bottom="1rem"
      left="1rem"
      color="green"
      isChecked={isDark}
    />
  );
};
