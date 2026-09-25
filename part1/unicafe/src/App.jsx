import {useState} from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = (props) => {
  const good = props.goodState
  const neutral = props.neutralState
  const bad = props.badState

  const allValue = good + neutral + bad
  const average = (good - bad) / allValue
  const positive = (good / allValue) * 100

  const statistics = () => {
    if((good && neutral && bad) === 0){
      return(
          <h3>No feedback given</h3>  
      )
    }else {
      return(
        <>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <p>allValue {allValue}</p>
          <p>Average {average}</p>
          <p>Positive {positive}</p>
        </>
      )
    }
  }
  return (
    <div>
      <h2>statistics</h2>
      {statistics()}
    </div>
  )
}

const Button = ({feedbackGiven, name}) => {
  const addFeedbackValue = () => {
    const value = feedbackGiven[0]
    const setValue = feedbackGiven[1]
    return setValue(value + 1)
  } 
  return (
    <button onClick={addFeedbackValue}>{name}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button feedbackGiven={[good, setGood]} name="good"/>
      <Button feedbackGiven={[neutral, setNeutral]} name="netral"/>
      <Button feedbackGiven={[bad,setBad]} name="bad"/>
      <Statistics goodState={good} neutralState={neutral} badState={bad}/>
    </div>
  )
}
export default App