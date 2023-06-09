import React, { useState, useEffect } from "react";
import { styled } from "@mui/material";

import { FormModal } from "../../../components";
import type { Rows } from "../../../components";
import { TextField } from "../../../components/ui";

type MeasurmentsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Rows[0]) => void;
  values: Rows[0];
};

export const MeasurmentsModal = (props: MeasurmentsModalProps) => {
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
          value={state.part || ""}
          onChange={onChangeHandler}
          name="part"
          size="small"
          label="Body part"
        />
        <TextField
          value={state.base || ""}
          onChange={onChangeHandler}
          name="base"
          size="small"
          label="Base measurment"
        />
        <TextField
          value={state.current || ""}
          onChange={onChangeHandler}
          name="current"
          size="small"
          label="Current measurment"
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
