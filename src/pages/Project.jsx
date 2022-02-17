import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import AddTicket from "../components/AddTicket";
import { Navbar } from "../components/Navbar";
import ProjectCommentComponent from "../components/ProjectCommentComponent";
import SideBar from "../components/SideBar";
import TeamMembersComp from "../components/TeamMembersComp";
import TicketList from "../components/TicketList";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDoc } from "../hooks/useDoc";

export const Project = () => {
  const { user } = useAuthContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {id} = useParams();
  const {doc, error} = useDoc("projects",id, user.uid);

  return (
    <Flex direction={{ base: "column", md: "row" }} bgColor={"gray.100"}>
      <AddTicket isOpen={isOpen} onClose={onClose} document={doc}/>
      <SideBar />
      <Flex direction={"column"} w="100%">
        <Navbar />
        {error && <Text height={"605px"} textAlign="center" mt={"10"} fontSize="xl">{error}</Text>}
        {/* displaying only when the document is available and user is a contributor to the project*/}
        {doc && 
        <>
        <Flex px={{base: "20px", md: "20"}} py={{base: "30px", md: "8"}} justifyContent={"space-between"} wrap="wrap" gap={{base: "30px", md: "0px"}}>
          <Text fontSize={{base: "xl", md: "xl"}}>Project: {doc? doc.projectName: null}</Text>
          <Text fontSize={{base: "md", md: "xl"}}>
          {doc ? doc.projectDescription: null}
          </Text>
        </Flex>
        <Flex justifyContent={"start"} wrap="wrap" mb={"150px"}>
        <Box
          width={"900px"}
          marginX={{ base: "2", md: "10" }}
          marginY={{ base: "2", md: "10" }}
          p="6"
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          height="539px"
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
              onClick={onOpen}
            >
              <AddIcon /> &nbsp; Add Ticket
            </Button>
          </Flex>
          {/* list of all tickets go below */}
          <TicketList/>
        </Box>
        <Flex direction={"column"}>
          <TeamMembersComp document={doc}/>
          <ProjectCommentComponent document={doc}/>
        </Flex>
      </Flex>
      </>}
      <Box as="footer" role="contentinfo"  left={"0"} bottom={"0"} width={"100%"} py="5" px={{ base: '4', md: '8' }} bg={"#bee3f8"} color={"black"}>
        <Text align={"center"}>Created by Charit</Text>
      </Box>
      </Flex>
    </Flex>
  );
};
