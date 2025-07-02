/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { graphBarColors } from "@/constants";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";

interface CourseDetailsGraphProps {
  chartValues: Record<string, number>;
  width?: number | string;
  height?: number | string;
  barGap?: number | string;
  barSize?: number | string;
}

export default function CourseDetailsGraph({
  chartValues,
  width = "100%",
  height = 500,
  barGap = 20,
  barSize = 50,
}: CourseDetailsGraphProps) {
  const keys = Object.keys(chartValues);
  const chartData = [
    {
      name: "Topics",
      ...chartValues,
    },
  ];

  return (
    <div>
      <ResponsiveContainer width={width} height={height}>
        <BarChart data={chartData} barGap={barGap} barSize={barSize}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <YAxis
            label={{
              value: "Number of Concepts",
              angle: -90, // rotate the label vertically
              position: "insideLeft", // place inside the axis on the left
              offset: 10, // distance from axis line
              style: {
                textAnchor: "middle",
                fontSize: 14,
                fontWeight: "600",
              },
            }}
          />
          <Legend
            content={CustomLegend}
            layout="vertical"
            className="mr-auto"
            wrapperStyle={{
              paddingTop: 20,
              color: "black",
            }}
          />
          {keys.map((key, index) => (
            <Bar
              maxBarSize={48}
              key={key}
              dataKey={key}
              fill={graphBarColors[index % graphBarColors.length]}
              name={key}
              radius={[8, 8, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomLegend = ({ payload }: any) => {
  if (!payload) return null;
  return (
    <div className="flex flex-col pt-4 gap-1">
      {payload.map((entry: any) => (
        <div key={entry.value} className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-sm"
            style={{
              backgroundColor: entry.color,
            }}
          />

          <span className="text-black">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
