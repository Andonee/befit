import React, { useState, useEffect } from "react";
import { styled, Container } from "@mui/material";

import { CustomModal } from "../../../components";
import type { Rows } from "../../../components";
import { Button, TextField } from "../../../components/ui";

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
    // if (!values) return;
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
    <CustomModal title="Measurments" isOpen={isOpen}>
      <Wrapper>
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
        <ButtonsWrapper>
          <Button onClick={onSubmitHandler} variant="contained" color="primary">
            OK
          </Button>
          <Button onClick={onCancelHandler} variant="contained" color="error">
            Cancel
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    </CustomModal>
  );
};

const Wrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  background: `${theme.palette.snowy.main}`,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "24px",
  },
}));

const TextFieldWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;

const ButtonsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },

  "& button": {
    width: "100px",
  },
}));
