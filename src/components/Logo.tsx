import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";

import LogoIcon from "../assets/svg/logo/icon.svg";

interface LogoProps {
  horizontal?: boolean;
  showTitle?: boolean;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { colorMode } = useColorMode();

  const fillColor = { light: "gray.900", dark: "white" };

  return (
    <Flex direction={props.horizontal ? "row" : "column"} alignItems="center">
      <LogoIcon />
      {props.showTitle && (
        <Box mt={props.horizontal ? 0 : 3} ml={props.horizontal ? 3 : 0}>
          <svg
            width={114}
            height={19}
            viewBox="0 0 114 19"
            fill={fillColor[colorMode]}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.16 16.152c.096.208.144.416.144.624 0 .368-.152.68-.456.936a1.47 1.47 0 01-1.008.384c-.256 0-.496-.064-.72-.192-.224-.144-.4-.36-.528-.648l-1.44-3.216H4.704l-1.44 3.216a1.436 1.436 0 01-.528.648 1.529 1.529 0 01-1.752-.192c-.304-.256-.456-.568-.456-.936 0-.208.048-.416.144-.624L7.296 1.92a1.5 1.5 0 01.648-.72c.304-.176.624-.264.96-.264.336 0 .648.088.936.264.304.16.528.4.672.72l6.648 14.232zM5.76 11.64h6.336L8.928 4.512 5.76 11.64zM21.172 18.144c-.463 0-.84-.136-1.128-.408-.271-.288-.407-.672-.407-1.152V2.544c0-.464.128-.824.383-1.08.273-.256.64-.384 1.105-.384h5.904c1.808 0 3.215.456 4.224 1.368 1.008.896 1.511 2.16 1.511 3.792 0 1.632-.504 2.904-1.512 3.816-1.008.912-2.415 1.368-4.223 1.368h-4.296v5.16c0 .48-.145.864-.433 1.152-.271.272-.648.408-1.128.408zm5.473-9.096c2.128 0 3.192-.928 3.192-2.784 0-1.856-1.064-2.784-3.192-2.784h-3.912v5.568h3.912zM45.923 1.488c.288-.352.632-.528 1.032-.528.368 0 .696.144.984.432.288.272.432.6.432.984 0 .32-.12.624-.36.912l-5.448 6.648v6.648c0 .496-.144.88-.432 1.152-.288.272-.656.408-1.104.408-.464 0-.84-.136-1.128-.408-.288-.272-.432-.656-.432-1.152V9.936l-5.448-6.648c-.24-.288-.36-.592-.36-.912 0-.384.144-.712.432-.984.288-.288.616-.432.984-.432.4 0 .744.176 1.032.528l4.92 6.096 4.896-6.096zM49.898 18.144c-.512 0-.936-.168-1.272-.504a1.806 1.806 0 01-.504-1.296c0-.512.168-.936.504-1.272.336-.352.76-.528 1.272-.528s.936.176 1.272.528c.336.336.504.76.504 1.272s-.168.944-.504 1.296c-.336.336-.76.504-1.272.504zM63.099 6.672c.176-.384.456-.576.84-.576.24 0 .456.08.648.24a.75.75 0 01.288.6.76.76 0 01-.096.384l-4.68 10.08c-.096.208-.24.376-.432.504-.192.112-.4.168-.624.168-.208 0-.408-.056-.6-.168a1.384 1.384 0 01-.456-.504L53.331 7.32a.714.714 0 01-.096-.36c0-.24.104-.448.312-.624.224-.176.464-.264.72-.264.16 0 .312.048.456.144.16.096.28.232.36.408l4.008 9 4.008-8.952zM68.292 18.12c-.288 0-.528-.08-.72-.24-.176-.176-.264-.416-.264-.72V7.032c0-.304.088-.536.264-.696.192-.176.432-.264.72-.264s.52.088.696.264c.176.16.264.392.264.696V17.16c0 .32-.088.56-.264.72-.176.16-.408.24-.696.24zm0-14.568c-.384 0-.696-.112-.936-.336-.24-.224-.36-.52-.36-.888 0-.352.12-.64.36-.864.24-.224.552-.336.936-.336s.696.112.936.336c.24.224.36.512.36.864 0 .368-.12.664-.36.888-.24.224-.552.336-.936.336zM76.822 18.168c-.736 0-1.44-.088-2.112-.264a6.425 6.425 0 01-1.752-.744c-.288-.192-.496-.368-.624-.528a1.137 1.137 0 01-.168-.624c0-.208.056-.376.168-.504a.616.616 0 01.48-.216c.192 0 .472.12.84.36.48.288.952.52 1.416.696.48.16 1.072.24 1.776.24.864 0 1.536-.152 2.016-.456.48-.304.72-.744.72-1.32 0-.352-.088-.632-.264-.84-.176-.224-.48-.416-.912-.576-.432-.176-1.064-.352-1.896-.528-1.408-.304-2.416-.712-3.024-1.224-.608-.512-.912-1.208-.912-2.088 0-.688.192-1.296.576-1.824.384-.528.912-.944 1.584-1.248.688-.304 1.464-.456 2.328-.456.624 0 1.224.088 1.8.264.592.16 1.112.392 1.56.696.544.384.816.784.816 1.2a.766.766 0 01-.192.528.591.591 0 01-.456.216c-.192 0-.48-.136-.864-.408a7.597 7.597 0 00-1.272-.672c-.4-.16-.896-.24-1.488-.24-.752 0-1.36.168-1.824.504a1.597 1.597 0 00-.672 1.344c0 .352.08.64.24.864.176.208.456.4.84.576.4.16.968.32 1.704.48 1.088.24 1.928.504 2.52.792.608.288 1.04.64 1.296 1.056.256.416.384.944.384 1.584 0 1.008-.424 1.824-1.272 2.448-.848.608-1.968.912-3.36.912zM85.401 18.12c-.288 0-.528-.08-.72-.24-.176-.176-.264-.416-.264-.72V7.032c0-.304.088-.536.264-.696.192-.176.432-.264.72-.264s.52.088.696.264c.176.16.264.392.264.696V17.16c0 .32-.088.56-.264.72-.176.16-.408.24-.696.24zm0-14.568c-.384 0-.696-.112-.936-.336-.24-.224-.36-.52-.36-.888 0-.352.12-.64.36-.864.24-.224.552-.336.936-.336s.696.112.936.336c.24.224.36.512.36.864 0 .368-.12.664-.36.888-.24.224-.552.336-.936.336zM94.843 18.168c-1.104 0-2.08-.248-2.928-.744-.832-.496-1.48-1.2-1.944-2.112-.448-.928-.672-2-.672-3.216 0-1.216.224-2.28.672-3.192.464-.928 1.112-1.64 1.944-2.136.848-.496 1.824-.744 2.928-.744 1.104 0 2.08.248 2.928.744.848.496 1.496 1.208 1.944 2.136.464.912.696 1.976.696 3.192 0 1.216-.232 2.288-.696 3.216a4.876 4.876 0 01-1.944 2.112c-.848.496-1.824.744-2.928.744zm0-1.608c1.152 0 2.032-.376 2.64-1.128.624-.768.936-1.88.936-3.336 0-1.424-.312-2.52-.936-3.288-.624-.784-1.504-1.176-2.64-1.176-1.136 0-2.016.392-2.64 1.176-.624.768-.936 1.864-.936 3.288 0 1.44.304 2.544.912 3.312.624.768 1.512 1.152 2.664 1.152zM109.188 6.024c2.8 0 4.2 1.544 4.2 4.632v6.504c0 .304-.088.544-.264.72-.16.16-.392.24-.696.24-.304 0-.544-.08-.72-.24-.176-.176-.264-.416-.264-.72v-6.384c0-1.088-.216-1.88-.648-2.376-.416-.496-1.088-.744-2.016-.744-1.072 0-1.928.328-2.568.984-.64.656-.96 1.544-.96 2.664v5.856c0 .304-.088.544-.264.72-.16.16-.392.24-.696.24-.304 0-.544-.08-.72-.24-.176-.176-.264-.416-.264-.72V7.032c0-.288.088-.52.264-.696.176-.176.416-.264.72-.264.288 0 .512.088.672.264a.91.91 0 01.264.672v1.224a3.86 3.86 0 011.608-1.632c.688-.384 1.472-.576 2.352-.576z"
              fill={fillColor[colorMode]}
            />
          </svg>
        </Box>
      )}
    </Flex>
  );
};

Logo.defaultProps = {
  showTitle: true,
  horizontal: true,
};

export default Logo;