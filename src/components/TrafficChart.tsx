import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Generating 52 weeks of data for three cities
const data = Array.from({ length: 15 }, (_, i) => ({
  week: `Week ${i + 1}`,
  Dubai: Math.floor(15 + Math.random() * 10), // Random traffic data between 15 and 25
  Sharjah: Math.floor(12 + Math.random() * 8), // Random traffic data between 12 and 20
  AbuDhabi: Math.floor(10 + Math.random() * 6), // Random traffic data between 10 and 16
}));

export default function TrafficChart() {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorDubai" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3D7DCA" />
            <stop offset="100%" stopColor="#3D7DCA" />
          </linearGradient>
          <linearGradient id="colorSharjah" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#78B94C" />
            <stop offset="100%" stopColor="#78B94C" />
          </linearGradient>
          <linearGradient id="colorAbuDhabi" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#758C9E" />
            <stop offset="100%" stopColor="#758C9E" />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" vertical={false} />

        <YAxis
          tick={{ fill: "#9C907F", fontFamily: "Inter", fontSize: 14 }}
          tickFormatter={(value) => `Ξ ${value}`}
        />
        <Tooltip />
        <Legend
          style={{ fill: "#9C907F", fontFamily: "Inter", fontSize: 14 }}
          formatter={(value) => value}
        />

        <Line
          type="monotone"
          dataKey="Dubai"
          stroke="url(#colorDubai)"
          strokeWidth={5}
          dot={false}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Sharjah"
          stroke="url(#colorSharjah)"
          strokeWidth={5}
          dot={false}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="AbuDhabi"
          stroke="url(#colorAbuDhabi)"
          strokeWidth={5}
          dot={false}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
