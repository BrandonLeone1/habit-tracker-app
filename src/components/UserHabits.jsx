import { useState } from "react";
import { StreakCalc } from "./StreakCalc";
import { WeeklyCompletions } from "./WeeklyCompletions";
import { WeeklyBreakDown } from "./WeeklyBreakdown";
import { MonthlyCompletions } from "./MonthlyCompletions";
import { MonthlyBreakDown } from "./MonthlyBreakdown";

export function UserHabits ({habitsList, completeMethod, completedHabits}) {
    
    const [confirmComplete, setConfirmComplete] = useState({});

    function handleClick(habit) {

        if (confirmComplete[habit.id] === true) {
            {/* new Date().toISOString().split("T")[0] */}
            let addCompletion = {
                habitId: habit.habitTitle,
                date: '2026-04-07',
                completionCount: 1 
            }
            
            completeMethod(addCompletion);
        }

        setConfirmComplete(prev => ({
            ...prev,
            [habit.id]: false
        }));
    }
    
    return (
        <>
            <div className="w-175 min-h-75 mx-auto max-w-[95%] p-6 gap-6  mt-10">
                <h2 className="text-xl text-center font-serif">Your habits</h2>
                <hr className="text-gray-600 w-[75%] mx-auto my-3"/>
                {
                    habitsList.map((habit => (
                        <div key={habit.id} className="mt-10 flex flex-col bg-gray-100 gap-4">
                            <h2>Habit: {habit.habitTitle}</h2>
                            <p>Desired frequency: {habit.habitFrequency}</p>
                            <input 
                            type="checkbox"
                            checked={!!confirmComplete[habit.id]}
                            onChange={() => setConfirmComplete(prev => ({
                                ...prev,
                                [habit.id]: !prev[habit.id]
                            }))}
                            />

                            <button onClick={() => handleClick(habit)}>
                                Add completion
                            </button>

                            <StreakCalc completedHabits={completedHabits} habitId={habit.habitTitle} className="mb-10"/>
                            <WeeklyCompletions completedHabits={completedHabits} habitId={habit.habitTitle}/>
                            <WeeklyBreakDown completedHabits={completedHabits} habitId={habit.habitTitle}/>
                            <MonthlyCompletions completedHabits={completedHabits} habitId={habit.habitTitle}/>
                            <MonthlyBreakDown completedHabits={completedHabits} habitId={habit.habitTitle} />
                        </div>
                    )

                    ))
                }
            </div>
        </>
    );
}