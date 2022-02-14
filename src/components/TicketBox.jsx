import { Avatar, Box, Button, chakra, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from '@chakra-ui/icons'

const TicketBox = (props) => {
  return (
    <Box
      maxW={"full"}
      margin="10"
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      border="2px solid #4299e1"
      rounded={"md"}
      overflow={"hidden"}
      height="600px"
      overflowY={"scroll"}
    >

      <Box p={6}>
        <Flex justifyContent={"space-between"} mb="20px">
          <Text fontSize={"3xl"} fontWeight={500} textAlign="center">
            Projects
          </Text>
          <Button
            w="130px"
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            >
            <AddIcon/> &nbsp; Add Project
          </Button>
        </Flex>

        <Stack direction={"row"} wrap="wrap" spacing={"8"}>
          <Flex direction={"column"} gap={3} align={"center"} wrap="wrap">
            <Text fontWeight={600} fontSize="2xl">Name</Text>
            <Text fontSize={"lg"}>
              1. Project 1
            </Text>
          </Flex>
          <Flex direction={"column"} gap={3} align={"center"} flex="1" display={{base: "none", md: "flex"}}>
            <Text fontWeight={600} fontSize="2xl">Description</Text>
            <Text fontSize={"lg"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing eyshairty
            </Text>
          </Flex>
          <Flex direction={"column"} gap={3} align={"center"}>
            <Text fontWeight={600} fontSize="2xl">Contributors</Text>
            <Flex gap={"3"}>
            <Avatar size={"sm"} src='https://bit.ly/ryan-florence' />
            <Avatar size={"sm"} src='https://bit.ly/ryan-florence' />
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default TicketBox;
