import { styled, Theme } from "@mui/material";

import { Card } from "../../../components/ui";

type WeightCardProps = {
  label: string;
  date?: string | number;
  value: string | number;
  type: "starting" | "current" | "goal";
};

const getColor = (theme: Theme, type: WeightCardProps["type"]) => {
  switch (type) {
    case "current":
      return `${theme.palette.warning.main}`;
    case "starting":
      return `${theme.palette.primary.main}`;
    default:
      return `${theme.palette.success.main}`;
  }
};

export const WeightCard = (props: WeightCardProps) => {
  const { label, date, value, type } = props;

  return (
    <StyledCard>
      <TitleWrapper type={type}>{label}</TitleWrapper>
      {type !== "goal" && (
        <LabelWrapper>
          Date of measurment: <span>{date}</span>
        </LabelWrapper>
      )}
      <LabelWrapper>
        Weight [kg]: <span>{value}</span>
      </LabelWrapper>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  background: `${theme.palette.snowy.main}`,
  color: `${theme.palette.grayDark.main}`,
  padding: "10px 20px",
  width: "100%",

  [theme.breakpoints.up("lg")]: {
    width: "30%",
  },
}));

const TitleWrapper = styled("h2")<{ type: WeightCardProps["type"] }>(
  ({ theme, type }) => ({
    color: getColor(theme, type),
  })
);

const LabelWrapper = styled("div")(({ theme }) => ({
  color: `${theme.palette.grayDark.main}`,

  "& span": {
    fontWeight: "bold",
  },
}));
