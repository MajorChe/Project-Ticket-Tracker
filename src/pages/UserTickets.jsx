import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { useTicketDocs } from "../hooks/useTicketDocs";

export const UserTickets = () => {
  const { user } = useAuthContext();
  const { documents } = useCollection("tickets",["authorId","==",user.uid]);
  const { tickets } = useTicketDocs("tickets",user.uid);
  const navigate = useNavigate();
  return (
    <Flex direction={{ base: "column", md: "row" }} >
      <SideBar />
      <Flex direction={"column"} w="100%" bgColor={"gray.100"}>
        <Navbar />
        <Flex mt={"20px"} direction="column" height={"80%"} wrap="wrap" px={{ base: 2, sm: 12, md: 12 }}>
          <Text fontSize={"lg"} mb="5" fontWeight={"bold"}>Tickets Created:</Text>
          <Flex direction={"column"} gap="3">
            {documents ? documents.map((item,index) => {
              return (<Box key={index} display="flex" cursor="pointer" onClick={() => navigate(`/ticket/${item.id}`)} _hover={{color: "blue.300", fontWeight: "bold"}}>
                <Text width={"20%"} cursor="pointer" _hover={{color: "blue", fontWeight: "bold"}}>{index + 1}. {item.ticketName}</Text>
                <Text width={"55%"}>{item.ticketDescription}</Text>
                <Flex gap={3}>
                <Text>Project:</Text>
                <Text>{item.project.projectName}</Text>
                </Flex>
              </Box>
              )
            }): null}
            <Text as={"hr"}  border={"1px dashed black"} mb="2" mx={"1"}></Text>
            <Text fontSize={"lg"} mt="2" fontWeight={"bold"}>Tickets Assigned to you:</Text>
            {tickets ? tickets.map((item,index) => {
              return (<Box key={index} display="flex" cursor="pointer" onClick={() => navigate(`/ticket/${item.id}`)} _hover={{color: "blue.300", fontWeight: "bold"}}>
                <Text width={"20%"} cursor="pointer" _hover={{color: "blue", fontWeight: "bold"}}>{index + 1}. {item.ticketName}</Text>
                <Text width={"55%"}>{item.ticketDescription}</Text>
                <Flex gap={3}>
                <Text>Project:</Text>
                <Text>{item.project.projectName}</Text>
                </Flex>
              </Box>
              )
            }): null}
          </Flex>
        </Flex>
        <Box as="footer" role="contentinfo"  left={"0"} bottom={"0"} width={"100%"} py="5" px={{ base: '4', md: '8' }} bg={"#bee3f8"} color={"black"}>
        <Text align={"center"}>Created by Charit</Text>
        </Box>
      </Flex>
    </Flex>
  );
};
