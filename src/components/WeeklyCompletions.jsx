import { useEffect, useState } from "react";

export function WeeklyCompletions ({completedHabits, habitId}) {
    
    const [weeklyCompletionAmt, setWeeklyCompletionAmt] = useState(0);

    const sortedCompletedList = completedHabits.filter(habit => habit.habitId === habitId)
    .sort((a,b) => new Date(a.date) - new Date(b.date));
    
    function getWeeklyCompletions () {
        const currentDate = new Date(Date.now())
        const oneWeekAgo = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000))
        let completionAmt = 0;

        for (let i = 0; i < sortedCompletedList.length; i++) {
            let current = sortedCompletedList[i];

            if (new Date(current.date) >= oneWeekAgo && new Date(current.date) <= currentDate) {
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
            <button>Completions this week (different days): {weeklyCompletionAmt}</button>
        </div>
    );
}