import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statictic = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statictics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return <p>No feedback given</p>;
  } else {
    const average = (good - bad) / all;
    const positive = String((good / all) * 100).concat("%");

    return (
      <div>
        <table>
          <Statictic text="good" value={good} />
          <Statictic text="neutral" value={neutral} />
          <Statictic text="bad" value={bad} />
          <Statictic text="all" value={all} />
          <Statictic text="average" value={average} />
          <Statictic text="positive" value={positive} />
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

      <h1>statistics</h1>
      <Statictics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
