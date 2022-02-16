import { Avatar, AvatarBadge, Divider, Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const TicketListItem = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        direction={"row"}
        gap={8}
        align={"center"}
        wrap="wrap"
        px={{ base: "1px", md: "2" }}
        py={{ base: "1px", md: "2" }}
        mt={"5"}
      >
        <Text
          fontWeight={300}
          fontSize="md"
          onClick={() => navigate(`/ticket/${props.document.id}`)}
          cursor="pointer"
          _hover={{ color: "blue", fontWeight: "bold" }}
        >
          {props.id}. {props.document.ticketName}
        </Text>
        <Text
          fontWeight={300}
          fontSize="sm"
          flex="1"
          maxWidth={{ base: "40%", md: "70%" }}
          textAlign="center"
        >
          {props.document.ticketDescription}
        </Text>
        <Tooltip label={props.document.authorData[0]} bg='blue.100' color='black'>
        <Avatar size={"sm"} src={props.document.authorData[1]}>
          <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>
      </Tooltip>
      </Flex>
      <Divider />
    </>
  );
};

export default TicketListItem;
