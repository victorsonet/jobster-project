import React, { useState } from "react";
import BarChartComponent from "./BarChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useSelector } from "react-redux";
import AreaChartComponent from "./AreaChart";

function ChartsContainer() {
  const [barChart, setBartChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBartChart((prev) => !prev)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
      <AreaChartComponent />
    </Wrapper>
  );
}

export default ChartsContainer;
