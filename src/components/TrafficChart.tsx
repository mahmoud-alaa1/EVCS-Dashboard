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
const data = Array.from({ length: 5 }, (_, i) => ({
  week: `Week ${i + 1}`,
  Dubai: Math.floor(10 + Math.random() * 5), // Random traffic data between 15 and 25
  Sharjah: Math.floor(15 + Math.random() * 8), // Random traffic data between 12 and 20
  AbuDhabi: Math.floor(20 + Math.random() * 6), // Random traffic data between 10 and 16
}));
const CustomLegend = (props) => {
  const legendItems = [
    { name: "Dubai", color: "url(#colorDubai)", solidColor: "#3D7DCA" }, // solid color used for legend circle
    { name: "Sharjah", color: "url(#colorSharjah)", solidColor: "#78B94C" },
    { name: "AbuDhabi", color: "url(#colorAbuDhabi)", solidColor: "#758C9E" },
  ];
  const { payload } = props;
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      {legendItems.map((entry, index) => (
        <div
          className="flex items-center justify-center w-full"
          key={`item-${index}`}
          style={{ marginRight: 20, fontFamily: "Inter", fontSize: 14 }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              color: entry.solidColor,
              marginRight: 5,
              borderRadius: "50%",
            }}
          >
            &#9679;&nbsp;{entry.name}
          </span>
        </div>
      ))}
    </div>
  );
};
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
        }}
      >
        <CartesianGrid
          strokeLinecap="square"
          color="##1D170F"
          strokeWidth={0.4}
        />
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
          domain={[10, 20]}
          interval={"preserveStartEnd"}
          tickCount={20}
        />
        <Tooltip />
        <Legend content={<CustomLegend />} />

        <Line
          type="bumpX"
          dataKey="Dubai"
          stroke="url(#colorDubai)"
          strokeWidth={7}
          dot={false}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Sharjah"
          stroke="url(#colorSharjah)"
          strokeWidth={7}
          dot={false}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="AbuDhabi"
          stroke="url(#colorAbuDhabi)"
          strokeWidth={7}
          dot={false}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
