import { Avatar, Box, Button, chakra, Divider, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from '@chakra-ui/icons'
import ProjectListItem from "./ProjectListItem";

const ProjectList = (props) => {
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
      height="400px"
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
          <Flex direction={"row"} gap={3} textAlign={"center"} wrap="wrap" px="5">
            <Text fontWeight={600} fontSize="2xl">Name</Text>
            <Text fontWeight={600} fontSize="2xl" flex="1">Description</Text>
            <Text fontWeight={600} fontSize="2xl">Contributors</Text>
          </Flex>
          <Flex direction={"column"} gap={3} mt="20px">
            <ProjectListItem id={"1"}/>
            <ProjectListItem id={"2"}/>
            <ProjectListItem id={"3"}/>
          </Flex>
      </Box>
    </Box>
  );
};

export default ProjectList;
