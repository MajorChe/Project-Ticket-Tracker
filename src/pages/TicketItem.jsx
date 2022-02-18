import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditTicket from "../components/EditTicket";
import { Navbar } from "../components/Navbar";
import SideBar from "../components/SideBar";
import TicketCommentComp from "../components/TicketCommentComp";
import TicketDetails from "../components/TicketDetails";
import { useFireStore } from "../hooks/useFireStore";
import { useTicketDoc } from "../hooks/useTicketDoc";

const TicketItem = () => {
  const { id } = useParams();
  const { document, error } = useTicketDoc("tickets", id);
  const { deleteDocument } = useFireStore("tickets");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openAlert, setOpenAlert] = React.useState(false)
  const closeAlert = () => setOpenAlert(false)
  const cancelRef = React.useRef()
  const navigate = useNavigate();

  const handleDeleteTicket = () => {
    deleteDocument(id);
    closeAlert();
    console.log("deleted");
    navigate("/");
  }

  return (
    <>
    {/* alert to notify about deleting the ticket */}
    <AlertDialog
        isOpen={openAlert}
        leastDestructiveRef={cancelRef} //for highlighing the cancel button we use ref
        onClose={closeAlert}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Ticket
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={closeAlert}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDeleteTicket} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    {/* ticket body starts---- */}
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
            <Flex justifyContent={{base:"space-between", md:"start"}} gap={{base:"2", md:"100px"}} ml={{base: "none", md:"200px"}} wrap="wrap" mb="100px" direction={{base:"column",md:"row"}}>
              <Flex 
                direction={{base:"row",md:"column"}}
                justifyContent="space-between"
                width={{md:"50%"}}
                marginX={{ base: "4", md: "0" }}
                marginY={{ base: "2", md: "10" }}
                p="6"
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                height={{base:"full",md:"400px"}}
                wrap={"wrap"}
              >
                <Flex direction={{base:"column",md:"row"}} justifyContent={{base:"center",md:"space-between"}} mb="20px" wrap={"wrap"}>
                  <Text fontSize={"xl"} fontWeight={700} textAlign="center">
                  Name: {document ? document.ticketName : null}
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
                    onClick={() => setOpenAlert(true)}
                  >
                    Delete
                  </Button>                  
                  </Flex>
                </Flex>
                <TicketDetails document={document}/>
              </Flex>
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
    </>
  );
};

export default TicketItem;
