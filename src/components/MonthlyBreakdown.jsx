import { useEffect, useState } from "react";
import { MonthlyChart } from "./MonthlyChart";

export function MonthlyBreakDown({completedHabits, habitId}) {
    


    const today = new Date();
    const [monthlyData, setMonthlyData] = useState([]);

    let monthly = [];

    for (let i = 29; i >= 0; i--) {
        let day = new Date();
        day.setDate(today.getDate() - i);

        let dayString = day.toLocaleDateString("en-CA");
        let count = 0;
        
        for (let x = 0; x < completedHabits.length; x++) {
            let current = completedHabits[x];

            if (current.habitId === habitId && current.date === dayString) {
                count += current.completionCount;
            }
        }

        monthly.push( 
            {
                day: day.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
                count: count
            }
        )

    }

    useEffect(() => {
        setMonthlyData(monthly);
    }, [completedHabits, habitId]

)

    console.log(monthlyData)
    return (

        <div className="">

            <MonthlyChart monthlyData={monthlyData}/>
        </div>
    );
}