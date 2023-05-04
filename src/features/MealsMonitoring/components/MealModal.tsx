import React, { useState, useEffect } from "react";
import { styled } from "@mui/material";

import { FormModal } from "../../../components";
import type { Rows } from "../../../components";
import { TextField } from "../../../components/ui";

type MealModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Rows[0]) => void;
  values: Rows[0];
};

export const MealModal = (props: MealModalProps) => {
  const { isOpen, onClose, onSubmit, values } = props;
  const [state, setState] = useState<Rows[0]>(values);

  useEffect(() => {
    setState(values);
  }, [values]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = () => {
    if (!state) return;
    onSubmit(state);
    setState({} as Rows[0]);
  };

  const onCancelHandler = () => {
    onClose();
    setState({} as Rows[0]);
  };

  return (
    <FormModal
      title="Meal info"
      isOpen={isOpen}
      onClose={onCancelHandler}
      onSubmit={onSubmitHandler}
      values={state}
    >
      <TextFieldWrapper>
        <TextField
          value={state.product || ""}
          onChange={onChangeHandler}
          name="product"
          size="small"
          label="Product"
        />
        <TextField
          value={state.kcal || ""}
          onChange={onChangeHandler}
          name="kcal"
          size="small"
          label="kcal"
        />
        <TextField
          value={state.carbo || ""}
          onChange={onChangeHandler}
          name="carbo"
          size="small"
          label="carbo"
        />
        <TextField
          value={state.protain || ""}
          onChange={onChangeHandler}
          name="protain"
          size="small"
          label="protain"
        />
        <TextField
          value={state.fat || ""}
          onChange={onChangeHandler}
          name="fat"
          size="small"
          label="fat"
        />
      </TextFieldWrapper>
    </FormModal>
  );
};

const TextFieldWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;
