import React, { useState, useEffect } from "react";
import { styled, Container } from "@mui/material";

import { CustomModal } from "./";
import type { Rows } from "./";
import { Button } from "./ui";

type FormModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Rows[0]) => void;
  values: Rows[0];
  children: React.ReactNode;
};

export const FormModal = (props: FormModalProps) => {
  const { isOpen, onClose, onSubmit, values, children, title } = props;
  const [state, setState] = useState<Rows[0]>(values);

  useEffect(() => {
    setState(values);
  }, [values]);

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
    <CustomModal title={title} isOpen={isOpen}>
      <Wrapper>
        {children}
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
