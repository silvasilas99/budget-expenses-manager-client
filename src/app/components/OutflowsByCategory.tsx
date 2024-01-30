import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";

const OutflowsByCategory = () => {
    const [data, setData] = useState([]);
    const COUNTER = "valor_pago";
    const GROUPER = "orgao_nome";
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
            <ResponsiveContainer width="100%" height="80%">
                <BarChart 
                    width={730} height={250} data={data}
                    margin={{ top: 10, right: 20, left: 30 }}
                >
                    <XAxis dataKey={GROUPER} tick={{ fill: "#eeeeee" }} />
                    <YAxis tick={{ fill: "#eeeeee" }} />
                    <Tooltip />
                    <Bar dataKey={COUNTER} fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default OutflowsByCategory;

