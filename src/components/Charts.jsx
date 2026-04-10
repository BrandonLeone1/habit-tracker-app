import { WeeklyBreakDown } from "./WeeklyBreakdown";
import { MonthlyBreakDown } from "./MonthlyBreakdown";
import { WeeklyCompletions } from "./WeeklyCompletions";
import { MonthlyCompletions } from "./MonthlyCompletions";
import { useState } from "react";


export function Charts({habitsList, completedHabits}) {

    const [openWeekly, setOpenWeekly] = useState(false);
    const [openMonthly, setOpenMonthly] = useState(false);

    return (
        <div className="bg-gray-100 w-250 max-w-[95%] min-h-135 p-10 rounded-b-2xl">
            <h2 className="font-[poppins] text-xl text-center">Charts Dashboard</h2>
            <hr className="text-gray-600 w-122.25 max-w-[95%] mx-auto my-3"/>
            {
                habitsList.map((habit => (
                    
                    <div key={habit.id}>
                        <h2>{habit.habitTitle}</h2>
                        <WeeklyCompletions completedHabits={completedHabits} habitId={habit.habitTitle}/>
                        <MonthlyCompletions completedHabits={completedHabits} habitId={habit.habitTitle}/>
                        <button onClick={() => setOpenWeekly(prev => !prev)}>Toggle weekly chart</button>
                        <button onClick={() => setOpenMonthly(prev => !prev)}>Toggle monthly chart</button>
                    
                        { openWeekly ? (
                        
                        <WeeklyBreakDown completedHabits={completedHabits} habitId={habit.habitTitle}/>
                        ) : (
                            ""
                        )
                        
                        
                        }

                        { openMonthly ? (

                            <MonthlyBreakDown completedHabits={completedHabits} habitId={habit.habitTitle} />
                        ) : (
                            ""
                        )
                        }
                    </div>
                    
                )


                ))
            }
        </div>
    );
}