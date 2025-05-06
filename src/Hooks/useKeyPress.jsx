/**
🎯 Bonus: useKeyPress() – Rilevare un Tasto Premuto
Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.
Cosa deve fare?
Prende in input il nome di un tasto ("Enter", "Escape", ecc.).
Ritorna true quando il tasto è premuto e false quando viene rilasciato.
Usa event listener su keydown e keyup.
Esempio di utilizzo:
 */
import { useState, useEffect } from "react"

function useKeyPress(key) {

    const [isPress, setIsPress] = useState(false)

    useEffect(() => {

        const onKeyDown = (event) => {
            if (event.key === key) {
                setIsPress(true)
            }
        }
        const onKeyUp = (event) => {
            if (event.key === key) {
                setIsPress(false)
            }
        }

        window.addEventListener("keydown", onKeyDown)
        window.addEventListener("keyup", onKeyUp)

        console.log(isPress)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
            window.removeEventListener("keyup", onKeyUp)
        }
    }, [])

    return isPress

}

export default useKeyPress;