import { useState } from 'react'
import { AddHabit } from './components/AddHabit';
import { UserHabits } from './components/UserHabits';


function App() {

  const [habitsList, setHabitsList] = useState([]);

  const [completedHabits, setCompletedHabits] = useState([]);

  function addMethod (newHabit) {
    setHabitsList([...habitsList, newHabit]);
  }

  function completeMethod (addCompletion) {

    if (completedHabits.some(habit => habit.habitId === addCompletion.habitId && habit.date === addCompletion.date)) {
      console.log('already in');

      setCompletedHabits(completedHabits.map(habit => {
        if (habit.habitId === addCompletion.habitId && habit.date === addCompletion.date) {

          return {...habit, completionCount: habit.completionCount + 1}
        } else {
          return habit
        }
      }

    ))

    } else {
    setCompletedHabits([...completedHabits, addCompletion])
    }
  }


  

  return (
    <>
      <AddHabit addMethod={addMethod}/>
      <UserHabits habitsList={habitsList} completeMethod={completeMethod} completedHabits={completedHabits}/>
      
      
    </>
  )
}

export default App
