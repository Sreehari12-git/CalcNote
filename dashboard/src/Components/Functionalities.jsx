import React, { useState } from 'react'
import "../Functionalities.css"
function Functionalities() {
    const [activeItem, setActiveItem] = useState("Calculations")

    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [operator, setOperator] = useState("")
    const [result, setResult] = useState(null)
    const [text, setText] = useState("")
    
    function calculate() {
      setNum1("");
      setNum2("");
      setOperator("")
        let n1 = parseFloat(num1);
        let n2 = parseFloat(num2);
        
        if(isNaN(n1) || isNaN(n2)) {
            alert("Should be number")
            return;
        }

        const key = `${n1} ${operator} ${n2} `

        const existing = JSON.parse(localStorage.getItem("Calculations")) || [];

        const found = existing.find(item => item.startsWith(key))

        if(found) {
          const isResult = found.split("=")[1].trim();
          const newExp = `${key} = ${isResult}`
            setResult(newExp);
            return;
        }

        let res;
        switch(operator) {
            case '+':
                res = n1 + n2;
                break;
            case '-':
                res = n1 - n2;
                break;
            case '*':
                res = n1 * n2;
                break;
            case '/':
                if(n2 === 0) {
                    alert("Cannot divide by zero");
                    break;
                }
                res = n1 / n2;
                break;
            default:
                alert("Enter a valid operator")
                return;
        }
        const expression = `${key} = ${res}`;
        setResult(expression);
      localStorage.setItem("Calculations", JSON.stringify([...existing, expression]));
    
    }

    function save() {
      const existing = JSON.parse(localStorage.getItem("Text")) || [];
      if(typeof text !== "string" || text.trim() === "") {
        alert("Invalid or empty string. Not saved")
        return
      }

      const value = text.trim();

     const isDuplicate = existing.some(
        item => item.toLowerCase() === value.toLowerCase()
      );

    if (!isDuplicate) {
      existing.push(value); 
      localStorage.setItem("Text", JSON.stringify(existing));
    }
    setText("")
    }

    return (
    <div className="func-container">
      <div className="sidebar">
        <div 
          className={`sidebar-item ${activeItem === "Calculations" ? "active-sidebar" : ""}`}
          onClick={() => setActiveItem("Calculations")}
        >
          Calculations
        </div>

        <div 
          className={`sidebar-item ${activeItem === "textbox" ? "active-sidebar" : ""}`}
          onClick={() => setActiveItem("textbox")}
        >
          Textbox
        </div>
      </div>

      <div className="content-area">
        <div className="func-card">

          {activeItem === "Calculations" && (
            <>
              <h2>Calculation area</h2>

              <input 
                type='number' 
                placeholder='Enter no' 
                value={num1} 
                onChange={(e) => setNum1(e.target.value)}
              />

              <input 
                type='text' 
                placeholder='Operator (+ - * /)' 
                value={operator} 
                onChange={(e) => setOperator(e.target.value)}
              />

              <input 
                type='number' 
                placeholder='Enter no' 
                value={num2} 
                onChange={(e) => setNum2(e.target.value)}
              />

              <button onClick={calculate}>Result</button>

              <h3 className="result">Result: {result}</h3>
            </>
          )}

          {activeItem === "textbox" && (
            <>
              <h2>Textbox area</h2>

              <input 
                type='text' 
                placeholder='Enter a text' 
                value={text} 
                onChange={(e) => setText(e.target.value)}
              />

              <button onClick={save}>Save</button>
            </>
          )}

        </div>
      </div>

    </div>
  )
}

export default Functionalities
