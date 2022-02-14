import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import TicketListItem from "./TicketListItem";

const TicketList = () => {
  return (
    <Flex direction={"column"}>
      <Flex direction={"row"} gap={3} textAlign={"center"} wrap="wrap" px="5">
        <Text fontWeight={500} fontSize="lg">Name</Text>
        <Text fontWeight={500} fontSize="lg" flex="1">Description</Text>
        <Text fontWeight={500} fontSize="lg">Author</Text>
      </Flex>
      <TicketListItem id="1"/>
      <TicketListItem id="2"/>
      <TicketListItem id="3"/>
    </Flex>
  );
};

export default TicketList;
