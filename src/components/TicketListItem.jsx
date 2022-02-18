import { Avatar, AvatarBadge, Divider, Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const TicketListItem = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        direction={{base:"column",md:"row"}}
        wrap="wrap"
        px={{ base: "1px", md: "2" }}
        py={{ base: "1px", md: "2" }}
        mt={"5"}
        gap="3"
      >
        <Flex gap={{base:"3",md:"none"}}>
          <Text display={{base:"flex", md:"none"}} fontWeight="bold">Name: </Text>
          <Text
            fontWeight={300}
            fontSize="md"
            onClick={() => navigate(`/ticket/${props.document.id}`)}
            cursor="pointer"
            _hover={{ color: "blue", fontWeight: "bold" }}
          >
            {props.id}. {props.document.ticketName}
          </Text>
        </Flex>
        <Flex gap={{base:"3",md:"none"}} width={{md:"78%"}} justify={{md:"center"}}>
          <Text display={{base:"flex", md:"none"}} fontWeight="bold">Description: </Text>
          <Text
            fontWeight={300}
            fontSize="sm"
            
            textAlign={{md:"center"}}
          >
            {props.document.ticketDescription}
          </Text>
        </Flex>
        <Flex gap={{base:"3",md:"none"}}>
          <Text display={{base:"flex", md:"none"}} fontWeight="bold">Author: </Text>
          <Tooltip label={props.document.authorData[0]} bg='blue.100' color='black'>
          <Avatar size={"sm"} src={props.document.authorData[1]}>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        </Tooltip>
      </Flex>
      </Flex>
      <Divider as={"hr"} border="3px solid black" mt="2"></Divider>
    </>
  );
};

export default TicketListItem;
