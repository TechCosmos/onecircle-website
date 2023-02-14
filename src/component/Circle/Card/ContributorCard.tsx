import { Avatar, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa";

export default function ContributorCard() {
  return (
    <Flex w="100%" alignItems="center" gap={5} borderWidth={1} p={3} borderRadius="lg">
      <Avatar name="Lord Mike" bg="lime" />
      <VStack flexGrow={1} align="left" spacing={0}>
        <Heading size="md" as="h6" overflow="hidden" textOverflow="ellipsis">
          Lord Mike
        </Heading>
        <Text
          color="blackAlpha.500"
          as="p"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          Commentaire
        </Text>
      </VStack>
      <Button leftIcon={<FaDollarSign />} variant="outline">
        300
      </Button>
    </Flex>
  );
}
