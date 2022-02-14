import React from "react";
import logo from "../assets/logo.svg";
import { Link as ReachLink} from "react-router-dom";
import { AddIcon } from '@chakra-ui/icons'
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
} from "@chakra-ui/react";
import {
  FiHome,
  FiStar,
  FiMenu,
} from "react-icons/fi";

const LinkItems = [
  { name: "Project 1"},
  { name: "Project 2"},
  { name: "Project 3"},
  { name: "Project 4"},
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
      <Box ml={{ base: 0, md: 60 }}></Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <h1>hello</h1>
      <ReachLink to={"/"}><NavItem icon={FiHome}>Dashboard</NavItem></ReachLink>
      {LinkItems.map((link) => (
        <ReachLink key={link.name} to={"/"}> {/* add route */}
        <NavItem icon={FiStar} area="/signup">
          {link.name}
        </NavItem>
        </ReachLink>
      ))}
      <ReachLink to={"/"}><NavItem icon={AddIcon}>Add Project</NavItem></ReachLink>
    </Box>
  );
};

const NavItem = ({ icon, area, children, ...rest }) => {
  return (
        <Flex
          align="center"
          fontSize={"xl"}
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
    </Flex>
  );
};


export default SideBar;