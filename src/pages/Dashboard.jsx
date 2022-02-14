import { Flex } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components/Navbar";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
  <Flex direction={{ base: "column", md: "row" }}>
    <SideBar/>
    <Flex direction={"column"} w="100%">
      <Navbar/>
    </Flex>
  </Flex>);
};

export default Dashboard;
