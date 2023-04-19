import React from "react";
import { IconButton as MuiIconButton } from "@mui/material";
import type { IconButtonProps } from "@mui/material";

type IconButtonType = IconButtonProps & { icon: React.ReactNode };

export const IconButton = (props: IconButtonType) => {
  const { icon, ...restProps } = props;
  return <MuiIconButton {...restProps}>{icon}</MuiIconButton>;
};
