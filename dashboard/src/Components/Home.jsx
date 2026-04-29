import React, { useEffect, useState } from 'react'
import "../Home.css"
function Home() {

    const [calculation, setCalculation] = useState([]);
    const [text, setText] = useState([])

    const uniqueCalculations = [...new Set(calculation)];

    const [calcPage, setCalcPage] = useState(1);
    const [textPage, setTextPage] = useState(1);

    const itemsPerPage = 5;

    const paginatedCalculations = uniqueCalculations.slice(
      (calcPage - 1 ) * itemsPerPage,
      calcPage * itemsPerPage
    )

    const paginatedText = text.slice(
      (textPage-1) * itemsPerPage,
      textPage * itemsPerPage
    )

    const totalPages = Math.max(1,Math.ceil(uniqueCalculations.length/itemsPerPage));
    const totalTextPages = Math.max(1, Math.ceil(text.length/itemsPerPage));

    useEffect(() => {
        setCalculation(JSON.parse(localStorage.getItem("Calculations")) || []);
        setText(JSON.parse(localStorage.getItem("Text")) || []);;
    },[])
  return (
    <div className="home-container">
  <div className="cards-wrapper"> 

    <div className="card">
      <h3>Calculations</h3>

      {paginatedCalculations.map((item,index) => (
        <p key={index}>{item}</p>
      ))}

    <div className="pagination">

  <button
    onClick={() => setCalcPage(calcPage - 1)}
    disabled={calcPage === 1}
    className="nav-btn"
  >
    Prev
  </button>

  <div className="page-numbers">
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
      <button
        key={num}
        onClick={() => setCalcPage(num)}
        className={calcPage === num ? "active page-btn" : "page-btn"}
      >
        {num}
      </button>
    ))}
  </div>

  <button
    onClick={() => setCalcPage(calcPage + 1)}
    disabled={calcPage === totalPages}
    className="nav-btn"
  >
    Next
  </button>

</div>
    </div>

      <div className="card">
      <h3>Text</h3>

      {paginatedText.map((item,index) => (
        <p key={index}>{item}</p>
      ))}
<div className="pagination">

  <button
    onClick={() => setTextPage(textPage - 1)}
    disabled={textPage === 1}
    className="nav-btn"
  >
    Prev
  </button>

  <div className="page-numbers">
    {Array.from({ length: totalTextPages }, (_, i) => i + 1).map((num) => (
      <button
        key={num}
        onClick={() => setTextPage(num)}
        className={textPage === num ? "active page-btn" : "page-btn"}
      >
        {num}
      </button>
    ))}
  </div>

  <button
    onClick={() => setTextPage(textPage + 1)}
    disabled={textPage === totalTextPages}
    className="nav-btn"
  >
    Next
  </button>

</div>
    </div>
      </div>
    </div>
  )

}

export default Home
