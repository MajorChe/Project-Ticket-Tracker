import { Center, chakra, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import PieChartComponent from "./PieChartComponent";

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const LabelComponent = (props) => {
  const { labels } = props;
  return (
    <Center w={"180px"} h={"150px"} border="2px solid green">
      <Flex direction={"column"}>
        <Text>
          <CircleIcon color="#4763a5" /> {labels[0]}
        </Text>
        <Text>
          <CircleIcon color="#e75c5c" /> {labels[1]}
        </Text>
        <Text>
          <CircleIcon color="#6ac17a" /> {labels[2]}
        </Text>
      </Flex>
    </Center>
  );
};

export const DashboardMetrics = () => {
  return (
    <Flex direction={"column"} px={{ base: 2, sm: 12, md: 17 }} py="2">
      <chakra.h1 textAlign={"center"} fontSize={"4xl"} fontWeight={"bold"}>
        Statistics
      </chakra.h1>
      <Flex wrap={"wrap"} fontWeight={"bold"} fontSize="lg">
        <Flex alignItems={"center"} align="center">
          <PieChartComponent value1={10} value2={20} value3={25}/>
          <LabelComponent labels={["Issue", "Bug", "Feature"]} />
        </Flex>
        <Flex alignItems={"center"} align="center">
          <PieChartComponent value1={10} value2={20} value3={25}/>
          <LabelComponent labels={["High", "Moderate", "Low"]} />
        </Flex>
        <Flex alignItems={"center"} align="center">
          <PieChartComponent value1={10} value2={20} value3={25}/>
          <LabelComponent labels={["Completed", "InProgress", "New"]} />
        </Flex>
      </Flex>
    </Flex>
  );
};
