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
import { useAuthContext } from "../hooks/useAuthContext";

export const Navbar = () => {
  const { user } = useAuthContext();
  return (
    <Flex
      justifyContent={{ base: "center", md: "space-between" }}
      p={{ base: "0px", md: "25px" }}
      bg={useColorModeValue("blue.100", "gray.800")}
      wrap="wrap"
      gap={{ base: "0px", md: "0px" }}
    >
      <Flex
        align={"center"}
        gap={{ base: "3px", md: "10px" }}
        wrap={"wrap"}
        display={{ base: "none", md: "flex" }}
      >
        <Image src={logo} boxSize={{ base: "0px", md: "36px" }} />
        <ReachLink to="/">
          <Text fontWeight={"bold"} fontSize={{ base: "xs", md: "2xl" }}>
            Project-Ticket-Tracker
          </Text>
        </ReachLink>
      </Flex>
      <HStack display={{ base: "none", md: "flex" }}>
        {!user && (
          <>
            <ReachLink to={"/login"}>
              <Button
                bgColor={"blue.400"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Login
              </Button>
            </ReachLink>
            <ReachLink to={"/signup"}>
              <Button
                bgColor={"blue.400"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Signup
              </Button>
            </ReachLink>
          </>
        )}
      </HStack>
    </Flex>
  );
};
