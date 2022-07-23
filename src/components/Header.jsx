import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }
  return (
    <header style= { headerStyles}>
        <div className='container'>
            <h2>{ text }</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text:'Feedbacks App',
    bgColor: 'rgba(0,0,0,0.1)',
    textColor: '#FF3B3F',
}

Header.prototypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header