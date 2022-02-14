import { Avatar, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TicketBox = () => {
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"xl"}
          src={
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          alt={"Author"}
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            John Doe
          </Heading>
          <Text color={"gray.500"}>Frontend Developer</Text>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>23k</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>23k</Text>
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
