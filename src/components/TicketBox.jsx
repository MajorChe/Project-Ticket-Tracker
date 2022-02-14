import { Avatar, Box, Button, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const TicketBox = (props) => {
  return (
    <Box
      maxW={"600px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >

      <Box p={6}>
        <Flex justifyContent={"space-between"}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"} textAlign="center">
            {props.title}
          </Heading>
          <Button
            w="130px"
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            >
            Add Project
          </Button>
        </Flex>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>Name</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>Description</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>Contributors</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default TicketBox;
