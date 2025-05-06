import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import useSwitch from './Hooks/UseSwitch'
import useDate from './Hooks/useDate'
import useCustomPointer from "./Hooks/useCustomPointer"
import useKeyPress from "./Hooks/useKeyPress"
import { useState } from "react"

const emojiUrls = [
  "https://emoji.beeimg.com/😃/32/microsoft",
  "https://emoji.beeimg.com/😬/32/microsoft",
  "https://emoji.beeimg.com/💘/32/microsoft",
  "https://emoji.beeimg.com/🐉/32/microsoft",
  "https://emoji.beeimg.com/⛄/32/microsoft",
  "https://emoji.beeimg.com/🤷/32/microsoft",
  "https://emoji.beeimg.com/🍔/32/microsoft",
  "https://emoji.beeimg.com/🤳/32/microsoft",
];

function App() {

  const { isOn, toggle } = useSwitch(false)
  // const { data } = useDate(new Date())
  const [emojiArr, setEmojiArr] = useState("")
  useCustomPointer(emojiArr)
  const isPress = useKeyPress("a")

  return (
    <>
      <div id="content" >
        <div className="p-4 d-flex justify-content-center align-items-center gap-2">
          <h1>{isOn ? <div id="on" ></div> : <div id="of" ></div>}</h1>
          <button onClick={toggle}>Accendi / Spegni</button>
        </div>
        {/* <div className='p-3'><strong>Current Date:</strong> {data.toLocaleString()}</div> */}
        <div className="p-3">
          <h4>Scegli la tua emoji</h4>
          <ul>
            {emojiUrls.map((emoji, index) => { return <img key={index} src={emoji} onClick={() => { setEmojiArr(emoji); console.log(emojiArr) }} /> })}
          </ul>
        </div>
        <div>{isPress ? "True" : "False"}</div>
      </div>
    </>
  )
}

export default App
