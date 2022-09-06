import { Card, Box, Stack, Typography, Divider } from "@mui/material";
import React from "react";
import DashboardCardContent from "./CardContent";
import { holdbackData } from "../../../utils/data/DashboardData/DashboardData";
import Header from "../../Typography/Header";
import TextBtn from "../../Buttons/TextButton";

export default function EconomyCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        height: { xs: "auto", md: "430px" },
        borderColor: "customPurple.main",
        p: { xs: 1, md: 2 },
      }}
    >
      <DashboardCardContent title="Økonomi">
        <Stack spacing={6}>
          {holdbackData.map((economy) => {
            return (
              <Box
                key={economy.id}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                  borderBottom: `2px solid ${economy.colour}`,
                }}
              >
                <Header variant="subtitle2">{economy.title}</Header>
                <Box>
                  <Typography variant="largerNumbers" sx={{ textAlign: "end" }}>
                    {economy.number}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
        <Box sx={{ textAlign: "end", mt: 4 }}>
          <TextBtn size="medium" color="secondary">
            Se økonomi
          </TextBtn>
        </Box>
      </DashboardCardContent>
    </Card>
  );
}
