import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

let mostVoted = 0

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  
  const changeAnecdote = () => {
    updateTop()
    console.log (mostVoted)
    return (
      setSelected(Math.floor(Math.random() * 6))
    )
  }
  
 const updateTop = () => {
  return (
    mostVoted = points.indexOf(Math.max(...points))
  )
 } 

  const updatePoints = () => {
    const newPoints = [...points]
    newPoints[selected]++
    setPoints(newPoints)
    console.log(points)
    updateTop()
        return (
      setPoints(newPoints)
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={updatePoints}>vote</button>
      <button onClick={changeAnecdote}>next anecdote</button>
      <p></p>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {points[mostVoted]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)