import { Avatar, AvatarBadge, Flex, HStack, Tag, Text, Tooltip } from "@chakra-ui/react";
import React from "react";

const TicketDetails = (props) => {
  return (
    <Flex pl={"5"} direction="column">
      <Flex gap={{ base: "2", md: "4" }} align={"center"}>
        <Text fontWeight={600} fontSize="lg">Description: </Text>
        <Text>{props.document.ticketDescription}</Text>
      </Flex>
      <Flex gap={{ base: "2", md: "4" }} mt={{ base: "2", md: "5" }} >
        <Text fontWeight={600} fontSize="lg">Author: </Text>
        <Text>{props.document.authorData[0]}</Text>
      </Flex>
      <Flex justifyContent={"space-between"} mt={{ base: "2", md: "10" }} px="10">
        <Flex direction={"column"}>
          <Text fontWeight={600} textAlign="center">Status: </Text>
          {props.document.status==="New" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"red.400"} color="white">{props.document.status}</Text>}
          {props.document.status==="InProgress" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"orange"} color="white">{props.document.status}</Text>}
          {props.document.status==="Completed" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"green"} color="white">{props.document.status}</Text>}
        </Flex>
        <Flex direction={"column"}>
          <Text fontWeight={600} textAlign="center">Priority: </Text>
          {props.document.priority==="High" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"red.400"} color="white">{props.document.priority}</Text>}
          {props.document.priority==="Medium" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"orange"} color="white">{props.document.priority}</Text>}
          {props.document.priority==="Low" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"green"} color="white">{props.document.priority}</Text>}
        </Flex>
        <Flex direction={"column"}>
          <Text fontWeight={600} textAlign="center">Type: </Text>
          <Text px={"6"} align={"center"} fontWeight="bold" border="2px" borderRadius="full" bg={"#bee3f8"} color="black">{props.document.status}</Text>
          </Flex>
      </Flex>
      <Flex gap={{ base: "2", md: "4" }} mt={{ base: "2", md: "10" }}>
        <Text fontWeight={600} fontSize="lg">Assigned Devs: </Text>
        {props.document.assignedDevs.map((member, index) => {
        return (
          <Tooltip key={index} label={member.displayName} bg="blue.100" color="black">
            <Avatar size={"sm"} src={member.photoURL}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </Tooltip>
        );
      })}
      </Flex>
    </Flex>
  );
};

export default TicketDetails;
