import React, { PureComponent } from 'react';

import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';


const Rechart = () => {

    const data = [
        {
            name: 'Laptop',
            Quantity: 590,
            deliver: 800,
            stock: 1400,
            pending: 490,
        },
        {
            name: 'Mobile',
            Quantity: 868,
            deliver: 967,
            stock: 1506,
            pending: 590,
        },
        {
            name: 'Key-board',
            Quantity: 1397,
            deliver: 1098,
            stock: 989,
            pending: 350,
        },
        {
            name: 'Mouse',
            Quantity: 1480,
            deliver: 1200,
            stock: 1228,
            pending: 480,
        }

    ];

    return (
        <div>
            <h1 className='text-center text-info m-2' >Products Summary</h1>
            <div className='chart-area' >

                <ResponsiveContainer width="100%"  aspect={3}>
                    <ComposedChart
                       
                       
                       data={data}
                       
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="stock" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="deliver" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="Quantity" stroke="#ff7300" />
                        <Scatter dataKey="pending" fill="red" />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
}


export default Rechart;