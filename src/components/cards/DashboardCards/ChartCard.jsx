import { Card } from "@mui/material";
import HistoryCandidateChart from "../../Charts/HistoryCandidateChart";
import HistoryHourChart from "../../Charts/HistoryHourChart";
import DashboardCardContent from "./CardContent";

export default function ChartCard() {
  return (
    <Card
      variant="outlined"
      sx={{ borderColor: "primary.main", p: { xs: 2, md: 3 } }}
    >
      <DashboardCardContent
        title="Historikk utleie"
        subheader="Siste 12 måneder"
      >
        <HistoryHourChart />
        <HistoryCandidateChart />
      </DashboardCardContent>
    </Card>
  );
}
