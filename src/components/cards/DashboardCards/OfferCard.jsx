import { Card, Stack, Box } from "@mui/material";
import ContainedBtn from "../../Buttons/ContainedButton";
import DashboardCardContent from "./CardContent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OfferTable from "../../tables/DashboardTables/OfferTable";
import AssignmentsTable from "../../tables/DashboardTables/AssignmentsTable";
import { useNavigate } from "react-router-dom";
import TextBtn from "../../Buttons/TextButton";

export default function OfferCard() {
  const navigate = useNavigate();
  const navTo = () => {
    navigate(`/oppdrag`);
  };
  return (
    <Card
      variant="outlined"
      sx={{ borderColor: "primary.main", p: { xs: 2, md: 3 } }}
    >
      <DashboardCardContent title="Åpne tilbud">
        <Stack spacing={3}>
          <OfferTable />
          <Box sx={{ textAlign: "end" }}>
            <TextBtn size="medium" color="secondary">
              Se alle tilbud
            </TextBtn>
          </Box>
        </Stack>
      </DashboardCardContent>
    </Card>
  );
}
