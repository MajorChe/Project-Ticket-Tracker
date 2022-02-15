import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components/Navbar";
import SideBar from "../components/SideBar";
import TicketCommentComp from "../components/TicketCommentComp";

const TicketItem = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} bgColor={"gray.100"}>
      <SideBar />
      <Flex direction={"column"} w="100%">
        <Navbar />
        <Flex
          px={{ base: "20px", md: "20" }}
          py={{ base: "30px", md: "8" }}
          justifyContent={"space-between"}
          wrap="wrap"
          gap={{ base: "30px", md: "0px" }}
        >
          <Text fontSize={{ base: "xl", md: "2xl" }}>Ticket Name</Text>
          <Text fontSize={{ base: "md", md: "2xl" }}>
            Description Lorem ipsum dolor tempore cum accusantium similique iure
            quam?
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} wrap="wrap" mb="50px">
          <Box
            width={"800px"}
            marginX={{ base: "2", md: "20" }}
            marginY={{ base: "2", md: "10" }}
            p="6"
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
            height="400px"
          >
            <Flex justifyContent={"space-between"} mb="20px">
              <Text fontSize={"2xl"} fontWeight={500} textAlign="center">
                Ticket details
              </Text>
              <Button
                fontSize={"sm"}
                rounded={"full"}
                colorScheme="red"
                variant={"outline"}
              >
                Delete
              </Button>
            </Flex>
          </Box>
          <TicketCommentComp />
        </Flex>
        <Box as="footer" role="contentinfo"  left={"0"} bottom={"0"} width={"100%"} py="5" px={{ base: '4', md: '8' }} bg={"#bee3f8"} color={"black"}>
        <Text align={"center"}>Created by Charit</Text>
      </Box>
      </Flex>
    </Flex>
  );
};

export default TicketItem;
