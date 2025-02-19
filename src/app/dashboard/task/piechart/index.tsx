import React, { FC } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface Data {
  name: string;
  value: number;
}

const data: Data[] = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 400 },
  { name: 'Group C', value: 400 },
];



const PieChartComp: FC = () => {
  return (

    <div
      className='flex justify-center items-center'
      style={{
        width: '100%',
        height: '400px',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
       
      <PieChart width={600} height={600}>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0071CE" stopOpacity={1} />
            <stop offset="100%" stopColor="rgba(0, 113, 206, 0)" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="10.71%" stopColor="rgba(255, 194, 32, 0)" stopOpacity={1} />
            <stop offset="93.32%" stopColor="#FFC220" stopOpacity={1} />
          </linearGradient>

          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="12.87%" stopColor="rgba(211, 31, 133, 0)" stopOpacity={1} />
            <stop offset="63.11%" stopColor="#D31F85" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Pie
          data={data}
          cx={300}  // Center of the pie chart (300px from the left, center of 600px wide)
          cy={300}  // Center of the pie chart (300px from the top, center of 600px tall)
          innerRadius={130}  // Increased inner radius
          outerRadius={190} // Increased outer radius
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === 0 ? 'url(#gradient2)'  : index === 1 ? 'url(#gradient1)' : 'url(#gradient3)'}
            />
          ))}
        </Pie>

      </PieChart>

      {/* Centering the image in the middle of the chart */}
      <div
        className='absolute'
        style={{
          top: '50%',  // Position 50% from the top of the container (which is the center of the chart)
          left: '50%', // Position 50% from the left of the container (which is the center of the chart)
          transform: 'translate(-50%, -50%)',  // This will move the element by half of its width and height to truly center it
        }}
      >
        <img src="/images/task/tasklogo.png" alt="Task Logo" />
      </div>

    </div>
  );
};

export default PieChartComp;
