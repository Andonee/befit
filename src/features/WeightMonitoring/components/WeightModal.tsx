import React, { useState, useEffect } from "react";
import { styled } from "@mui/material";

import { FormModal } from "../../../components";
import type { Rows } from "../../../components";
import { TextField } from "../../../components/ui";

type WeightModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Rows[0]) => void;
  values: Rows[0];
};

export const WeightModal = (props: WeightModalProps) => {
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
      title="Measurments"
      isOpen={isOpen}
      onClose={onCancelHandler}
      onSubmit={onSubmitHandler}
      values={state}
    >
      <TextFieldWrapper>
        <TextField
          value={state.date || ""}
          onChange={onChangeHandler}
          name="date"
          size="small"
          label="Date"
          type={"date"}
        />
        <TextField
          value={state.weight || ""}
          onChange={onChangeHandler}
          name="weight"
          size="small"
          label="Weight"
        />
        <TextField
          value={state.goal || ""}
          onChange={onChangeHandler}
          name="goal"
          size="small"
          label="Goal"
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
