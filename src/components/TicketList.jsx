import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import TicketListItem from "./TicketListItem";

const TicketList = () => {
  const { id } = useParams();
  const { documents, error } = useCollection("tickets",["projectId","==",id]);
  console.log("values are:",documents)
  const ticketItemList = documents ? documents.map((doc,index) => {
    return <TicketListItem key={index} id={index + 1} document={doc}/>
  }) :null

  return (
    <Flex direction={"column"}>
      <Flex direction={"row"} gap={3} textAlign={"center"} wrap="wrap" px="5">
        <Text fontWeight={500} fontSize="lg">Name</Text>
        <Text fontWeight={500} fontSize="lg" flex="1">Description</Text>
        <Text fontWeight={500} fontSize="lg">Author</Text>
      </Flex>
      {ticketItemList}
    </Flex>
  );
};

export default TicketList;
