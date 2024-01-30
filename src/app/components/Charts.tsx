'use client'

import MontlyOutflows from "./MontlyOutflows";
import OutflowsByCategory from "./OutflowsByCategory";
import OutflowsBySource from "./OutflowsBySource";

const Charts = () => {
    return (
        <div className="h-100 py-5">
            <section className="flex py-4 px-4 gap-3">
                <div className="w-full h-[400px] bg-gray-700 rounded">
                    <p className="text-2xl p-4 text-gray-300">Despesas agrupadas por mês</p>
                    <MontlyOutflows/>
                </div>
            </section>

            <section className="flex my-4 px-4 gap-3">
                <div className="w-1/2 h-[400px] bg-gray-700 rounded">
                    <p className="text-2xl p-4 pb-6 text-gray-300">Despesas agrupadas por categorias</p>
                    <OutflowsByCategory/>
                </div>
                <div className="w-1/2 h-[400px] bg-gray-700 rounded">
                    <p className="text-2xl p-4 text-gray-300">Despesas agrupadas por fonte de receita</p>
                    <OutflowsBySource/>
                </div>
            </section>
        </div>
    );
};

export default Charts;