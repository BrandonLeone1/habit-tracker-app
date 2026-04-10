import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function WeeklyChart ({weeklyData}) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#18181B" />
            </BarChart>
        </ResponsiveContainer>
    );
}