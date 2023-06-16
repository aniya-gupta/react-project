import React from 'react'
import { useParams } from 'react-router-dom'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.png'

const QuestionsDetails = () => {

    const { id } = useParams()
    console.log(id)

    var questionsList= [{
        _id: '1',
        upVotes: 3,
        downVotes:2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongodb", "express js"],
        userPosted:"aniya",
        userId:1,
        askedOn:"jan 1",
        answer: [{
          answerBody:"Answer",
          userAnswered: 'gupta',
          answeredOn: "jan 2",
          userId:2,
        }]    
    },{
        _id: '2',
        upVotes: 0,
        downVotes:2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted:"aniya",
        askedOn:"jan 1",
        userId:1,
        answer: [{
          answerBody:"Answer",
          userAnswered: 'gupta',
          answeredOn: "jan 2",
          userId:2,
        }]   
    },{
        _id: '3',
        upVotes: 3,
        downVotes:2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted:"aniya",
        askedOn:"jan 1",
        userId:1,
        answer: [{
          answerBody:"Answer",
          userAnswered: 'gupta',
          answeredOn: "jan 2",
          userId:2,
        }]  
    }]
  

  return (
    <div className='question-details-page'>
      {
        questionsList === null ?
        <h1>Loading...</h1> :
        <>
        {
            questionsList.filter(question => question._id === id).map(question => (
                <div key={question.id}>
                   {console.log(question)}
                    <section className='question-details-container'>
                       <h1>{question.questionTitle}</h1>
                       <div className='question-details-container-2'>
                          <div className="question-votes">
                             <img src={upvote} alt="" />
                             <p>{question.upVotes - question.downVotes}</p>
                             <img src={downvote} alt="" />
                          </div>
                       </div>
                    </section>
                </div>
            ))
        }
        </>
      }
    </div>
  )
}

export default QuestionsDetails
