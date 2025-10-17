import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getSharedDashboardData } from '../../../data/sharedData';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea,
} from "recharts";

const Charts = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const [chartData, setChartData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Get shared data that all components will use
    const sharedData = getSharedDashboardData(selectedPeriod);
    setChartData(sharedData.chartData);
  }, [selectedPeriod]);

  if (chartData.length === 0) {
    return null; // LazyComponent will handle the skeleton
  }

  return (
    <motion.div 
      className="w-full h-auto lg:h-[291px] bg-white rounded-xl p-4 lg:p-6 border border-gray-200"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-4">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">
          Working Capital
        </h3>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#82ca9d]"></div>
              <span className="text-sm text-gray-600">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffc658]"></div>
              <span className="text-sm text-gray-600">Expenses</span>
            </div>
          </div>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 w-full lg:w-auto"
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="year">Last Year</option>
          </select>
        </div>
      </div>
      <div className="h-[200px] lg:h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <defs>
              <linearGradient id="showerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FAFBFE00" />
                <stop offset="100%" stopColor="#F2F6FC" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}K`}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#82ca9d"
              strokeWidth={3}
              dot={false}
              activeDot={{ 
                r: 6, 
                stroke: "#82ca9d", 
                strokeWidth: 2,
                fill: "#82ca9d"
              }}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#ffc658"
              strokeWidth={3}
              dot={false}
              activeDot={{ 
                r: 6, 
                stroke: "#ffc658", 
                strokeWidth: 2,
                fill: "#ffc658"
              }}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  // Get the specific line that was hovered by checking which line has the closest point
                  const hoveredData = payload.find(p => p.payload && p.payload[`${p.dataKey}`] !== undefined);
                  if (!hoveredData) return null;
                  
                  const isPositive = hoveredData.dataKey === "income";
                  const sign = isPositive ? "+" : "-";
                  const value = hoveredData.value.toLocaleString();
                  
                  return (
                    <div style={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      fontSize: "12px",
                      fontWeight: "500"
                    }}>
                      <div style={{ color: "#374151" }}>
                        {sign}{value}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
              cursor={{
                stroke: "#3b82f6",
                strokeWidth: 1,
                strokeDasharray: "5 5"
              }}
            />
            {hoveredIndex !== null && (
              <ReferenceLine
                x={chartData[hoveredIndex]?.name}
                stroke="#3b82f6"
                strokeWidth={1}
                strokeDasharray="5 5"
              />
            )}
            {hoveredIndex !== null && (
              <ReferenceArea
                x1={chartData[hoveredIndex]?.name}
                x2={chartData[hoveredIndex]?.name}
                fill="url(#showerGradient)"
                fillOpacity={0.3}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default Charts;
