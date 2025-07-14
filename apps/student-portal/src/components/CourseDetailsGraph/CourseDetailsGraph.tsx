"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface CourseDetailsGraphProps {
  chartValues: Record<string, number>;
  width?: number | string;
  height?: number | string;
  barGap?: number | string;
  barSize?: number | string;
}

export const graphBarColors = [
  "#2FBC88",
  "#7C60DE",
  "#F7485F",
  "#FFA528",
  "#F774A5",
  "#1E3A8A",
  "#D97706",
  "#047857",
  "#9D174D",
  "#6B7280",
];

export default function CourseDetailsGraph({
  chartValues,
  width = "100%",
  height = 500,
  barGap = 20,
  barSize = 50,
}: CourseDetailsGraphProps) {
  const keys = Object.keys(chartValues);

  const chartData = keys.map((key) => ({
    name: key,
    value: chartValues[key],
  }));

  return (
    <div>
      <ResponsiveContainer width={width} height={height}>
        <BarChart
          data={chartData}
          layout="vertical"
          barGap={barGap}
          barSize={barSize}
          margin={{
            left: 10,
            right: 10,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, "dataMax + 1"]}
            tickCount={chartData.length + 1}
            interval={0}
            allowDecimals={false}
            label={{
              value: "Number of Concepts",
              position: "insideBottom",
              offset: -20,
              style: {
                textAnchor: "middle",
                fontSize: 14,
                fontWeight: "600",
              },
            }}
          />
          <YAxis type="category" dataKey="name" />
          <Bar
            dataKey="value"
            name="Concepts"
            maxBarSize={48}
            radius={[0, 8, 8, 0]}
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={graphBarColors[index % graphBarColors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
