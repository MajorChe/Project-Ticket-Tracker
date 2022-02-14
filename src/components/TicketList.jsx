import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TicketList = () => {
  return (
    <Stack direction={"row"} wrap="wrap" spacing={"10"}>
      <Flex direction={"column"} gap="3" align={"center"} wrap="wrap">
        <Text fontWeight={600} fontSize="lg">
          Name
        </Text>
        <Text fontSize={"md"}>1. Project 1</Text>
      </Flex>
      <Flex
        direction={"column"}
        gap={3}
        align={"center"}
        flex="1"
        display={{ base: "flex", md: "flex" }}
      >
        <Text fontWeight={600} fontSize="lg">
          Description
        </Text>
        <Text fontSize={"md"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing eyshairty
        </Text>
      </Flex>
      <Flex direction={"column"} gap={3} align={"center"}>
        <Text fontWeight={600} fontSize="lg">
          Author
        </Text>
        <Avatar size={"sm"} src="https://bit.ly/ryan-florence" />
      </Flex>
    </Stack>
  );
};

export default TicketList;
