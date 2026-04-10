import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function MonthlyChart ({monthlyData}) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#18181B" />
            </BarChart>
        </ResponsiveContainer>
    );
}