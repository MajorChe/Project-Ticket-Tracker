import React from "react";
import logo from "../assets/logo.svg";
import { Link as ReachLink } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Image,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Avatar,
  Button,
  Divider,
} from "@chakra-ui/react";
import { FiHome, FiStar, FiSettings, FiMenu } from "react-icons/fi";

import { GoIssueOpened } from "react-icons/go";
import { DiCodeBadge } from "react-icons/di";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const LinkItems = [
  { name: "Tickets", icon: DiCodeBadge, link: "/project"},
  { name: "Settings", icon: FiSettings, link: "/project" },
  { name: "Admin", icon: FiSettings, link: "/project" },
];

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH={{ base: "0vh", md: "100vh" }}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: "200px" }}></Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  const { user } = useAuthContext();
  const {logout} = useLogout();
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "200px" }}
      pos="fixed"
      h="full"
      {...rest}
      align="center"
    >
      <Flex h="10" alignItems="center" mx="8" justifyContent="flex-end" mt={"2"}>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose}  border={"2px solid green"}/>
      </Flex>
      <Avatar name="Avatar" src={user.photoURL} size="lg" />
      <Flex h="20" alignItems="center" mx="8" justifyContent="center">
        <Text fontSize={"md"}>
          Welcome, <b>{user.displayName}</b>
        </Text>
      </Flex>
      <Text as={"hr"}  border={"1px solid black"} mb="3" mx={"3"}></Text>
      <ReachLink to={"/"}>
        <NavItem icon={FiHome}>Dashboard</NavItem>
      </ReachLink>
      {LinkItems.map((link) => (
        <ReachLink key={link.name} to={link.link}>
          {" "}
          {/* add route */}
          <NavItem icon={link.icon}>
            {link.name}
          </NavItem>
        </ReachLink>
      ))}
      {user && <Button display={{base: "flex", md: "none"}}bgColor={"blue.400"} color={"white"} _hover={{ bg: "blue.500"}} onClick={logout}>
          Logout
        </Button>}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Flex
      align="center"
      fontSize={"lg"}
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "#4299e1",
        color: "white",
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { user } = useAuthContext();
  const {logout} = useLogout();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      gap={"20px"}
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image src={logo} boxSize={{ base: "20px", md: "36px" }} />
      <ReachLink to="/">
        <Text fontWeight={"bold"} fontSize="lg">
          Project-Ticket-Tracker
        </Text>
      </ReachLink>
      {user && <Button display={{base: "flex", md: "none"}}bgColor={"blue.400"} color={"white"} _hover={{ bg: "blue.500"}} onClick={logout}>
          Logout
        </Button>}
    </Flex>
  );
};

export default SideBar;
