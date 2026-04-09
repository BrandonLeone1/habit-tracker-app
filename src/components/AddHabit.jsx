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
        <div className="grid grid-cols-1 md:grid-cols-3 w-175 min-h-75 mx-auto max-w-[95%] gap-6 bg-gray-100 md:place-items-center">
            <select
            value={habitFreq} 
            onChange={(e) => setHabitFreq(e.target.value)}
            className="bg-cyan-600">
                <option 
                className="bg-cyan-600"
                defaultValue>Choose habit frequency</option>
                <option>Daily</option>
                <option>Weekly</option>
            </select>

            <input 
            type="text"
            placeholder="Enter habit..."
            required
            className="block bg-cyan-600"
            onChange={(e) => setHabitName(e.target.value)}
            value={habitName}
            />

            <button 
            onClick={handleClick}
            className="block place-self-start md:place-self-center bg-cyan-600">
                Add Hobby
            </button>
        </div>
    
    </>
    );
}