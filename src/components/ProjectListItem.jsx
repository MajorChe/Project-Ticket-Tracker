import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectListItem = (props) => {
  const navigate = useNavigate();
  return (
    <Flex direction={"row"} gap={3} textAlign={"center"} wrap="wrap" px="2">
      <Text fontWeight={300} fontSize="lg" onClick={() => navigate(`/project/${props.id}`)} cursor="pointer" _hover={{color: "blue", fontWeight: "bold"}}>1. Project 1</Text>
      <Text fontWeight={300} fontSize="md" flex="1" maxWidth={"80%"}>Lorem ipsum dolor sit jahamet consectetur adipisicing elit. Alias consequuntur magnam </Text>
      <Flex gap={"3"} justifyContent="flex-start">
        <Avatar size={"sm"} src='https://bit.ly/ryan-florence' />
        <Avatar size={"sm"} src='https://bit.ly/ryan-florence' />
      </Flex>
    </Flex>
  );
};

export default ProjectListItem;
