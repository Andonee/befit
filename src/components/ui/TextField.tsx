import { TextField as MaterialTextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

export const TextField = (props: TextFieldProps) => {
  return <MaterialTextField InputLabelProps={{ shrink: true }} {...props} />;
};
