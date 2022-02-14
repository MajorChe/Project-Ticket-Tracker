import { Avatar, Box, Button, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from '@chakra-ui/icons'

const TicketBox = (props) => {
  return (
    <Box
      maxW={"600px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      height="600px"
      overflowY={"scroll"}
    >

      <Box p={6}>
        <Flex justifyContent={"space-between"} mb="20px">
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"} textAlign="center">
            {props.title}
          </Heading>
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
          <Flex direction={"column"} gap={3} align={"center"}>
            <Text fontWeight={600}>Name</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Project 1
            </Text>
          </Flex>
          <Flex direction={"column"} gap={3} align={"center"} flex="1">
            <Text fontWeight={600}>Description</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing eyshairty
            </Text>
          </Flex>
          <Flex direction={"column"} gap={3} align={"center"}>
            <Text fontWeight={600}>Contributors</Text>
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
