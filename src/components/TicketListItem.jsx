import { Avatar, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const TicketListItem = (props) => {
  const navigate = useNavigate();
  return (
    <>
    <Flex direction={"row"} gap={8} textAlign={"center"} wrap="wrap" px={{base:"1px", md:"2"}} py={{base:"1px", md:"2"}} mt={"5"}>
      <Text fontWeight={300} fontSize="md" onClick={() => navigate(`/ticket/${props.id}`)} cursor="pointer" _hover={{color: "blue", fontWeight: "bold"}}>1. Ticket 1</Text>
      <Text fontWeight={300} fontSize="sm" flex="1" maxWidth={{base: "40%", md:"77%"}}>Lorem ipsum dolor sit jahamet consectetur adipisicing elit. Alias consequuntur magnam </Text>
      <Avatar size={"sm"} src='https://bit.ly/ryan-florence' />
    </Flex>
    <Divider/>
    </>
  )
}

export default TicketListItem