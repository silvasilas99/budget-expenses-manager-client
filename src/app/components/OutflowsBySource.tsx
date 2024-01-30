import axios from "axios";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const OutflowsBySource = () => {
    const [data, setData] = useState([]);
    const COUNTER = "valor_pago";
    const GROUPER = "fonte_recurso_nome";
    const fetchData = async () => {
        const res = await axios.get(
            `http://localhost:8000/api/budget_exchanges/show/${COUNTER}/by/${GROUPER}`
        );
        return res.data.data;
    };

    useEffect(() => {
        fetchData()
            .then((p) => setData(p))
            .catch((e: Error) => console.log(e));
    }, []);

    const colors = [
        "#8884d8",
        "#AF69EE",
        "#FA8072",
        "#3DED97",
        "#3AC7EB",
        "#F9A603",
    ];

    return (
        <>
            <ResponsiveContainer width="100%" height="80%">
                <PieChart width={730} height={250}>
                    <Pie
                        data={data}
                        dataKey={COUNTER}
                        nameKey={GROUPER}
                        cx="50%"
                        cy="50%"
                        fill="#8884d8"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}
export default OutflowsBySource; 