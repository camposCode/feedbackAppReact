import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'


const FeedbackList = ({ feedback }) => {
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }
  return (
    <div className='feedback-list'>
        { 
            feedback.map((item) => (
                <FeedbackItem key={ item.id } item={ item }/>
            ))
        }
    </div>
  )
}

FeedbackList.prototypes = {
    feedback: PropTypes.array
}

export default FeedbackList