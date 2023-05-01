import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material";

import { IconButton, Button } from "./ui";
import { EditIcon, RemoveIcon } from "./icons";

type Row<Type> = { [key: string]: Type };
export type Headers = Row<string>;
export type Rows = Array<Row<string | number> & { id: string }>;

type CustomTableProps = {
  headers: Headers;
  rows: Rows;
  actions?: boolean;
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
  onAdd?: () => void;
  maxHeight?: string | number;
};

export const CustomTable = (props: CustomTableProps) => {
  const { actions, onEdit, onRemove, rows, headers, onAdd, maxHeight } = props;

  const onEditClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    onEdit && onEdit(id);
  };

  const onRemoveClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    onRemove && onRemove(id);
  };

  return (
    <Wrapper>
      <TableContainer component={Paper} sx={{ maxHeight: maxHeight }}>
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <HeaderWrapper>
            <TableRow>
              {Object.values(headers).map((header, idx) => {
                return (
                  <TableCell align="right" key={idx}>
                    {header}
                  </TableCell>
                );
              })}
              <TableCell />
            </TableRow>
          </HeaderWrapper>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.keys(row)
                  .filter((el) => el !== "id")
                  .map((value, idx) => {
                    return (
                      <TableCell align="right" key={`${value}_${idx}`}>
                        {row[value] ? row[value] : "-"}
                      </TableCell>
                    );
                  })}
                {actions && (
                  <TableCell align="right">
                    <ActionButtonsWrapper>
                      <IconButton
                        size="small"
                        icon={<EditIcon />}
                        onClick={onEditClickHandler}
                        id={row.id}
                      />
                      <IconButton
                        size="small"
                        icon={<RemoveIcon />}
                        onClick={onRemoveClickHandler}
                        id={row.id}
                      />
                    </ActionButtonsWrapper>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {actions && (
        <ButtonWrapper>
          <Button onClick={onAdd} variant="contained">
            Add
          </Button>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  overflow: hidden;

  & table {
    min-width: 0;
  }
`;

const HeaderWrapper = styled(TableHead)`
  & th {
    font-weight: 700;
  }
`;

const ActionButtonsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  gap: 10px;
  margin-left: auto;
`;

const ButtonWrapper = styled("div")(({ theme }) => ({
  alignSelf: "flex-end",
}));
