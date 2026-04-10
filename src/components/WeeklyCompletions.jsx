import { useEffect, useState } from "react";

export function WeeklyCompletions ({completedHabits, habitId}) {
    
    const [weeklyCompletionAmt, setWeeklyCompletionAmt] = useState(0);

    const sortedCompletedList = completedHabits.filter(habit => habit.habitId === habitId)
    .sort((a,b) => new Date(a.date) - new Date(b.date));
    
    function getWeeklyCompletions () {
        const currentDate = new Date().toLocaleDateString("en-CA");
        const oneWeekAgo = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)).toLocaleDateString("en-CA");
        let completionAmt = 0;

        for (let i = 0; i < sortedCompletedList.length; i++) {
            let current = sortedCompletedList[i];

            if (current.date >= oneWeekAgo && current.date <= currentDate) {
                completionAmt++;
            }
        }
        setWeeklyCompletionAmt(completionAmt);
        
    }

    useEffect(() => {
        getWeeklyCompletions();
    }, [completedHabits]

)
   
    
    return (
        <div>
            <p className="font-[inter] text-zinc-950">Completions this week (different days): {weeklyCompletionAmt}</p>
        </div>
    );
}