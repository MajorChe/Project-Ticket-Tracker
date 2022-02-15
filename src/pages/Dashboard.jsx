import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { DashboardMetrics } from "../components/DashboardMetrics";
import { Navbar } from "../components/Navbar";
import SideBar from "../components/SideBar";
import ProjectList from "../components/ProjectList";

const Dashboard = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} >
      <SideBar />
      <Flex direction={"column"} w="100%" bgColor={"gray.100"}>
        <Navbar />
        <Flex mt={"20px"} justifyContent="center" gap={"100px"} wrap="wrap" px={{ base: 2, sm: 12, md: 1 }}>
          <ProjectList />
        </Flex>
        <DashboardMetrics />
        <Box as="footer" role="contentinfo"  left={"0"} bottom={"0"} width={"100%"} py="5" px={{ base: '4', md: '8' }} bg={"#bee3f8"} color={"black"}>
        <Text align={"center"}>Created by Charit</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
