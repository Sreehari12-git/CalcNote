
import React, { useCallback, useMemo, useState } from 'react'

function Password() {
    const [length, setLength] = useState(3);
    const [ includeLetters, setLetters] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSpecials, setIncludeSpecials] = useState(false);
    const [result, setResult] = useState("");

    const generatePassword = () => {
        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers = "0123456789";
        let specials = "!@#$%^&*()_+[]{}|;:,.<>?";

        let allChars = "";
        if(includeLetters) allChars += letters;
        if(includeNumbers) allChars += numbers;
        if(includeSpecials) allChars += specials;

        if(!allChars) {
            alert("Please select at least one character type");
            return;
        }

        let generatePassword = "";
        for(let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatePassword += allChars[randomIndex];
        }
        setResult(generatePassword);
    }
  return (
    <>
        <label>
            <input type='checkbox' checked = {includeLetters} onChange={() => setLetters(!includeLetters)}/>
            Letters
        </label>
        <label>
            <input type='checkbox' checked = {includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)}/>
            Numbers
        </label>
        <label>
            <input type='checkbox' checked = {includeSpecials} onChange={() => setIncludeSpecials(!includeSpecials)}/>
            Special symbols
        </label>
      <label>
        <input type='range'
            min="3"
            max="10"/>
      </label>
      <p>Password: {result}</p>
      <button onClick={generatePassword}>
            Generate Password
        </button>
    </>
  )
}

export default Password
