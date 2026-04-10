import { WeeklyBreakDown } from "./WeeklyBreakdown";
import { MonthlyBreakDown } from "./MonthlyBreakdown";
import { WeeklyCompletions } from "./WeeklyCompletions";
import { MonthlyCompletions } from "./MonthlyCompletions";
import { useState } from "react";


export function Charts({habitsList, completedHabits}) {

    const [openWeekly, setOpenWeekly] = useState({});
    const [openMonthly, setOpenMonthly] = useState({});

    return (
        <div className="bg-gray-100 w-250 max-w-[95%] min-h-135 p-10 rounded-b-2xl overflow-y-scroll max-h-135">
            <h2 className="font-[poppins] text-xl text-center">Charts Dashboard</h2>
            <hr className="text-gray-600 w-122.25 max-w-[95%] mx-auto my-3"/>

            <div className="flex flex-col gap-8 w-full justify-center items-center mt-10">
            {
                habitsList.map((habit => (
                    
                    <div key={habit.id} className="flex flex-col gap-2 mt-2">
                        <h2 className="text-lg font-[poppins] text-zinc-950">{habit.habitTitle}</h2>
                        <WeeklyCompletions completedHabits={completedHabits} habitId={habit.habitTitle}/>
                        <MonthlyCompletions completedHabits={completedHabits} habitId={habit.habitTitle}/>
                        
                        <div className="flex flex-row gap-3 flex-wrap mt-3">
                            <button onClick={() => setOpenWeekly(prev => ({
                                ...prev,
                                [habit.id]: !prev[habit.id]
                            }))} className="bg-black text-white font-[poppins] px-4 py-2 rounded-3xl text-md cursor-pointer hover:bg-zinc-800 hover:shadow-xl duration-300">{openWeekly[habit.id] ? `Close weekly chart` : 'Open weekly chart'}</button>
                           
                            <button onClick={() => setOpenMonthly(prev => ({
                                ...prev,
                                [habit.id]: !prev[habit.id]
                            }))} className="bg-black text-white font-[poppins] px-4 py-2 rounded-3xl text-md cursor-pointer hover:bg-zinc-800 hover:shadow-xl duration-300">{openMonthly[habit.id] ? `Close monthly chart` : 'Open monthly chart'}</button>
                        </div>

                        { openWeekly[habit.id] ? (
                        
                        <WeeklyBreakDown completedHabits={completedHabits} habitId={habit.habitTitle}/>
                        ) : (
                            ""
                        )
                        
                        
                        }

                        { openMonthly[habit.id] ? (

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
        </div>
    );
}