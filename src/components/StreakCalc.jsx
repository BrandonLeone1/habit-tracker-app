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
        
       const date1 = new Date(current.date);
       const date2 = new Date(prev.date);

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
    <button className="block mr-auto mt-10">Streak Counter</button>
    <h2 className="mb-20">{habitId} streak: {streakCount}</h2>
    </>
  );
}