import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import useSwitch from './Hooks/UseSwitch'
import useDate from './Hooks/useDate'
import useCustomPointer from "./Hooks/useCustomPointer"
import useKeyPress from "./Hooks/useKeyPRess"
import { useState } from "react"

const emojiUrls = [
  "😃",
  "😬",
  "💘",
  "🐉",
  "⛄",
  "🤷",
  "🍔",
  "🤳",
];

function App() {
  const [emojiArr, setEmojiArr] = useState()
  const customPointer = useCustomPointer(emojiArr);
  const { isOn, toggle } = useSwitch(false)
  const { data } = useDate(new Date())
  const isPress = useKeyPress("a")

  return (
    <>
      <div id="content" >

        <div className="p-4 d-flex justify-content-center align-items-center gap-2">
          <h1>{isOn ? <div id="on" ></div> : <div id="of" ></div>}</h1>
          <button onClick={toggle}>Accendi / Spegni</button>
        </div>

        <div className='p-3'><strong>Current Date:</strong> {data.toLocaleString()}</div>

        <div id="cursor">
          <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
          {customPointer}
        </div>


        <div className="p-3">
          <h4>Scegli la tua emoji</h4>
          <ul style={{ display: "flex" }}>
            {emojiUrls.map((emoji, index) => { return <div key={index} onClick={() => { setEmojiArr(emoji); console.log(emojiArr) }}>{emoji}</div> })}
          </ul>
        </div>

        <div>{isPress ? "True" : "False"}</div>

      </div>
    </>
  )
}

export default App
