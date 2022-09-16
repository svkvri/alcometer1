import { useState } from 'react'
import './App.css';

function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function calculating() {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let alcoholLevel = 0;

    gender === "male" ? alcoholLevel = gramsLeft / (weight * 0.7) : alcoholLevel = gramsLeft / (weight * 0.6);
    if (alcoholLevel < 0) alcoholLevel = 0;
    setResult(alcoholLevel);
  }
  const options = [];

  for (let i = 1; i <= 10; i++) {
    options.push(<option key={i} value={i}>{i}</option>)
  }



  return (
    <form>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>

      <div>
        <label>Bottles</label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          {options}
        </select>
      </div>

      <div>
        <label>Time</label>
        <select name="time" value={time} onChange={e => setTime(e.target.value)}>
          {options}
        </select>
      </div>

      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} defaultChecked></input><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input><label>Female</label>
      </div>
      <div className="resultDiv">
        <output>{result.toFixed(2)}</output>
      </div>
      <button type="button" onClick={calculating}>Calculate</button>
    </form>
  );
}
export default App;
