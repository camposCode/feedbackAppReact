import React, { useContext, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating ] = useState(10)

    const { addFeedback } = useContext(FeedbackContext)
    
    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback)
            setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={ handleSubmit }>
            <h2>How do you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder='Write a review'
                    onChange={handleTextChange}
                    value={text}
                />
                <Button 
                    type='submit' 
                    isDisabled={ btnDisabled }>
                        Send
                </Button>
            </div>
            { message && <div className='message'>{ message }</div> }
        </form>
    </Card>
  )
}


export default FeedbackForm