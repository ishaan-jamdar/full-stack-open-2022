import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
   
  const [selected, setSelected] = useState(0);
  // last index of points array is index of current maximum voted
  const [points, setPoints] = useState(Array(anecdotes.length + 1).fill(0));

  const updatePoints = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    if (newPoints[selected] > newPoints[newPoints[newPoints.length - 1]]) {
      newPoints[newPoints.length - 1] = selected;
    }
    setPoints(newPoints);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button onClick={updatePoints} text="vote" />
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[points[points.length - 1]]}</div>
      <div>has {points[points[points.length - 1]]} votes</div>
    </div>
  );
}

export default App;
