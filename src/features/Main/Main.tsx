import React from "react";
import { styled } from "@mui/material";

import { menuItems } from "../../components/DesktopNavigation";
import { Card } from "./components";
import { Layout } from "../../components/Layout";

export const Main = () => {
  return (
    <Wrapper title="Main">
      <CardsWrapper>
        {menuItems.map((item) => (
          <Card label={item.label} url={item.url} key={item.url} />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  flexGrow: 1,
}));

const CardsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
