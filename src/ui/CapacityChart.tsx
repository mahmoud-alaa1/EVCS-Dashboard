import { useEffect, useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const data = [{ name: "L1", value: 25, fill: "url(#progressGradient)" }];

const CircularProgressChart = () => {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Retrieve the CSS variable value
    const rootStyles = getComputedStyle(document.documentElement);
    const bgColor = rootStyles.getPropertyValue("--light-green-400").trim();
    setBackgroundColor(bgColor);
  }, []);

  return (
    <ResponsiveContainer height={`80%`}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="100%"
        barSize={25}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />

        <defs>
          <linearGradient id="progressGradient">
            <stop offset="0%" stopColor="#CAECAC" />
            <stop offset="50.52%" stopColor="#66AD28" />
            <stop offset="100%" stopColor="#CAECAC" />
          </linearGradient>
        </defs>

        <RadialBar
          background={{ fill: backgroundColor }}
          dataKey="value"
          fill="url(#progressGradient)"
          cornerRadius={10}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="capacity-text"
          fill="currentColor"
        >
          25%
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default CircularProgressChart;
