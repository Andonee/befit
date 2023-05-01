import React from "react";
import {
  ResponsiveContainer,
  LineChart as Chart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type LineChartProps = {
  width?: number;
  height?: number;
  data: { [key: string]: string | number }[];
  FirstLineDataKey: string;
  SecondLineDataKey?: string;
  XAxisDataKey: string;
  margin?: { top: number; right: number; bottom: number; left: number };
  FirstLineColor?: `#${string}`;
  SecondLineColor?: `#${string}`;
  GridColor?: `#${string}`;
};

export const LineChart = (props: LineChartProps) => {
  const {
    data,
    FirstLineDataKey,
    SecondLineDataKey,
    XAxisDataKey,
    margin = { top: 5, right: 20, bottom: 5, left: 0 },
    FirstLineColor,
    SecondLineColor,
    GridColor,
  } = props;
  return (
    <ResponsiveContainer>
      <Chart data={data} margin={margin}>
        <Line
          type="monotone"
          dataKey={FirstLineDataKey}
          stroke={FirstLineColor}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={XAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={SecondLineDataKey}
          stroke={SecondLineColor}
        />
      </Chart>
    </ResponsiveContainer>
  );
};
