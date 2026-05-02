import React, { useState } from 'react';

function Password() {

  const [length, setLength] = useState(3);
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

  const generatePassword = () => {
  if (length === 0) return;

  const types = [];

  if (includeLetters) types.push(letters);
  if (includeNumbers) types.push(numbers);
  if (includeSpecial) types.push(specials);

  // 🚫 nothing selected
  if (types.length === 0) {
    setPassword("");
    return;
  }

  let result = [];

  // ✅ base distribution
  const baseCount = Math.floor(length / types.length);
  let remainder = length % types.length;

  // Step 1: assign base count to each type
  types.forEach((set) => {
    for (let i = 0; i < baseCount; i++) {
      const index = Math.floor(Math.random() * set.length);
      result.push(set[index]);
    }
  });

  // Step 2: distribute remainder (extra characters)
  for (let i = 0; i < remainder; i++) {
    const set = types[i % types.length];
    const index = Math.floor(Math.random() * set.length);
    result.push(set[index]);
  }

  // Step 3: shuffle
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  setPassword(result.join(""));
};

const copy = async() => {
  if(!password) return;

  try {
    await navigator.clipboard.writeText(password);
    alert("Copied to clipboard");
  } catch(err) {
    console.error("Failed to copy:",err)
  }

}

  return (
    <div>
      <h2>Password Generator</h2>

      <input
        type="range"
        min="3"
        max="30"
        value={length}
        onChange={handleSliderChange}
      />
      <span> Length: {length} </span>

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
        <strong>Password: </strong>{password}
        <button onClick={copy} disabled={!password}>Copy</button>
      </div>
    </div>
  );
}

export default Password;