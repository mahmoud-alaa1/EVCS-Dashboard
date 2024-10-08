import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "1AM",
    val: 200,
  },
  {
    name: "3AM",
    val: 300,
  },
  {
    name: "5AM",
    val: 400,
  },
  {
    name: "7AM",
    val: 300,
  },
  {
    name: "9AM",
    val: 200,
  },
  {
    name: "11AM",
    val: 100,
  },
];

export default function HoursChart() {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="val" fill="url(#colorUv)" />
        <XAxis
          dataKey="name"
          tick={{ fill: "#9C907F", fontFamily: "Inter", fontSize: 14 }}
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#9fff4b"  />
            <stop offset="95%" stopColor="#132800"  />
          </linearGradient>
        </defs>
        <YAxis
          tick={{ fill: "#9C907F", fontFamily: "Inter", fontSize: 14 }}
          tickFormatter={(value) => `$ ${value}`}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
