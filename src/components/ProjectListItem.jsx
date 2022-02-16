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
    <Flex direction={"row"} gap={3} textAlign={"center"} wrap="wrap" px="2">
      
      <Text fontWeight={300} fontSize="sm" onClick={() => navigate(`/project/${props.data.id}`)} cursor="pointer" _hover={{color: "blue", fontWeight: "bold"}}>{props.id}. {props.data.projectName}</Text>
      <Text fontWeight={300} fontSize="sm" flex="1">{props.data.projectDescription}</Text>
      <Flex gap={"3"} justifyContent="flex-start">
        {contributors}
      </Flex>
      <Divider />
    </Flex>
  );
};

export default ProjectListItem;
