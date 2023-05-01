import React, { useState, useMemo } from "react";
import { styled } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

import { CustomTable, Layout, LineChart } from "../../components";
import type { Headers, Rows } from "../../components";
import { WeightCards, WeightModal } from "./components";

const headers: Headers = {
  date: "Date",
  weight: "Weight",
  goal: "Goal",
};

export const WeightMonitoring = () => {
  const [items, setItems] = useState<Rows>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Rows[0]>();

  const onRemove = (id: string) => {
    setItems((prevState) => prevState.filter((row) => row.id !== id));
  };

  const onAdd = () => {
    const getGoal = items[items.length - 1]?.goal || "";
    const newElement = { id: nanoid(), date: "", weight: "", goal: getGoal };
    setItems((prevState) => [...prevState, newElement]);
  };

  const onSubmit = (values: Rows[0]) => {
    const currentState = items;
    const idx = currentState.findIndex((item) => item.id === values.id);

    if (idx === -1) return;
    currentState[idx] = values;

    setItems(currentState);
    setIsOpen(false);
  };

  const onModalOpen = (id: string) => {
    const idx = items.findIndex((item) => item.id === id);
    const selectedItem = items[idx];

    setSelectedItem(selectedItem);
    setIsOpen(true);
  };

  const onModalClose = () => setIsOpen(false);

  const startingWeight = { date: items[0]?.date, weight: items[0]?.weight };
  const currentWeight = {
    date: items.filter((item) => item.weight !== "")[
      items.filter((item) => item.weight !== "").length - 1
    ]?.date,
    weight: items.filter((item) => item.weight !== "")[
      items.filter((item) => item.weight !== "").length - 1
    ]?.weight,
  };
  const goalWeight = {
    weight: items.filter((item) => item.weight !== "")[
      items.filter((item) => item.weight !== "").length - 1
    ]?.goal,
  };

  return (
    <Layout title="Weight monitoring">
      <WeightCards
        startingWeight={startingWeight}
        currentWeight={currentWeight}
        goalWeight={goalWeight}
      />
      <Wrapper>
        <TableWrapper>
          <CustomTable
            headers={headers}
            rows={items}
            actions={true}
            onRemove={onRemove}
            onAdd={onAdd}
            onEdit={onModalOpen}
            maxHeight={400}
          />
          {selectedItem && (
            <WeightModal
              onClose={onModalClose}
              onSubmit={onSubmit}
              isOpen={isOpen}
              values={selectedItem}
            />
          )}
        </TableWrapper>
        <ChartWrapper>
          <LineChart
            data={items
              .filter((el) => el.date)
              .map((el) => {
                return {
                  ...el,
                  weight: +el.weight,
                };
              })}
            FirstLineDataKey={"weight"}
            XAxisDataKey={"date"}
            FirstLineColor="#ed6c02"
            SecondLineColor="#2e7d32"
            SecondLineDataKey="goal"
            width={400}
            height={600}
          />
        </ChartWrapper>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  height: "50%",
  width: "90%",
  gap: "20px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

const TableWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "40%",
  },
}));

const ChartWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "60%",
  },
}));
