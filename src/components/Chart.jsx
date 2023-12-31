import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale ,Legend ,Title ,Tooltip, LinearScale,PointElement, LineElement} from 'chart.js';

ChartJS.register(CategoryScale ,Legend ,Title ,Tooltip, LinearScale,PointElement, LineElement)




const Chart = ({arr=[], currency, days}) => { 

const price = []
const date=[]
for (let i=0 ; i<arr.length; i++){
    if (days ==="24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else date.push(new Date(arr[i][0]).toDateString());
    price.push(arr[i][1])
}

    const data = {labels:date, datasets:[{label:`prices in ${currency}`,data:price,borderColor:"rgb (255,99,132)", backgroundColor:"rgba(255,99,132,0.5)"}]}
return (
    <Line options={{responsive: true}}
    data={data} />


)
}

export default Chart
