import { Box } from "@mui/material";
import React, { useState } from "react";
import { historyData } from "../../utils/data/DashboardData/ChartData";
import BarChart from "./BarChart";

export default function HistoryCandidateChart() {
  const [historyHourData, setHourData] = useState({
    labels: historyData.map((data) => data.month),
    datasets: [
      {
        label: "Medarbeidere per måned",
        data: historyData.map((data) => data.candidates),
        backgroundColor: ["#C51162"],
      },
    ],
  });

  return (
    <Box sx={{ maxWidth: 700 }}>
      <BarChart chartData={historyHourData} />
    </Box>
  );
}
