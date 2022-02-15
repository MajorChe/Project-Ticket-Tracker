import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const TicketCommentComp = () => {
  return (
    <Box
          width={"350px"}
          marginX={{ base: "2", md: "12" }}
          marginY={{ base: "2", md: "2" }}
          p="5"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          height="500px"
          // overflowY={"scroll"}
        >
          <Flex justifyContent={"space-between"} mb="20px">
            <Text fontSize={"xl"} fontWeight={500} textAlign="center">
              Ticket Comments
            </Text>
            </Flex>
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
              Add Comment
            </Button>
          
        </Box>
  )
}

export default TicketCommentComp;