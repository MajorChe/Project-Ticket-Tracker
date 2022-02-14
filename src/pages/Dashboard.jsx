import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { DashboardMetrics } from "../components/DashboardMetrics";
import { Navbar } from "../components/Navbar";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
  <Flex direction={{ base: "column", md: "row" }}>
    <SideBar/>
    <Flex direction={"column"} w="100%">
      <Navbar/>
      {/* body starts here  */}
      <DashboardMetrics/>
    </Flex>
  </Flex>);
};

export default Dashboard;
