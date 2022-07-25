import {useState} from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";



function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4
      setFeedback([
          newFeedback,
          ...feedback
      ])
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route 
              path="/" 
              exact
              element={
                <>
                  <FeedbackForm 
                    handleAdd={addFeedback}/>
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }>
                      
            </Route>
            <Route 
                path="/about"
                element={ <AboutPage />}/>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;
