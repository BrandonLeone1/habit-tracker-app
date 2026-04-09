import { useEffect, useState } from "react";

export function MonthlyCompletions ({completedHabits, habitId}) {
    
    const [monthlyCompletionsAmt, setMonthlyCompletionsAmt] = useState(0);

    const sortedCompletedList = completedHabits.filter(habit => habit.habitId === habitId)
    .sort((a,b) => new Date(a.date) - new Date(b.date));
    
    function getMonthlyCompletions () {
        const currentDate = new Date(Date.now())
        const oneMonthAgo = new Date(Date.now() - (30 * 24 * 60 * 60 * 1000))
        let completionAmt = 0;

        for (let i = 0; i < sortedCompletedList.length; i++) {
            let current = sortedCompletedList[i];

            if (new Date(current.date) >= oneMonthAgo && new Date(current.date) <= currentDate) {
                completionAmt++;
            }
        }
        setMonthlyCompletionsAmt(completionAmt);
        
    }

    useEffect(() => {
        getMonthlyCompletions();
    }, [completedHabits]

)
   
    
    return (
        <div>
            <button>Completed this month (different days): {monthlyCompletionsAmt}</button>
        </div>
    );
}