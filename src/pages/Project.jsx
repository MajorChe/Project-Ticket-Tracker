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
import SideBar from "../components/SideBar";
import TicketList from "../components/TicketList";

export const Project = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <SideBar />
      <Flex direction={"column"} w="100%">
        <Navbar />
        <Flex px="20" py="8" justifyContent={"space-between"}>
          <Text fontSize={"2xl"}>Project Name</Text>
          <Text fontSize={"2xl"}>
            Description Lorem ipsum dolor tempore cum accusantium similique iure
            quam?
          </Text>
        </Flex>
        <Box
          maxW={"800px"}
          marginX={{ base: "2", md: "20" }}
          marginY={"10"}
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
          <TicketList/>
        </Box>
      </Flex>
    </Flex>
  );
};
