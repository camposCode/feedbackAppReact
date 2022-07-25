import { FaTimes, FaEdit } from "react-icons/fa"
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackItem = ({ item }) => {
    const{ editFeedback, deleteFeedback } = useContext(FeedbackContext)
    
    return (
    
    <Card>
        <div className="num-display">{ item.rating }</div>
        <button 
            onClick={() => deleteFeedback(item.id) } 
            className="close">
            <FaTimes color="rgba(0,0,0,0.7)" />
        </button>
        <button onClick={() => editFeedback(item) } className="edit">
            <FaEdit color="rgba(0,0,0,0.7)"/>
        </button>
        <div className="text-display">{ item.text }</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem