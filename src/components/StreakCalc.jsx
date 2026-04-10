import { useState } from "react";
import { useEffect } from "react";

export function StreakCalc({completedHabits, habitId}) {
const [streakCount, setStreakCount] = useState(0);

    function calculateStreak() {
    const sortedCompletedList = completedHabits.filter(habit => habit.habitId === habitId)
    .sort((a,b) => new Date(a.date) - new Date(b.date))
    let streak = 0;

    
    for (let i = 1; i < sortedCompletedList.length; i++) {
        
        let current = sortedCompletedList[i];
        let prev = sortedCompletedList[i - 1];
        
       const date1 = new Date(current.date + "T00:00:00");
       const date2 = new Date(prev.date + "T00:00:00");

       const diffInMs = Math.abs(date1.getTime() - date2.getTime());

       const oneDay = 86400000;
       
       if (diffInMs === oneDay) {
        streak++
        
       } else {
        streak = 1;
       }
       
    }
    setStreakCount(streak);
    
  }

useEffect(() => {
  calculateStreak();
}, [completedHabits]


)
  return (
    <>
    <h2 className="font-[poppins] text-lg text-center">| streak: {streakCount}</h2>
    </>
  );
}