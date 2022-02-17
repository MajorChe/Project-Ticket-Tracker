import { Box, Button, Flex, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import EditTicket from "../components/EditTicket";
import { Navbar } from "../components/Navbar";
import SideBar from "../components/SideBar";
import TicketCommentComp from "../components/TicketCommentComp";
import TicketDetails from "../components/TicketDetails";
import { useTicketDoc } from "../hooks/useTicketDoc";

const TicketItem = () => {
  const { id } = useParams();
  const { document, error } = useTicketDoc("tickets", id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction={{ base: "column", md: "row" }} bgColor={"gray.100"}>
      <SideBar />
      <Flex direction={"column"} w="100%">
        <Navbar />
        {error && <Text height={"605px"} textAlign="center" mt={"10"} fontSize="xl">{error}</Text>}
        {document && (
          <>
          <EditTicket isOpen={isOpen} onClose={onClose}/>
            <Flex
              px={{ base: "20px", md: "20" }}
              py={{ base: "30px", md: "5" }}
              justifyContent={"space-between"}
              wrap="wrap"
              gap={{ base: "30px", md: "0px" }}
            >
              <Text fontSize={{ base: "xl", md: "3xl" }}> Ticket Details</Text>
            </Flex>
            <Flex justifyContent={"space-around"} wrap="wrap" mb="50px">
              <Box
                width={"800px"}
                marginX={{ base: "2", md: "20" }}
                marginY={{ base: "2", md: "10" }}
                p="6"
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                height="400px"
              >
                <Flex justifyContent={"space-between"} mb="20px">
                  <Text fontSize={"xl"} fontWeight={700} textAlign="center">
                  {document ? document.ticketName : null}
                  </Text>
                  <Flex gap={4}>
                  <Button
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={onOpen}
                  >
                    Edit
                  </Button>
                  <Button
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"red.400"}
                    color={"white"}
                    _hover={{
                      bg: "red.500",
                    }}
                  >
                    Delete
                  </Button>                  
                  </Flex>
                </Flex>
                <TicketDetails document={document}/>
              </Box>
              <Flex direction={"column"}>
              <Text align={"center"} fontSize="lg">Ticket Comments</Text>
              <TicketCommentComp document={document}/>
              </Flex>
            </Flex>
          </>
        )}
        <Box
          as="footer"
          role="contentinfo"
          left={"0"}
          bottom={"0"}
          width={"100%"}
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

export default TicketItem;
