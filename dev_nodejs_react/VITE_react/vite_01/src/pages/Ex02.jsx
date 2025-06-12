import { useState, useEffect } from "react"
// React 상태 관리(useState)와 사이드 이펙트(useEffect) 기능을 가져옴

const Inp2 = () => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggle = () => {
        setTheme(what => what === "light" ? "dark" : "light")
    }

    // div.dark-mode>h1+button
    return (
        <>
            <div className={theme == 'light' ? "light-mode" : "dark-mode"}>
                <h1>{theme == 'light' ? "🔅주간 모드" : "🌆야간모드"}</h1>
                <button onClick={toggle}>테마 변경</button>
            </div>
        </>
    )
}
export default Inp2