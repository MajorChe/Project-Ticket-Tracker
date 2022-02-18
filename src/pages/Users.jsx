import { Avatar, AvatarBadge, Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { useCollection } from "../hooks/useCollection";
import SideBar from "../components/SideBar";
import { Navbar } from "../components/Navbar";

export const Users = () => {
  const { documents } = useCollection("users");
  console.log(documents);
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <SideBar />
      <Flex direction={"column"} w="100%" bgColor={"gray.100"}>
        <Navbar />
        <Text fontSize={{ base: "xl", md: "xl" }} p="5">List of Users</Text>
        <Flex
          mt={"20px"}
          direction={{base:"column",md:"row"}}
          // height={"80%"}
          wrap="wrap"
          // justifyContent={"space-around"}
          px={{ base: 2, sm: 12, md: 12 }}
          mx={{base:"20px",md:"150px"}}
        >
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>User</Th>
                <Th>Online Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {documents
                ? documents.map((user, index) => {
                    return (
                      <Tr key={index}>
                        <Td fontSize={"lg"}>{index + 1}. {user.displayName}</Td>
                        <Td>
                          <Avatar size={"md"} src={user.photoURL}>
                            {user.online && <AvatarBadge boxSize="1.25em" bg="green.500" />}
                          </Avatar>
                        </Td>
                      </Tr>
                    );
                  })
                : null}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
};
