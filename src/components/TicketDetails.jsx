import { Avatar, AvatarBadge, Flex,Text, Tooltip } from "@chakra-ui/react";
import React from "react";

const TicketDetails = (props) => {
  return (
    <Flex direction="column" wrap={"wrap"} gap={{base:"3",md:"none"}}>
      {/* Description  */}
      <Flex align={"center"} wrap="wrap">
        <Text fontWeight={600} fontSize="lg">Description: </Text>
        <Text mt={"1"}>{props.document.ticketDescription}</Text>
      </Flex>
      {/* Author and project */}
      <Flex align="center" wrap="wrap" justifyContent={{base:"start", md:"space-between"}} direction={{base:"column",md:"row"}} alignItems="start">
        <Flex gap={"3"} align="center">
        <Text fontWeight={600} fontSize="lg">Author: </Text>
        <Text flexGrow={1} mt="1">{props.document.authorData[0]}</Text>
        </Flex>
        <Flex align={"center"} gap="3">
        <Text fontWeight={600} fontSize={{base:"md",md:"lg"}}>Project: </Text>
        <Text fontSize={{base:"md",md:"md"}} mt="1">{props.document.project.projectName}</Text>
        </Flex>
      </Flex>
      {/* Status,priority and type */}
      <Flex justifyContent={"space-between"} gap="2" mt={{ base: "2", md: "10" }} px={{base:"0", md:"10"}} wrap="wrap">
        {/* Status: check and render color based on type of Status */}
        <Flex justifyContent={"space-around"} direction={{base:"row" ,md:"column"}} gap={{base:"3", md:"0"}}>
          <Text fontWeight={600} textAlign="center" alignSelf={"center"}>Status: </Text>
          {props.document.status==="New" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"red.400"} color="white">{props.document.status}</Text>}
          {props.document.status==="InProgress" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"orange"} color="white">{props.document.status}</Text>}
          {props.document.status==="Completed" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"green"} color="white">{props.document.status}</Text>}
        </Flex>
        {/* Priority: check and render color based on type of Priority */}
        <Flex direction={{base:"row" ,md:"column"}} gap={{base:"3", md:"0"}}>
          <Text fontWeight={600} textAlign="center" alignSelf={"center"}>Priority: </Text>
          {props.document.priority==="High" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"red.400"} color="white">{props.document.priority}</Text>}
          {props.document.priority==="Medium" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"orange"} color="white">{props.document.priority}</Text>}
          {props.document.priority==="Low" && <Text px={"5"} align={"center"} fontWeight="bold" border="2px solid" borderRadius="full" bg={"green"} color="white">{props.document.priority}</Text>}
        </Flex>
        {/* Type: background color is gray*/}
        <Flex direction={{base:"row" ,md:"column"}} gap={{base:"3", md:"0"}}>
          <Text fontWeight={600} textAlign="center" alignSelf={"center"}>Type: </Text>
          <Text px={"6"} align={"center"} fontWeight="bold" border="2px" borderRadius="full" bg={"gray"} color="white">{props.document.type}</Text>
          </Flex>
      </Flex>
      {/* displaying assigned devs */}
      <Flex gap={{ base: "2", md: "4" }} mt={{ base: "2", md: "10" }} wrap="wrap">
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
