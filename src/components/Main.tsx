import { Stack, StackProps } from "@chakra-ui/react";

export const Main = (props: StackProps) => (
  <Stack spacing="1.5rem" flex={1} maxWidth="89rem" {...props} />
);
