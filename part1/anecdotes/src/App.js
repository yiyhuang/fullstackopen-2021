import React, { useState } from "react";

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Anecdote = ({ anecdotes, index, votes }) => {
  return (
    <div>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
    </div>
  );
};

const MostVotesAnecdote = ({ anecdotes, votes }) => {
  let maxVotes = Math.max(...votes);
  let maxVotesIndex = 0;

  for (let i = 0; i < votes.length; i++) {
    if (votes[i] === maxVotes) {
      console.log("maxVotes = ", maxVotes);
      console.log("votes[i] = ", votes[i]);
      maxVotesIndex = i;
      break;
    }
  }
  return <Anecdote anecdotes={anecdotes} index={maxVotesIndex} votes={votes} />;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const updateSelected = () => {
    let randomIndex = randomNum(0, anecdotes.length - 1);
    while (randomIndex === selected) {
      randomIndex = randomNum(0, anecdotes.length - 1);
    }
    setSelected(randomIndex);
  };

  const voteSelected = () => {
    let updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} index={selected} votes={votes} />
      <button onClick={updateSelected}>next</button>
      <button onClick={voteSelected}>vote</button>

      <h1>Anecdote with most votes</h1>
      <MostVotesAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
