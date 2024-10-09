import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { name: "Jan", charge: 12 },
  { name: "Feb", charge: 15 },
  { name: "Mar", charge: 18 },
  { name: "Apr", charge: 20 },
  { name: "May", charge: 21 },
  { name: "Jun", charge: 23 },
  { name: "Jul", charge: 19 },
];

export default function ChargesChart() {
  return (
    <ResponsiveContainer width="100%" height={`90%`} >
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          {/* Define the drop shadow filter */}
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />{" "}
            {/* Control the blur */}
            <feOffset dx="0" dy="4" result="offsetblur" />{" "}
            {/* Control the shadow position */}
            <feFlood floodColor="#11bc1128" result="color" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Define the gradient for the area fill */}
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#76B93C" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#76B93C" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          tick={{ fill: "#9C907F", fontFamily: "Inter", fontSize: 14 }}
          dataKey="name"
        />
        <YAxis
          tick={{ fill: "#9C907F", fontFamily: "Inter", fontSize: 14 }}
          tickFormatter={(value) => `Ξ ${value}`}
        />
        <CartesianGrid
          strokeLinecap="square"
          color="##1D170F"
          strokeWidth={0.4}
        />
        <Tooltip />

        <Area
          type="bumpX"
          dataKey="charge"
          stroke="#76B93C" // Use the defined gradient for stroke
          fillOpacity={0.5}
          strokeWidth={5}
          fill="url(#colorUv)" // Use the defined gradient for fill
          filter="url(#dropShadow)" // Apply the drop shadow filter here
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
