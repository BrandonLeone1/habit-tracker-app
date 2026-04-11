import { useState } from "react";
import { StreakCalc } from "./StreakCalc";
import {motion} from 'framer-motion'

export function UserHabits ({habitsList, completeMethod, completedHabits, deleteMethod, user}) {
    
    const [confirmComplete, setConfirmComplete] = useState({});

    function handleClick(habit) {

        if (confirmComplete[habit.id] === true) {
            {/* new Date().toISOString().split("T")[0] */}
            let addCompletion = {
                
                habitId: habit.id,
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

        <div className="bg-gray-200 border-2 border-t-0 border-zinc-400 w-250 max-w-[95%] min-h-135 max-h-135 rounded-b-2xl p-4 overflow-y-scroll">
            { user != null ? (
            
            <div className="w-175 min-h-75 mx-auto max-w-[95%] p-6 gap-6">
                <h2 className="text-xl text-center font-[poppins]">Your habits</h2>
                <hr className="text-gray-600 w-122.25 max-w-full mx-auto my-3"/>
                {
                    habitsList.map((habit => (
                        <motion.div 
                        initial={{opacity: 1, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        key={habit.id} className="mt-10 flex flex-col relative bg-zinc-800 rounded-2xl text-white gap-8 p-8">
                            <span onClick={() => handleDel(habit)} className="absolute top-1 right-4 font-[poppins] text-2xl cursor-pointer hover:scale-95 duration-75">x</span>
                            
                            <div className="flex gap-2 flex-wrap justify-left items-center mt-4">
                                <h2 className="text-lg font-[poppins] text-center">Habit: {habit.habitTitle}</h2>
                                <StreakCalc completedHabits={completedHabits} habitId={habit.id}/>
                            </div>
                            <p className="text-md md:text-left font-[inter] text-center">Desired frequency: {habit.habitFrequency}</p>
                            
                            <input 
                            type="checkbox"
                            className="block md:mx-0 mx-auto appearance-none w-6.25 h-6.25 bg-gray-100 rounded checked:before:content-['✓'] checked:before:block checked:before:text-2xl checked:before:font-bold checked:before:text-center checked:before:-mt-1 text-black cursor-pointer checked:bg-gray-300 duration-300"
                            checked={!!confirmComplete[habit.id]}
                            onChange={() => setConfirmComplete(prev => ({
                                ...prev,
                                [habit.id]: !prev[habit.id]
                            }))}
                            />

                            <button onClick={() => handleClick(habit)} className="font-[poppins] text-lg bg-gray-100 w-fit m-auto rounded-3xl text-zinc-950 px-2 py-1 cursor-pointer hover:-translate-y-1 duration-300 [box-shadow:0px_0px_6px_rgba(243,244,246,0.5)] hover:[box-shadow:0px_2px_8px_rgba(243,244,246,0.6)] active:scale-95">
                                Add completion
                            </button>

                            
                            

                        </motion.div>
                    )

                    ))
                }
            </div>
) : (
            <div className="flex justify-center items-center h-full">
                <h2 className="text-xl text-center -mt-5 font-[poppins]">Please sign in to view your habits.</h2>
            </div>
)

}
        </div>
        </>
    );
}