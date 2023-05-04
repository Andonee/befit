import React, { useState } from "react";
import { styled } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

import { CustomTable, Layout } from "../../components";
import type { Headers, Rows } from "../../components";
import { MealModal, BMR } from "./components";

const calculateSum = (items: Rows) => {
  const sum = items.reduce(
    (acc, curr) => {
      return {
        kcal: acc.kcal + +curr.kcal,
        carbo: acc.carbo + +curr.carbo,
        protain: acc.protain + +curr.protain,
        fat: acc.fat + +curr.fat,
      };
    },
    { kcal: 0, carbo: 0, protain: 0, fat: 0 }
  );
  return sum;
};

export const MealsMonitoring = () => {
  const [items, setItems] = useState<Rows>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Rows[0]>();

  const total = calculateSum(items);

  const headers: Headers = {
    product: "Product",
    kcal: `kcal (${total.kcal})`,
    carbo: `carbo (${total.carbo})`,
    protain: `protain (${total.protain})`,
    fat: `fat (${total.fat})`,
  };

  const onRemove = (id: string) => {
    setItems((prevState) => prevState.filter((row) => row.id !== id));
  };

  const onAdd = () => {
    const newElement = {
      id: nanoid(),
      product: "",
      kcal: "",
      carbo: "",
      protain: "",
      fat: "",
    };
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

  return (
    <Layout title="Meals monitoring">
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
            <MealModal
              onClose={onModalClose}
              onSubmit={onSubmit}
              isOpen={isOpen}
              values={selectedItem}
            />
          )}
        </TableWrapper>
        <BMRWrapper>
          <BMR />
        </BMRWrapper>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
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
    width: "70%",
  },
}));

const BMRWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "30%",
  },
}));
