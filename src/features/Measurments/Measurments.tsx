import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { CustomTable, Layout } from "../../components";
import type { Headers, Rows } from "../../components";
import { MeasurmentsModal } from "./components";

const headers: Headers = {
  part: "Body part",
  base: "Base measurment",
  current: "Current measurment",
};

export const Measurments = () => {
  const [items, setItems] = useState<Rows>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Rows[0]>();

  const onRemove = (id: string) => {
    setItems((prevState) => prevState.filter((row) => row.id !== id));
  };

  const onAdd = () => {
    const newElement = { id: nanoid(), part: "", base: "", current: "" };
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
    <Layout title="Measurments">
      <CustomTable
        headers={headers}
        rows={items}
        actions={true}
        onRemove={onRemove}
        onAdd={onAdd}
        onEdit={onModalOpen}
      />
      {selectedItem && (
        <MeasurmentsModal
          onClose={onModalClose}
          onSubmit={onSubmit}
          isOpen={isOpen}
          values={selectedItem}
        />
      )}
    </Layout>
  );
};
