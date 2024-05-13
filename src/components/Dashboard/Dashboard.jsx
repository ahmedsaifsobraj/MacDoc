import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='mt-10 p-5'>
            <h1 className='text-4xl  font-bold text-neutral-700 mb-5'>Dashboard</h1>
            <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 p-5'>
                <div className='mt-10'>

                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                <div>
                    <RadarChart outerRadius={90} width={730} height={250} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="month" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </div>
                <div>
                    <BarChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="sell" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div>
                    <RadialBarChart
                        width={730}
                        height={250}
                        innerRadius="10%"
                        outerRadius="80%"
                        data={data}
                        startAngle={180}
                        endAngle={0}
                    >
                        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='sell' />
                        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                        <Tooltip />
                    </RadialBarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;