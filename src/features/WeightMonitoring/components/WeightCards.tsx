import React from "react";
import { styled } from "@mui/material";

import { WeightCard } from "./WeightCard";

type WeightCardsProps = {
  startingWeight: { date: string | number; weight: string | number };
  currentWeight: { date: string | number; weight: string | number };
  goalWeight: { weight: string | number };
};

export const WeightCards = (props: WeightCardsProps) => {
  const { startingWeight, currentWeight, goalWeight } = props;
  return (
    <Wrapper>
      <WeightCard
        label="Starting weight"
        date={startingWeight.date}
        value={startingWeight.weight}
        type="starting"
      />
      <WeightCard
        label="Current weight"
        date={currentWeight.date}
        value={currentWeight.weight}
        type="current"
      />
      <WeightCard label="Goal" value={goalWeight.weight} type="goal" />
    </Wrapper>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "100%",
  gap: "20px",

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
