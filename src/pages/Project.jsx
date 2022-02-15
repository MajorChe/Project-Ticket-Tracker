import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components/Navbar";
import ProjectCommentComponent from "../components/ProjectCommentComponent";
import SideBar from "../components/SideBar";
import TeamMembersComp from "../components/TeamMembersComp";
import TicketList from "../components/TicketList";

export const Project = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} bgColor={"gray.100"}>
      <SideBar />
      <Flex direction={"column"} w="100%">
        <Navbar />
        <Flex px={{base: "20px", md: "20"}} py={{base: "30px", md: "8"}} justifyContent={"space-between"} wrap="wrap" gap={{base: "30px", md: "0px"}}>
          <Text fontSize={{base: "xl", md: "2xl"}}>Project Name</Text>
          <Text fontSize={{base: "md", md: "2xl"}}>
            Description Lorem ipsum dolor tempore cum accusantium similique iure
            quam?
          </Text>
        </Flex>
        <Flex justifyContent={"start"} wrap="wrap" mb={"150px"}>
        <Box
          width={"900px"}
          marginX={{ base: "2", md: "10" }}
          marginY={{ base: "2", md: "10" }}
          p="6"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          height="400px"
          overflowY={"scroll"}
        >
          <Flex justifyContent={"space-between"} mb="20px">
            <Text fontSize={"2xl"} fontWeight={500} textAlign="center">
              Tickets
            </Text>
            <Button
              w="130px"
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <AddIcon /> &nbsp; Add Ticket
            </Button>
          </Flex>
          {/* list of all tickets go below */}
          <TicketList/>
        </Box>
        <Flex direction={"column"}>
          <TeamMembersComp/>
          <ProjectCommentComponent/>
        </Flex>
      </Flex>
      <Box as="footer" role="contentinfo"  left={"0"} bottom={"0"} width={"100%"} py="5" px={{ base: '4', md: '8' }} bg={"#bee3f8"} color={"black"}>
        <Text align={"center"}>Created by Charit</Text>
      </Box>
      </Flex>
    </Flex>
  );
};
