import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { DashboardMetrics } from "../components/DashboardMetrics";
import { Navbar } from "../components/Navbar";
import SideBar from "../components/SideBar";
import TicketBox from "../components/TicketBox";

const Dashboard = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <SideBar />
      <Flex direction={"column"} w="100%">
        <Navbar />
        <DashboardMetrics />
        <Flex mt={"20px"} justifyContent="center" gap={"100px"} wrap="wrap" px={{ base: 2, sm: 12, md: 1 }}>
          <TicketBox />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
