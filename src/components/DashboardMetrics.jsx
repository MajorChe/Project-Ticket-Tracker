import { Center, chakra, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { BiCheckbox } from "react-icons/bi"

const Metrics = (props) => {
  const dataList = [
    { title: "One", value: 10, color: "#6ac17a" }, //green
    { title: "Two", value: 15, color: "#e75c5c" }, //red
    { title: "Three", value: 20, color: "#4763a5" }, //blue
  ];

  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const data = dataList.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: "grey"
      };
    }
    return entry;
  });

  return (
  <PieChart
    style={{
      fontSize: "8px"
    }}
    data={data}
    radius={"30"}
    segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
    segmentsShift={(index) => (index === selected ? 1 : 1)}
    animate
    label={({ dataEntry }) => dataEntry.value}
    labelStyle={{
      fill: "#fff",
      opacity: 0.75,
      pointerEvents: "none",
    }}
    onClick={(_, index) => {
      setSelected(index === selected ? undefined : index);
    }}
    onMouseOver={(_, index) => {
      setHovered(index);
    }}
    onMouseOut={() => {
      setHovered(undefined);
    }}
  />);
};

const CircleIcon = (props) => (
  <Icon viewBox='0 0 200 200' {...props}>
    <path
      fill='currentColor'
      d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    />
  </Icon>
)

export const DashboardMetrics = () => {
  return (
    <Flex direction={"column"} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={"center"} fontSize={"4xl"} fontWeight={"bold"}>
        Statistics
      </chakra.h1>
      <Flex wrap={"wrap"} fontWeight={"bold"} fontSize="lg">
        <Flex alignItems={"center"} align="center">
        <Metrics/>
        <Center w={"180px"} h={"150px"} border="2px solid green">
          <Flex direction={"column"}>
          <Text><CircleIcon color="#4763a5"/> Issue</Text>
          <Text><CircleIcon color="#e75c5c"/> Bug</Text>
          <Text><CircleIcon color="#6ac17a"/> Feature</Text>
          </Flex>
        </Center>
        </Flex>
        <Flex alignItems={"center"} align="center">
        <Metrics/>
        <Center w={"180px"} h={"150px"} border="2px solid green">
          <Flex direction={"column"}>
            <Text><CircleIcon color="#4763a5"/> High</Text>
            <Text><CircleIcon color="#e75c5c"/> Moderate</Text>
            <Text><CircleIcon color="#6ac17a"/> Low</Text>
          </Flex>
        </Center>
        </Flex>
        <Flex alignItems={"center"} align="center">
        <Metrics/>
        <Center w={"180px"} h={"150px"} border="2px solid green">
          <Flex direction={"column"}>
            <Text><CircleIcon color="#4763a5"/> Completed</Text>
            <Text><CircleIcon color="#e75c5c"/> InProgress</Text>
            <Text><CircleIcon color="#6ac17a"/> New</Text>
          </Flex>
        </Center>
        </Flex>
      </Flex>
    </Flex>
  );
};
