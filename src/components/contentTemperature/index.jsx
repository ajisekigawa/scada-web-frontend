import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
 Legend,
  ResponsiveContainer,
  LineChart,
  Label,
  CartesianGrid,
  ReferenceLine
} from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ContentTemperature = () => {
  const [gasConsumptionData, setGasConsumptionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5100/perdetikhariini2jamterahir"
        );
        const data = response.data.map((item) => ({
          ...item,
          createdAt: new Date(item.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          pv: item.pv,
        }));
        setGasConsumptionData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-2">
      <p className="fs-4 m-2">TEMPERATURE GRAPH</p>
      <div className="m-2"><ResponsiveContainer width="100%" height={550}>
       <LineChart width={600} height={300} data={gasConsumptionData}>
        <XAxis dataKey="createdAt" tick={{ fontSize: 10 }} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#1e90ff"
          strokeWidth={2}
          dot={false} // add this line to remove dots
        />
      <YAxis type="number" domain={[0, 40]} >
          <Label
            value="Value Celcius"
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <ReferenceLine
            y={30}
            stroke="red"
            strokeWidth={4}
            label={{
              value: "Max",
              position: "left",
              fill: "red",
            }}
          />
            <ReferenceLine
            y={25}
            stroke="red"
            strokeWidth={2}
            label={{
              value: "Min",
              position: "left",
              fill: "red",
            }}
          />
        {/* <Legend /> */}
        <Tooltip />
        <Legend/>
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
      </ResponsiveContainer></div>
      
    </div>
  );
};

export default ContentTemperature;
