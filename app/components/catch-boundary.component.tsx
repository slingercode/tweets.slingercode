import { Code, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import type { ThrownResponse } from "@remix-run/react";

const CatchBoundary: React.FC<{ caught: ThrownResponse<number, any> }> = ({
  caught,
}) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      padding={[4, 0]}
    >
      <Flex
        padding={4}
        borderWidth="thin"
        borderStyle="solid"
        borderColor="gray.200"
        borderRadius="md"
        maxWidth={["100%", "70%"]}
      >
        <Stack>
          <Heading as="h1" size="lg">
            Something went wrong 😔
          </Heading>

          <Text>{`Code: ${caught.status}`}</Text>
          <Code>{caught.statusText}</Code>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default CatchBoundary;
