import { useState } from 'react'
import { AddHabit } from './components/AddHabit';
import { UserHabits } from './components/UserHabits';
import {Routes, Route} from 'react-router-dom';
import { DefaultView } from './components/DefaultView';
import { Navbar } from './components/Navbar';
import { Charts } from './components/Charts';
import { motion } from 'framer-motion'
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, getDocs, getDoc } from "firebase/firestore";
import {db} from './services/Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';



function App() {

  const auth = getAuth();

  useEffect(() => {
  const unsub = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log("USER:", currentUser);
  });

  return () => unsub();
  }, []);

  const [user, setUser] = useState(null);

  const [habitsList, setHabitsList] = useState([]);

  const [completedHabits, setCompletedHabits] = useState([]);

  async function addMethod (newHabit) {

    if (!user) {return}

    await addDoc(
      collection(db, "users", user.uid, "habits"), 
      {
        habitTitle: newHabit.habitTitle,
        habitFrequency: newHabit.habitFrequency
      }
    )
    setHabitsList([...habitsList, newHabit]);
  }

  async function completeMethod (addCompletion) {
    
    if (!user) {return}

      const existing = completedHabits.find(habit => habit.habitId === addCompletion.habitId && habit.date === addCompletion.date)

      

      if (existing) {
        const ref = doc(
          db, "users", user.uid, "completions", existing.id
        );

        await updateDoc(ref, {completionCount: existing.completionCount + 1})
      } else {
        await addDoc(
          collection(db, "users", user.uid, "completions"),
          addCompletion
        )
      }

     
  }


  useEffect(() => {
    if (!user) {return}

    const unsub = onSnapshot (
      collection(db, "users", user.uid, "habits"),
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setHabitsList(data)
      }
    )
    return () => unsub();
  }, [user]

)

useEffect(() => {
  if (!user) {return}

  const unsub = onSnapshot (
      collection(db, "users", user.uid, "completions"),
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setCompletedHabits(data)
      }
    )
    return () => unsub();

}, [user]


)

  async function deleteMethod(habit2) {
    if (!user) {return}
    
    try {
      const habitRef = doc(db, "users", user.uid, "habits", habit2.id);
      await deleteDoc(habitRef);

      const completionsRef = collection(db, "users", user.uid, "completions");
      const snapshot = await getDocs(completionsRef);

      const deletions = snapshot.docs.filter(item => item.data().habitId === habit2.id)
      .map(item => deleteDoc(item.ref))

      await Promise.all(deletions);

      setHabitsList(habitsList.filter(habit => habit.id != habit2.id))
    setCompletedHabits(completedHabits.filter(habit => habit.id != habit2.id))
    } catch (err) {
      console.log(err)
    }
    
    
  }

  return (
    <>
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.5}}
    className='bg-white h-screen flex flex-col justify-center items-center'>
    <Navbar user={user} />
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
      
      
      </motion.div>
    </>
  )
}

export default App
