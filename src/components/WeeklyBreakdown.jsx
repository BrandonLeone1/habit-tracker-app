import { useEffect, useState } from "react";
import { WeeklyChart } from "./WeeklyChart";

export function WeeklyBreakDown({completedHabits, habitId}) {
    


    const today = new Date();
    const [weeklyData, setWeeklyData] = useState([]);

    let weekly = [];

    for (let i = 6; i >= 0; i--) {
        let day = new Date();
        day.setDate(today.getDate() - i);

        let dayString = day.toISOString().split("T")[0];
        let count = 0;
        
        for (let x = 0; x < completedHabits.length; x++) {
            let current = completedHabits[x];

            if (current.habitId === habitId && current.date === dayString) {
                count += current.completionCount;
            }
        }

        weekly.push( 
            {
                day: day.toLocaleDateString("en-US", { weekday: "short" }),
                count: count
            }
        )

    }

    useEffect(() => {
        setWeeklyData(weekly);
    }, [completedHabits, habitId]

)

    console.log(weeklyData)
    return (

        <div>
            

            <WeeklyChart weeklyData={weeklyData}/>
            
        </div>
    );
}