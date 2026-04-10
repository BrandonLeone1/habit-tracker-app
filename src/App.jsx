import { useState } from 'react'
import { AddHabit } from './components/AddHabit';
import { UserHabits } from './components/UserHabits';
import {Routes, Route} from 'react-router-dom';
import { DefaultView } from './components/DefaultView';
import { Navbar } from './components/Navbar';
import { Charts } from './components/Charts';

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

  function deleteMethod(habit2) {
    setHabitsList(habitsList.filter(habit => habit.habitTitle != habit2.habitTitle))
    setCompletedHabits(completedHabits.filter(habit => habit.habitId != habit2.habitTitle))
  }

  return (
    <>
    <div className='bg-gray-400 h-screen flex flex-col justify-center items-center'>
    <Navbar />
    <Routes>
      <Route path='/' element={<DefaultView />}>

      </Route>

      <Route path='/add-habit' element={<AddHabit addMethod={addMethod}/>} >

      </Route>

      <Route path='/habits'element={<UserHabits habitsList={habitsList} completeMethod={completeMethod} completedHabits={completedHabits} deleteMethod={deleteMethod}/>}>
      </Route>

      <Route path='/charts' element={<Charts habitsList={habitsList} completedHabits={completedHabits} />}>
          
      </Route>

    </Routes>
      
      
      </div>
    </>
  )
}

export default App
