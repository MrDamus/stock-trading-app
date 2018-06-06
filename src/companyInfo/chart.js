import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Chart = ({ data }) => (
<LineChart width={730} height={250} data={data}
      // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      style={{ alignSelf: 'center' }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis dataKey="open" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="open" stroke="#6684d8" />
      <Line type="monotone" dataKey="close" stroke="#dd7373" />
    </LineChart>
);

Chart.propTypes = {
  data: PropTypes.array
};

export default Chart;