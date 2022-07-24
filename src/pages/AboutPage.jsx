import React from 'react'
import Card from '../components/shared/Card'

const AboutPage = () => {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus asperiores quo doloribus suscipit sint placeat voluptate, eligendi ipsam ut ea cum, facere sed, minima vero velit sunt error repellendus fugit.</p>
            <p>Version: 1.0.0</p>
            <p>
                <a href="/">Back home</a>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage