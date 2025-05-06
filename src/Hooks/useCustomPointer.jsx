// 🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.
//
// Cosa deve fare ?
//
//     Prende in input una stringa o un JSX component(es.un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.
// Esempio di utilizzo:

import { useEffect } from "react";

function useCustomPointer(emojiArr) {
    useEffect(() => {
        document.body.style.cursor = `url(${emojiArr}), auto`;

        return () => { document.body.style.cursor = `default`; }
    }, [emojiArr])

}

export default useCustomPointer