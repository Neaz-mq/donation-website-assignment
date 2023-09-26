import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Label } from 'recharts';

const StatisticsChart = () => {
  // Initial total donation and your donation values
  const initialTotalDonation = 12; // Assuming the total donation is 12,000
  const [totalDonation, setTotalDonation] = useState(initialTotalDonation);
  const [yourDonation, setYourDonation] = useState(4); // Assuming you have donated 4,000

  // Calculate the total percentage and your percentage
  const totalPercentage = (totalDonation / initialTotalDonation) * 100;
  const yourPercentage = (yourDonation / initialTotalDonation) * 100;

  // Define colors for the total and your donation slices
  const COLORS = ['#FF444A', '#00C49F'];

  return (
    <div>
     
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={[
              { name: "Total Donation", value: totalPercentage },
              { name: "Your Donation", value: yourPercentage },
            ]}
            cx="50%"
            cy="50%"
            outerRadius={120}
            labelLine={false}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
              const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
              return (
                <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                  {`${percent.toFixed(2)}%`}
                </text>
              );
            }}
          >
            {[
              { name: "Total Donation", value: totalPercentage },
              { name: "Your Donation", value: yourPercentage },
            ].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="donation-bars flex gap-4 lg:gap-20 py-5">
      <p className='lg:ml-10'>Total Donation</p>
        <div className="donation-bar" style={{ backgroundColor: COLORS[0] }}>
          
          
        </div>
        <p>Your Donation</p>
        <div className="donation-bar" style={{ backgroundColor: COLORS[1] }}>
         
         
        </div>
      </div>
      <div>
        <button onClick={() => setYourDonation(yourDonation + 1000)}></button>
        {/* Add more buttons or logic to update your donation */}
      </div>
      <style>
        {`
          .donation-bars {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
          }
          .donation-bar {
            flex: 1;
            padding: 10px;
            text-align: center;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default StatisticsChart;
