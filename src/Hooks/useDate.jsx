import { useState, useEffect } from "react";

function useDate(initialValue) {

    const [data, setData] = useState({ data: initialValue })
    useEffect(() => {
        const update = setInterval(() => {
            setData(prev => ({ ...prev, data: new Date() }))
        }, 1000)

        return () => { clearInterval(update) }
    }, [])

    return data

}

export default useDate;