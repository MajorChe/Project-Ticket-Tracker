import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from '@chakra-ui/icons'
import ProjectListItem from "./ProjectListItem";
import AddProject from "./AddProject";
import { useAuthContext } from "../hooks/useAuthContext";
import { useProjectDocs } from "../hooks/useProjectDocs";

const ProjectList = (props) => {
  const { user } = useAuthContext();
  //useProjectDocs is used to get projects specific to the user
  const {documents,error} = useProjectDocs("projects",user.uid)
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    {/* project modal */}
    <AddProject isOpen={isOpen} onClose={onClose}/>
    <Box
      maxW={"full"}
      margin={{md:"10"}}
      w={"full"}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      height={{base:"600px" ,md:"400px"}}
      overflowY={"scroll"}
    >

      <Box p={6}>
        <Flex justifyContent={"space-between"} mb="10px">
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
          <Text as={"hr"}  border={"1px solid black"} mb="4" mx={"50px"}></Text>
          <Flex direction={"row"} gap="5" justifyContent="space-between"  wrap="wrap" pl={4} display={{base:"none",md:"flex"}}>
            <Text fontWeight={600} fontSize="lg" width={{md:"18%"}} align="start">Name</Text>
            <Text fontWeight={600} fontSize="lg" width={{md:"54%"}} align="center">Description</Text>
            <Text fontWeight={600} fontSize="lg" width={{md:"18%"}} align="end">Contributors</Text>
          </Flex>
          <Flex direction={"column"} gap={3} mt="20px">
            {/* {projectList} */}
            {documents ? documents.map((project,index) => {
                return (
                  <ProjectListItem key={index} id={index + 1} data={project}/>
                )
              }) : null}
          </Flex>
      </Box>
    </Box>
    </>
  );
};

export default ProjectList;
