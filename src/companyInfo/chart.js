import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Chart = ({ chart }) => (
<LineChart width={730} height={250} data={chart}
      // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      style={{ alignSelf: 'center' }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis dataKey="open" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="open" stroke="#8884d8" />
      <Line type="monotone" dataKey="close" stroke="#8884d8" />
    </LineChart>
);

Chart.propTypes = {
  chart: PropTypes.array
};

export default Chart;