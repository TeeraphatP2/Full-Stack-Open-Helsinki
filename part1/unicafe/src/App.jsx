import {useState} from 'react'

const Statistics = (props) => {
  const good = props.goodState
  const neutral = props.neutralState
  const bad = props.badState

  const statistics = () => {
    if((good || neutral || bad) === 0){
      return(
          <h3>No feedback given</h3>  
      )
    }else {
      return(
      <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {allValue}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </>
      )
    }
  }

  const allValue = good + neutral + bad
  const average = (good - bad) / allValue
  const positive = (good / allValue) * 100

  return (
    <div>
      <h2>statistics</h2>
      {statistics()}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics goodState={good} neutralState={neutral} badState={bad}/>
    </div>
  )
}
export default App