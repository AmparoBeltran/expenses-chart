// option Using chart library

import React from 'react';
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import data from '../data.json'

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

export const options = {
responsive: true,
plugins: {
legend: {
position: 'top' //as const,
},
title: {
display: true,
text: 'Spending - Last 7 days',
},
},
};

const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
export const dataChart = {
labels,
datasets: [
{
// label: 'Dataset 1',
data: data.map((item) => item.amount),
backgroundColor: 'rgba(236, 119, 95, 1)',
},

    ],

};

export default function Spending() {
return <Bar options={options} data={dataChart} />;
}
