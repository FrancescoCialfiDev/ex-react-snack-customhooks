import './App.css'
import useSwitch from './Hooks/UseSwitch'

function App() {

  const { isOn, toggle } = useSwitch(false)


  return (
    <>
      <h1>{isOn ? "On" : "Off"}</h1>
      <button onClick={toggle}>Cliccami</button>
    </>
  )
}

export default App
