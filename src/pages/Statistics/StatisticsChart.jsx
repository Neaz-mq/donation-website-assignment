import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const StatisticsChart = () => {

    const data = [
        {name: "facebook", value: 200000},
        {name: "instagram", value: 400000},
       
    ]
    


    return (
        <div>
           <h2>Social media</h2> 
           <PieChart width={800} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="80%"
            cy="40%"
            outerRadius={80}
            fill="#00C49F"
        
            label
          />
          
          <Tooltip />
        </PieChart>
        </div>
    );
};

export default StatisticsChart;
