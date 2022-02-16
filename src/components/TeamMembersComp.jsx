import React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Text,
  Tooltip,
} from "@chakra-ui/react";

const TeamMembersComp = (props) => {
  const team = props.document
    ? props.document.assignedUsers.map((member, index) => {
        return (
          <Tooltip key={index} label={member.displayName} bg="blue.100" color="black">
            <Avatar size={"sm"} src={member.photoURL}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </Tooltip>
        );
      })
    : null;

  return (
    <Box
      width={"400px"}
      marginX={{ base: "2", md: "12" }}
      marginY={{ base: "2", md: "2" }}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Flex justifyContent={"start"} mb="20px" gap={3}>
        <Text fontWeight={500}>Team Members: &nbsp;</Text>
        {team}
      </Flex>
    </Box>
  );
};

export default TeamMembersComp;
