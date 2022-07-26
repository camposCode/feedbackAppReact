import { createContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([ ])

    const[feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    
    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch Feedback
    const fetchFeedback = async () =>{
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }
    // Add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback')
        
        newFeedback.id = uuidv4
        setFeedback([
            newFeedback,
            ...feedback
        ])
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want todelete?')) {
            setFeedback(feedback.filter((item) => item.id!== id))
        }
    }

    // Update feedback Item
    const updateFeedback = (id, updItem) =>{
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    return <FeedbackContext.Provider
        value={{ 
            feedback,
            feedbackEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}
    >
        { children }
    </FeedbackContext.Provider>
}

export default FeedbackContext