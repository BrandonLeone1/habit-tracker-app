import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion';
export function DefaultView({user}) {
    
    const questions = [
        {
            question: "How do I add habits?",
            answer: "Click the add habit tab and enter a habit you would like to track. Ensure you select a valid frequency, daily or weekly before adding."
        },

        {
            question: "Do I need to sign in & how is it being handled?",
            answer: "Yes, in order to properly track habits you need to be signed in. User authentication is handled securely via Google OAuth and Firebase Authentication."
        },

        {
            question: `What do "completions this week" and "completions this month" mean?`,
            answer: "Completions this week and month track how many days you have completed the task, not counting duplicate completions. Meaning, if you complete more than 1 session on the same day, only 1 will be counted to this total. To see full completions, open the corresponding chart. "
        }
    ];
    
    const [selectedQuestion, setSelectedQuestion] = useState({});

    return (
        <>
        <div className="bg-gray-200 w-250 max-w-[95%] min-h-135 max-h-135 p-10 rounded-b-2xl overflow-y-scroll">
            
            { user != null ? (
            <h2 className="font-[poppins] text-xl text-center">Habit Tracker: Hi, {user.displayName}</h2>
            ) : (
                <h2 className="font-[poppins] text-xl text-center">Habit Tracker: Hi, Guest. Please sign in.</h2>
            )
        
        }
            
            <hr className="text-gray-600 w-122.25 max-w-[95%] mx-auto my-3"/>

            <div className="flex flex-col gap-8 mt-20">
                { questions.map(((question, index) => (
                    <motion.div 
                    initial={{opacity: 1, y: 40}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    key={index} className="flex flex-col bg-zinc-800 rounded-2xl text-white p-4">
                        <h2 onClick={() => {
                            if (selectedQuestion.question === question.question) {
                                setSelectedQuestion({})
                            } else {
                                setSelectedQuestion(question)
                            }
                        }} 
                        className="text-xl font-[poppins] cursor-pointer p-1">{question.question} <span className={`text-2xl font-bold inline-block duration-300 ${selectedQuestion.question === question.question && "rotate-x-180 inline-block duration-300"}`}>↑</span></h2>
                        <AnimatePresence>
                        { selectedQuestion.question === question.question && (
                            <motion.div 
                            initial={{height: 0, opacity: 0 }}
                            animate={{height: 'auto', opacity: 1 }}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.8}}
                            className="">
                                <p className="font-[Inter] text-lg p-2">{question.answer}</p>
                            </motion.div>
                        )

                        }
                        </AnimatePresence>
                    </motion.div>
                )


                ))

                }
            </div>
        </div>
        
        </>
    );
}