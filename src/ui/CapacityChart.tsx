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
    <ResponsiveContainer width="100%" >
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="90%"
        outerRadius="90%"
        barSize={20}
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
          background={{ fill: backgroundColor }} // Use the CSS variable value
          dataKey="value"
          fill="url(#progressGradient)" // Keep the gradient fill for the progress
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
