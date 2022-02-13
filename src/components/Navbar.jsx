import {
  Button,
  Flex,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <Flex
      justifyContent={{ base: "center", md: "space-between" }}
      p="30px"
      bg={useColorModeValue("gray.50", "gray.800")}
      wrap="wrap"
      gap={{ base: "20px", md: "0px" }}
    >
      <Flex
        align={"center"}
        letterSpacing="8px"
        gap={{ base: "0px", md: "20px" }}
        wrap={"wrap"}
      >
        <Image src={logo} boxSize={{ base: "20px", md: "36px" }} />
        <Text fontWeight={"bold"} fontSize={{ base: "xs", md: "xl" }}>
          Project-Ticket-Tracker
        </Text>
      </Flex>
      <HStack>
        <ReachLink to={"/login"}>
          <Button bgColor={"blue.400"} color={"white"} _hover={{ bg: "blue.500"}}>
            Login
          </Button>
        </ReachLink>
        <ReachLink to={"/signup"}>
          <Button bgColor={"blue.400"} color={"white"} _hover={{ bg: "blue.500"}}>
            Signup
          </Button>
        </ReachLink>
        <Button bgColor={"blue.400"} color={"white"} _hover={{ bg: "blue.500"}}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};
