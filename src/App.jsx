import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import useSwitch from './Hooks/UseSwitch'
import useDate from './Hooks/useDate'

function App() {

  const { isOn, toggle } = useSwitch(false)
  const { data } = useDate(new Date())

  return (
    <>
      <div className="p-4 d-flex justify-content-center align-items-center gap-2">
        <h1>{isOn ? <div id="on" ></div> : <div id="of" ></div>}</h1>
        <button onClick={toggle}>Accendi / Spegni</button>
      </div>

      <div className='p-3'><strong>Current Date:</strong> {data.toLocaleString()
      }</div>
    </>
  )
}

export default App
