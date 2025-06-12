import { useState } from "react";
import list from "./list"

const Check = () => {
    const [chk, setChk] = useState({})
    const handleChk = e => {
        const { value, checked } = e.target
        setChk(data => {
            //업데이트 하는 부분 
            return { ...data, [value]: checked }
        })
    }
    return (
        <>
            <h1>6. 체크박스 값 확인</h1>
            <h2>{JSON.stringify(chk)}</h2>

            {list.map((v, i) => {

                return (
                    <span key={i}>
                        <input type="checkbox" onChange={handleChk} value={v} />{v}{"/"}<br />

                    </span>
                )
            })}

            <ol style={{ "listStylePosition": "inside" }}>
                {list
                    .filter(ck => chk[ck])
                    .map((v) => <li>{v}</li>)}
            </ol>
        </>
    )
}

export default Check