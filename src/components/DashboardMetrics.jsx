import { Center, chakra, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
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
    <Flex direction={"column"} pr={{base:"10",md:"0"}} pl={{base:"0",md:"100px"}} mb="150px">
      <chakra.h1 textAlign={"center"} fontSize={"4xl"} fontWeight={"bold"}>
        Ticket Statistics
      </chakra.h1>
      <Flex wrap={"wrap"} fontWeight={"bold"} fontSize="lg">
        <Flex alignItems={"center"} align="center" direction={"column"}>
          <Flex alignItems={"center"} align="center">
            <PieChartComponent value1={10} value2={20} value3={25} />
            <LabelComponent labels={["Issue", "Bug", "Feature"]} />
          </Flex>
          <Text fontSize={"2xl"} fontWeight="light">
            Tickets by type
          </Text>
        </Flex>
        <Flex alignItems={"center"} align="center" direction={"column"}>
          <Flex alignItems={"center"} align="center">
            <PieChartComponent value1={10} value2={20} value3={25} />
            <LabelComponent labels={["High", "Medium", "Low"]} />
          </Flex>
          <Text fontSize={"2xl"} fontWeight="light">
            Tickets by priority
          </Text>
        </Flex>
        <Flex alignItems={"center"} align="center" direction={"column"}>
          <Flex alignItems={"center"} align="center">
            <PieChartComponent value1={10} value2={20} value3={25} />
            <LabelComponent labels={["Completed", "InProgress", "New"]} />
          </Flex>
          <Text fontSize={"2xl"} fontWeight="light">
            Ticket Status
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
