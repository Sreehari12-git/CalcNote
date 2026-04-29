import React, { useEffect, useState } from 'react'
import "../Home.css"
function Home() {

    const [calculation, setCalculation] = useState([]);
    const [text, setText] = useState([])

    useEffect(() => {
        setCalculation(JSON.parse(localStorage.getItem("Calculations")) || []);
        setText(JSON.parse(localStorage.getItem("Text")) || []);;
    },[])
  return (
    <div className="home-container">
      <div className="cards-wrapper"> 
      <div className="card">
        <h3>Calculations</h3>
        {calculation.map((item,index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div className="card">
        <h3>Text</h3>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      </div>
    </div>
  )

}

export default Home
