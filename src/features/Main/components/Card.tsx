import React from "react";
import { Paper, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardProps = {
  label: string;
  url: string;
};

export const Card = (props: CardProps) => {
  const { label, url } = props;
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(url, { replace: true });
  };
  return <Wrapper onClick={onClickHandler}>{label}</Wrapper>;
};

const Wrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: `${theme.palette.grayDark.main}`,
  fontSize: 26,
  fontWeight: "bold",
  width: "100%",
  padding: "25px 30px",
  textAlign: "center",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: `${theme.palette.grayLight.main}`,
  },
}));
