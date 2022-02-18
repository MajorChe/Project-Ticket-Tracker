import {
  Box,
  Divider,
  Flex,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { useTicketDocs } from "../hooks/useTicketDocs";

const TicketsList = () => {
  const { user } = useAuthContext();
  const { documents } = useCollection("tickets", ["authorId", "==", user.uid]);
  const { tickets } = useTicketDocs("tickets", user.uid);
  const navigate = useNavigate();
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <SideBar />
      <Flex direction={"column"} w="100%" bgColor={"gray.100"}>
        <Navbar />
        <Flex
          mt={"20px"}
          direction="column"
          height={"80%"}
          wrap="wrap"
          px={{ base: 2, sm: 12, md: 12 }}
        >
          <Text fontSize={"lg"} mb="5" fontWeight={"bold"}>
            Tickets Created:
          </Text>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Project Name</Th>
              </Tr>
            </Thead>
            <Tbody>
            {documents ? documents.map((item,index) => {
              return (
                <Tr key={index} cursor="pointer" onClick={() => navigate(`/ticket/${item.id}`)} _hover={{color: "blue"}}>
                  <Td>{index + 1}. {item.ticketName}</Td>
                  <Td>{item.ticketDescription}</Td>
                  <Td>{item.project.projectName}</Td>
                </Tr>
              )
            }): null}
            <Tr>
              <Td fontSize={"lg"} fontWeight="bold">Assigned to you: </Td>
            </Tr>
            {tickets ? tickets.map((item,index) => {
              return (
                <Tr key={index} cursor="pointer" onClick={() => navigate(`/ticket/${item.id}`)} _hover={{color: "blue"}}>
                  <Td>{index + 1}. {item.ticketName}</Td>
                  <Td>{item.ticketDescription}</Td>
                  <Td>{item.project.projectName}</Td>
                </Tr>
              )
            }): null}
            </Tbody>
          </Table>
        </Flex>
        <Box
          as="footer"
          role="contentinfo"
          left={"0"}
          bottom={"0"}
          width={"100%"}
          mt="10"
          py="5"
          px={{ base: "4", md: "8" }}
          bg={"#bee3f8"}
          color={"black"}
        >
          <Text align={"center"}>Created by Charit</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TicketsList;
