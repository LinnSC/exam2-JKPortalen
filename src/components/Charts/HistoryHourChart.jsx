import { Box } from "@mui/material";
import React, { useState } from "react";
import { historyData } from "../../utils/data/DashboardData/ChartData";
import BarChart from "./BarChart";

export default function HistoryHourChart() {
  const [historyHourData, setHourData] = useState({
    labels: historyData.map((data) => data.month),
    datasets: [
      {
        label: "Timer per måned",
        data: historyData.map((data) => data.hours),
        backgroundColor: ["#6200EA"],
      },
    ],
  });

  return (
    <Box sx={{ maxWidth: 700 }}>
      <BarChart chartData={historyHourData} />
    </Box>
  );
}
