import { Avatar, AvatarBadge, Divider, Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectListItem = (props) => {
  const navigate = useNavigate();
  const contributors = props.data.assignedUsers.map((item,index) => {
    return (
      <Tooltip key={index} label={item.displayName} bg='blue.100' color='black'>
        <Avatar size={"sm"} src={item.photoURL}>
          <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>
      </Tooltip>
      )
  });

  return (
    <>
    <Flex direction={"row"} gap={3} wrap="wrap" px="2" textAlign={{md:"center"}}>
      <Flex align={"center"} gap="2" width={{md:"18%"}}>
        <Text display={{base:"flex", md:"none"}} fontWeight="bold">Name: </Text>
        <Text fontWeight={300} fontSize="md" onClick={() => navigate(`/project/${props.data.id}`)} cursor="pointer" _hover={{color: "blue", fontWeight: "bold"}}>{props.id}. {props.data.projectName}</Text>
      </Flex>
      <Flex gap={"2"} width={{md:"69%"}} justify={{md:"center"}} >
        <Text display={{base:"flex", md:"none"}} fontWeight="bold">Description: </Text>
        <Text fontWeight={300} fontSize="sm" mt={"0.5"}>{props.data.projectDescription}</Text>
      </Flex>
      <Flex gap={"3"} justifyContent="flex-start" align={"center"}>
        <Text display={{base:"flex", md:"none"}} fontWeight="bold">Contributors: </Text>
        {contributors}
      </Flex>
    </Flex>
    <Divider as={"hr"} border="3px solid black" mb="2"></Divider>
    </>
  );
};

export default ProjectListItem;
