/* 사용할 모듈 정의 
   useState는 React의 상태 관리 기능 제공(사용자의 입력값을 저장하는 역할)
   crypto-js 는 암호화 라이브러리로 데이터를 안전하게 변환하는 기능 제공
*/
import { useState } from 'react'
import Crypto from 'crypto-js'

/* 상태(State) 정의 
   const [변수, 함수] = useState('')
   useState는 T사용자의 입력값을 저장하는 역할 , React 상태 관리 기능 제공 
*/

const [inid, setInid] = useState('')
const [inpw, setInpw] = useState('')
const [skey, setSkey] = useState('')
/* inid,inpw,skey : 사용자가 입력하는 ID,비밀번호,암호화 키(Key )
   encrpyt : 암호화된 데이터를 저장할 변수
*/
const [encrypt, setEncrypt] = useState('')

/* 암호화 함수 */
const encryptFn = () => {
    const data = { id: inid, pw: inpw } // 사용자가 입력한 ID와 PW 를 객체 형태로 만든뒤 
    // JSON.stringify() 를 사용해 문자열로 변환 
    // 이 데이터를 Crypto.AES.encrypt() 를 이용해 AES 알고리즘으로 암호화
    // 암호화 된 값을 setEncrypt(encData) 로 저장  
    const encData = Crypto.AES.encrypt(JSON.stringify(data), skey).toString(setEncrypt(encData))
}

/* 입력값 관리 핸들러  */
// 사용자가 입력한 값(ID, PW, Key)을 상태에 업데이트 하는 역할 
const handleIdChange = e => setInid(e.target.value)
const handlePwChange = e => setInpw(e.target.value)
const handleKeyInput = e => setSkey(e.target.value)

/* UI 랜더링 
사용자가 ID,PW,KEY 를 입력하면 해당 값을 화면에 표시 
button 을 클릭하면 암호화 과정 수행 
암호화 되기 전과 후의 데이터를 화면에서 볼 수 있음 
*/
return (
    <>
        <h1>2.암호화,복호화,단방향</h1>
        {/* onChange는 React에서 기본적으로 제공하는 이벤트 핸들러 
            input 요소에 사용자가 값을 입력하면 자동으로 실행되는 함수 

            코드 상세 분석 : 
            
            사용자가 입력을 변경하면 브라우저가 onChange 이벤트를 발생 시킴 
            handleIdChange(e) , handlePwChange(e),handleKeyInput(e) 함수가 호출됨 
            e.target.value 를 통해 입력된 값(value)을 가져와서 해당 상태(useState) 를 업데이트 
            상태가 변경되면 React는 자동으로 UI를 다시 렌더링해 최신 값을 화면에 반영 

            onChange는 React의 상태를 업데이트 하면서, 
            UI를 동적으로 변경하는 역할을 함 

        */}
        <div>
            ID: <input type="text" onChange={handleIdChange} value={inid} />
        </div>
        <div>
            PW : <input type="password" onChange={handlePwChange} value={inpw} />
        </div>
        <div>
            Key : <input type="password" onChange={handleKeyInput} value={skey} />
        </div>
        <button onClick={encryptFn}>암호화 동작</button>
        <hr />
        {/* 암호화 전후 출력 코드 분석 */}
        <div>암호화 전 :{(inid && inpw) && JSON.stringify({ id: inid, pw: inpw })}</div><br />
        {/* 암호화 전 
            (inid && inpw) : ID와 PW 가 모두 입력 되었을 때만 실행 -> 만약 둘 중 하나라도 입력되지 않았다면 false가 되고, 뒤의 코드가 실행되지 않음 
            JSON.stringify({id:inid,pw:inpw}) : 사용자의 ID와 비밀번호를 JSON 형식의 문자열로 변환 -> 예) {"id":"user123" , "pw":"mypassword"}
        */}
        <div>{(!!encrypt) && `암호화 후: ${encrypt} (글자수: ${encrypt.length})`}</div> <hr />

        {/* 암호화 후
        {(!!encrypt) && `암호화 후: ${encrypt} (글자수: ${encrypt.length})`}
        !!encrpyt : 암호화된 데이터가 존재하는 경우에만 실행 -> !!는 값이 존재하는지 확인하는 연산자(Falsy값이면 false, Truthy 값이면 true)
        encrypt : AES 암호화된 문자열 
        encrtyp.length : 암호화된 문자열의 길이 출력 
        */}

        {/* 실행 예시 
        입력 : 
        ID : user123
        Pw : mypassword 
        Key : secret123 

        출력 : 
        암호화 전 : {"id" :"user123","pw":"mypassword"}
        암호화 후 : U2FsdGVkX1+fz ... (글자수 :64)

        */}

        {/* 흐름 정리
            1. 사용자가 입력을 변경하면 onChange 이벤트가 발생해 상태가 업데이트 됨 
            2. 버튼을 누르면 암호화 함수가 실행됨(encryptFn)
            3. 암호화된 결과를 setEncrypt() 를 통해 저장
            4. !! encrypt를 활용해 암호화된 데이터가 있으면 화면에 출력 
        */}

    </>
)