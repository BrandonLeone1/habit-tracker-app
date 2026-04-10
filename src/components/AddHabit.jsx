import { useState } from "react";

export function AddHabit({addMethod}) {
    
    const [habitFreq, setHabitFreq] = useState("");
    const [habitName, setHabitName] = useState("");
    
    function handleClick() {

        let newHabit = {
            id: Date.now(),
            habitTitle: habitName,
            habitFrequency: habitFreq
        }

        setHabitFreq("");
        setHabitName("");
       
        addMethod(newHabit)
    }
    
    return (
    <>
    <div className="bg-gray-100 w-250 max-w-[95%] min-h-135 p-10 rounded-b-2xl">
            
        
        
            <h2 className="font-[poppins] text-xl text-center">Add a hobby</h2>
            <hr className="text-gray-600 w-122.25 max-w-[95%] mx-auto my-3"/>

            <div className="flex flex-wrap w-175 min-h-75 mt-15 mx-auto max-w-[95%] gap-8 justify-center items-center">
            <select
            value={habitFreq} 
            onChange={(e) => setHabitFreq(e.target.value)}
            className="bg-zinc-950 text-white md:px-4 md:py-3 p-3 font-[inter] text-lg max-h-12.5 min-w-73 cursor-pointer">
                <option 
                className=""
                defaultValue>Choose habit frequency</option>
                <option>Daily</option>
                <option>Weekly</option>
            </select>

            <input 
            type="text"
            placeholder="Enter habit..."
            required
            className="block bg-zinc-950 text-white md:px-4 md:py-3 p-3 font-[inter] text-lg max-h-12.5 min-w-73"
            onChange={(e) => setHabitName(e.target.value)}
            value={habitName}
            />

            <button 
            onClick={handleClick}
            className="block bg-zinc-950 text-white font-[inter] md:px-12 md:py-3 p-3 text-lg max-h-12.5 rounded-3xl cursor-pointer hover:-translate-y-1 active:scale-95 duration-300">
                Add
            </button>
            
        </div>
    </div>
    </>
    );
}