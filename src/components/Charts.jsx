import { WeeklyBreakDown } from "./WeeklyBreakdown";
import { MonthlyBreakDown } from "./MonthlyBreakdown";
import { WeeklyCompletions } from "./WeeklyCompletions";
import { MonthlyCompletions } from "./MonthlyCompletions";
import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'


export function Charts({habitsList, completedHabits}) {

    const [openWeekly, setOpenWeekly] = useState({});
    const [openMonthly, setOpenMonthly] = useState({});

    return (
        <div className="bg-gray-200 w-250 max-w-[95%] min-h-135 p-10 rounded-b-2xl overflow-y-scroll max-h-135">
            <h2 className="font-[poppins] text-xl text-center">Charts Dashboard</h2>
            <hr className="text-gray-600 w-122.25 max-w-[95%] mx-auto my-3"/>

            <div className="flex flex-col gap-8 w-full justify-center items-center mt-10">
            {
                habitsList.map((habit => (
                    
                    <motion.div 
                    initial={{opacity: 1, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    key={habit.id} className="flex flex-col gap-2 mt-2">
                        <h2 className="text-lg font-[poppins] text-zinc-950">Info for habit: {habit.habitTitle}</h2>
                        <WeeklyCompletions completedHabits={completedHabits} habitId={habit.id}/>
                        <MonthlyCompletions completedHabits={completedHabits} habitId={habit.id}/>
                        
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
                        
                        <AnimatePresence>
                        { openWeekly[habit.id] && (
                        <motion.div
                        
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                        >
                            <WeeklyBreakDown completedHabits={completedHabits} habitId={habit.id}/>
                        </motion.div>
                        
                        ) 
                        
                        
                        }
                        </AnimatePresence>
                        
                        <AnimatePresence>
                        { openMonthly[habit.id] && (

                            <motion.div
                        
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}>
                            <MonthlyBreakDown completedHabits={completedHabits} habitId={habit.id} />
                            </motion.div>
                        ) 
                        }
                        </AnimatePresence>
                    </motion.div>
                    
                )


                ))
            }
            </div>
        </div>
    );
}