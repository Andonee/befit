import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  styled,
} from "@mui/material";

type CustomModalProps = {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
};

export const CustomModal = (props: CustomModalProps) => {
  const { isOpen, title, children } = props;
  return (
    <Dialog fullWidth maxWidth="md" open={isOpen}>
      {title && (
        <>
          <StyledTitle>{title}</StyledTitle> <Divider />
        </>
      )}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

const StyledTitle = styled(DialogTitle)(({ theme }) => ({
  fontWeight: 700,
  color: `${theme.palette.grayDark.main}`,
}));
