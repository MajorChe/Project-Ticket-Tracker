import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const PieChartComponent = (props) => {
  const dataList = [
    { title: "One", value: props.value1, color: "#6ac17a" }, //green
    { title: "Two", value: props.value2, color: "#e75c5c" }, //red
    { title: "Three", value: props.value3, color: "#4763a5" }, //blue
  ];

  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const data = dataList.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: "grey",
      };
    }
    return entry;
  });

  return (
    <PieChart
      style={{
        fontSize: "8px",
      }}
      data={data}
      radius={"25"}
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
    />
  );
};

export default PieChartComponent;
