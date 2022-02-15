import React from "react";
import { Avatar, Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';

const TeamMembersComp = () => {
  return (
    <Box
      width={"400px"}
      marginX={{ base: "2", md: "12" }}
      marginY={{ base: "2", md: "2" }}
      bg={useColorModeValue("white", "gray.800")}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Flex justifyContent={"start"} mb="20px">
        <Text fontWeight={500}>
          Team Members: &nbsp;
        </Text>
        <Avatar size={"sm"} src='https://bit.ly/ryan-florence' />
        <Avatar size={"sm"} src='https://bit.ly/ryan-florence' />
      </Flex>
    </Box>
  );
};

export default TeamMembersComp;
