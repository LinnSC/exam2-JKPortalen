import { Card, Divider, Stack, Box } from "@mui/material";
import ContainedBtn from "../../Buttons/ContainedButton";
import DashboardCardContent from "./CardContent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TimeSheetTable from "../../tables/DashboardTables/TimeSheetTable";
import Header from "../../Typography/Header";
import { useNavigate } from "react-router-dom";
import TextBtn from "../../Buttons/TextButton";

export default function TimeSheetCard() {
  const navigate = useNavigate();
  const navTo = () => {
    navigate(`/timelister`);
  };
  return (
    <Card
      variant="outlined"
      sx={{ borderColor: "primary.main", p: { xs: 2, md: 3 } }}
    >
      <DashboardCardContent title="Ubehandlede timelister">
        <Stack spacing={3}>
          <Header variant="subtitle2">Kunde 1</Header>
          <Divider />
          <TimeSheetTable />

          <Header variant="subtitle2">Kunde 2</Header>
          <Divider />
          <TimeSheetTable />

          <Box sx={{ textAlign: "end" }}>
            <TextBtn size="medium" color="secondary">
              Se alle timelister
            </TextBtn>
          </Box>
        </Stack>
      </DashboardCardContent>
    </Card>
  );
}
