/* 사용할 모듈 정의
    useState는 React의 상태 관리 기능 제공(사용자의 입력값을 저장하는 역할)
    crypto-js는 암호화 라이브러리로 데이터를 안전하게 변환하는 기능 제공 
*/
import { useState } from 'react'
import Crypto from 'crypto-js'

/* inid, inpw,skey : 사용자가 입력하는 ID,PW,KEY 
   encrypt : 암호화된 데이터를 저장할 변수  */
const Cryp = () => {
    const [inid, setInid] = useState('')
    const [inpw, setInpw] = useState('')
    const [skey, setSkey] = useState('')

    const [encrypt, setEncrypt] = useState('') // 암호화 
    const [decrypt, setDecrypt] = useState('') // 복호화 
    const [sha, setSha] = useState('') //단방향 SHA256 해시 

    /* 암호화 함수  */
    const encryptFn = () => {
        const data = { id: inid, pw: inpw } // 사용자가 입력한 ID와 PW를 객체 형태로 만든뒤 
        //JSON.stringify() 를 사용해 문자열로 변환 
        // 이 데이터를 Crypto.AES.encrypt() 를 이용해 AES 알고리즘으로 암호화 
        // 암호화 된 값을 setEncrypt(encData) 로 저장  
        const encData = Crypto.AES.encrypt(JSON.stringify(data), skey).toString() // skey와 함께 데이터 암호화 
        setEncrypt(encData)
    }
    /* decrpytFn() 는 AES 암호화된 데이터를 복호화(원래대로 복원)하는 역할
        사용자가 입력한 암호화 키(skey)를 이용해 암호화된 데이터를 원래 형태로 변환하는 과정
    */

    /* 상세 코드 분석 
       예외 처리(try-catch-finally)
       예외 처리(에러 헨들링 기능 ) 포함 

    */
    const decryptFn = () => {
        try {
            /* 
            암호화된 데이터 encrypt 를 복호화
            -> 여기서 사용자가 입력한 암호화 키(skey)가 있어야 원본 데이터로 변환 가능
            -> 암호화 키가 잘못되면 정상적으로 복호화 되지 않고 에러 발생 */
            const bytes = Crypto.AES.decrypt(encrypt, skey)

            // 바이트 데이터를 문자열로 변환 
            /* bytes.toString(Crypto.enc.Utf8) : 암호화된 데이터를 사람이 읽을 수 있는 문자열로 변환
               JSON.parse() : 원본 데이터가 JSON 형식이므로 다시 객체로 변환 
            */
            const decrypted = JSON.parse(bytes.toString(Crypto.enc.Utf8))

            /* 예시 
            암호화된 데이터 : "U2FsdGVkX1+fzQq3hfUX..."
            복호화된 데이터 : { "id": "user123", "pw": "mypassword" }
            */

            /* 결과를 React 상태로 저장 (setDecrypt()) 
               복호화된 데이터를 setDecrypt() 에 저장해서 화면에 표시 가능하게 만듦
            */
            setDecrypt(decrypted)

        } catch (error) { // 복호화 실패시 에러 메시지 출력 
            console.log('복호화 오류', error)
            alert('복호화에 실패하였습니다. 암호화키를 확인하세요')
        } finally { // 항상 실행되는 코드로 , 암호화 키 관리 주의 안내 
            alert('암호키관리에 주의하세요')
        }
    }

    const sha256Fn = () => {
        const data = { id: inid, pw: inpw } // 원하는 형태로 객체화 
        const encData = Crypto.SHA256(JSON.stringify(data)).toString() // skey와 함께 데이터 암호화 
        setSha(encData)
    }

    // 핸들러 
    const handleIdChange = e => setInid(e.target.value)
    const handlePwChange = e => setInpw(e.target.value)
    const handleKeyInput = e => setSkey(e.target.value)

    return (
        <>
            <h1> 2.암호화,복호화,단방향</h1>
            <div>
                ID : <input type="text" onChange={handleIdChange} value={inid} />
            </div>
            <div>
                Pw : <input type="password" onChange={handlePwChange} value={inpw} />
            </div>
            <div>
                Key : <input type="password" onChange={handleKeyInput} value={skey} />
            </div>
            <button onClick={encryptFn} disabled={!(inid && inpw && skey)}>암호화 동작</button>
            <hr />
            <div>암호화 전:{(inid && inpw) && JSON.stringify({ id: inid, pw: inpw })}</div><br />
            <div>{(!!encrypt) && `암호화 후: ${encrypt} (글자수: ${encrypt.length}) `}</div><hr />

            <div>복호화 암호키
                <input type="password" onChange={handleKeyInput} value={skey} />
            </div>
            <button onClick={decryptFn}>복호화 동작</button>
            <div>{!!decrypt && JSON.stringify(decrypt)}</div>
            <div>{`복호화 된 데이터 : ID는 ${decrypt.id}이고 , PASSWORD는 ${decrypt.pw}입니다`}</div>
            <hr />
            <button onClick={sha256Fn} disabled={!(inid && inpw && skey)}>단방향 암호화 하기</button>
            <h3>{sha && `SHA256 암호화:${sha} (길이):${sha.length}`}</h3>

        </>
    )
}

export default Cryp