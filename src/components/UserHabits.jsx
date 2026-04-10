import { useState } from "react";
import { StreakCalc } from "./StreakCalc";
import { WeeklyCompletions } from "./WeeklyCompletions";
import { WeeklyBreakDown } from "./WeeklyBreakdown";
import { MonthlyCompletions } from "./MonthlyCompletions";
import { MonthlyBreakDown } from "./MonthlyBreakdown";

export function UserHabits ({habitsList, completeMethod, completedHabits, deleteMethod}) {
    
    const [confirmComplete, setConfirmComplete] = useState({});

    function handleClick(habit) {

        if (confirmComplete[habit.id] === true) {
            {/* new Date().toISOString().split("T")[0] */}
            let addCompletion = {
                habitId: habit.habitTitle,
                date: new Date().toLocaleDateString("en-CA"),
                completionCount: 1 
            }
            
            completeMethod(addCompletion);
        }

        setConfirmComplete(prev => ({
            ...prev,
            [habit.id]: false
        }));
    }

    function handleDel(habit) {
        deleteMethod(habit)
    }
    
    return (
        <>

        <div className="bg-gray-100 w-250 max-w-[95%] min-h-135 max-h-135 rounded-b-2xl p-4 overflow-y-scroll">
            <div className="w-175 min-h-75 mx-auto max-w-[95%] p-6 gap-6">
                <h2 className="text-xl text-center font-[poppins]">Your habits</h2>
                <hr className="text-gray-600 w-122.25 max-w-full mx-auto my-3"/>
                {
                    habitsList.map((habit => (
                        <div key={habit.id} className="mt-10 flex flex-col bg-zinc-700 gap-4">
                            <span onClick={() => handleDel(habit)}>x</span>
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
                            

                        </div>
                    )

                    ))
                }
            </div>
        </div>
        </>
    );
}