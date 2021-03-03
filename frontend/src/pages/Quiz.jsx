import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { quizService } from '../services/quizService';


export function Quiz() {
    const [index, setIndex] = useState(1);
    const [question, setQuestion] = useState({});
    

    useEffect(() => {
        getQuiz();
    });

    const getQuiz = async () => {
        const singleQuest = await quizService.getById(index);
        setQuestion(singleQuest)
    }

    const checkAnswer = (option)=> {
        let idx = index;
        if(option===question.correctAnswer) {
            alert('Correct Answer!!')
            ++idx
            setIndex(idx)
    
        }else alert('Wrong Answer Try Again')
        
    }


    if (!question&&!index) return <div>Loading...</div>
    else if(index===4)
    {
        return(
            <div>
                 <div>WELL DONE!!</div>
             <Link to="/">Back To HomePage</Link>
            </div>
         )
    }
return (
        <div>
            <h1 className="question">Animal QUIZ PAGE</h1>
            <div className="question-card">
            <h1 className="question">{question.question}</h1>
            <h3 className="answer" onClick={()=>{
                checkAnswer(question.option1)
            }}>1. {question.option1}</h3>
            <h3 className="answer" onClick={()=>{
                checkAnswer(question.option2)
            }}>2. {question.option2}</h3>
            <h3 className="answer" onClick={()=>{
                checkAnswer(question.option3)
            }}>3. {question.option3}</h3>
            <h3 className="answer" onClick={()=>{
                checkAnswer(question.option4)
            }}>4. {question.option4}</h3>
        </div>
            <Link to="/">Back To HomePage</Link>
            {/* <QuestPreview question={question} /> */}
        </div>
    )
}
