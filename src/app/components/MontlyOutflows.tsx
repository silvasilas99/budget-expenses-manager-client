import axios from 'axios';
import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const MontlyOutflows = () => {
    const [data, setData] = useState([]);
    const COUNTER = "valor_pago";
    const GROUPER = "mes_movimentacao";
    const fetchData = async () => {
        const res = await axios.get(
            `http://localhost:8000/api/budget_exchanges/show/${COUNTER}/by/${GROUPER}`
        );
        return res.data.data;
    };

    useEffect(() => {
        fetchData()
            .then((p) => {
                setData(p)
            })
            .catch((e: Error) => console.log(e));
    }, []);

    return (
        <>
            <ResponsiveContainer width="100%" height="80%" >
                <AreaChart 
                    width={700} height={250} data={data}
                    margin={{ top: 30, right: 30, left: 30, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={GROUPER} tick={{ fill: "#eeeeee" }}/>
                    <YAxis tick={{ fill: "#eeeeee" }}/>
                    <Tooltip />
                    <Area type="monotone" dataKey={COUNTER} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}
export default MontlyOutflows;