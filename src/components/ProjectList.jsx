import { Avatar, Box, Button, chakra, Divider, Flex, Heading, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from '@chakra-ui/icons'
import ProjectListItem from "./ProjectListItem";
import AddProject from "./AddProject";
import { useCollection } from "../hooks/useCollection";

const ProjectList = (props) => {
  const {documents, error} = useCollection("projects");
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(documents)

  const projectList = documents ? documents.map((project,index) => {
    return (
        <ProjectListItem key={index} id={index + 1} data={project}/>
    )
  }) : null

  return (
    <>
    {/* project modal */}
    <AddProject isOpen={isOpen} onClose={onClose}/>
    <Box
      maxW={"full"}
      margin="10"
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
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
            // modal opens on click
            onClick={onOpen}
            >
            <AddIcon/> &nbsp; Add Project
          </Button>
        </Flex>
          <Flex direction={"row"} gap="5" justifyContent="space-between"  wrap="wrap" pl={4}>
            <Text fontWeight={600} fontSize="lg" width={"18%"} align="start">Name</Text>
            <Text fontWeight={600} fontSize="lg" width={"54%"} align="center">Description</Text>
            <Text fontWeight={600} fontSize="lg" width={"18%"} align="end">Contributors</Text>
          </Flex>
          <Flex direction={"column"} gap={3} mt="20px">
            {projectList}
          </Flex>
      </Box>
    </Box>
    </>
  );
};

export default ProjectList;
