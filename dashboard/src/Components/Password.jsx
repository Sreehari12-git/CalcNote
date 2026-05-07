import React, { useCallback, useState } from 'react';
import "../Password.css"

function Password() {

  const [length, setLength] = useState(0);
  const [includeLetters, setLetters] = useState(false);
  const [includeNumbers, setNumbers] = useState(false);
  const [includeSpecial, setSpecial] = useState(false);
  const [password, setPassword] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const handleSliderChange = (e) => {
    setLength(parseInt(e.target.value, 10));
  };

  const copy = async() => {
    if(!password) return;

    try {
      await navigator.clipboard.writeText(password);
      alert("Password copied to clipboard");
    } catch(err) {
      console.error(err);
    }
  }

  const generatePassword = () => {
    if (length === 0) {
      alert("Cannot generate a password with 0 characters")
    }

    const allChars = [];

    if(includeLetters) allChars.push(letters);
    if(includeNumbers) allChars.push(numbers);
    if(includeSpecial) allChars.push(specials);

    if(allChars.length === 0) {
      setPassword("");
      return;
    }

    let result = [];

    const baseCount = Math.floor(length/allChars.length);
    let remainder = length % allChars.length;

    allChars.forEach((set) => {
      for(let i = 0; i < baseCount; i++) {
        const index = Math.floor(Math.random() * set.length);
        result.push(set[index]);
      }
    })

    for(let i = 0; i < remainder; i++) {  
      const set = allChars[i % allChars.length];
      const index = Math.floor(Math.random() * set.length);
      result.push(set[index]);
    }

    for(let i = result.length-1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    setPassword(result.join(""));

};

  return (
    <div className='password-box'>
    <div className="slider-row">
  <input
    type="range"
    min="0"
    max="30"
    value={length}
    onChange={handleSliderChange}
  />
  <label>Length</label>
  <span>{length}</span>
</div>

      <label>
        <input
          type="checkbox"
          checked={includeLetters}
          onChange={() => setLetters(prev => !prev)}
        />
        Letters
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setNumbers(prev => !prev)}
        />
        Numbers
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeSpecial}
          onChange={() => setSpecial(prev => !prev)}
        />
        Symbols
      </label>

      <button onClick={generatePassword} >Generate</button>

      <div>
        <input type='text' value={password} readOnly/>
        <button onClick={copy} disabled={!password}>Copy</button>
      </div>
    </div>
  );
}

export default Password;