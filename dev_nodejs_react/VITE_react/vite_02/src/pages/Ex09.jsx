import { useEffect, useState } from "react"

const Child = () => {
    const [count, setCount] = useState(0)
    const mystyle = {
        border: "2px solid #333",
        borderRadius: '10px',
        padding: '1rem',
        backgroundColor: 'beige',
        color: 'black',
        margin: '10px'
    }

    console.log(`1.컴포넌트 함수(Child)가 실행됨 #${count}`)
    let tt = 1
    useEffect(() => {
        console.log("2.마운트 또는 업데이트 : useEffect 실행됨")
        const timer = setInterval(() => {
            console.log(`1초마다 실행됨. #${tt++} 메모리 사용중...`)
        }, 1000)
        return () => {
            console.log("3.클린업 : 언마운트 또는 업데이트 직전에 청소")
            clearInterval(timer)
            console.log("타이머 정리됨")
        }
    }, [count])

    return (
        <div style={mystyle}>
            <h2>자식 컴포넌트 테스트중</h2>
            <p>카운트 : {count}</p>
            <button onClick={() => setCount(count + 1)}>+1 증가</button>
        </div>
    )
}
const Eff = () => {
    const [show, setShow] = useState(true)
    return (
        <>
            <h1>9. useEffect 생명주기 실습 </h1>
            <button onClick={() => setShow(!show)}>{show ? '자식컴포넌트 숨기기' : '자식컴포넌트 보이기'}</button>
            {show && <Child />}
        </>
    )
}
export default Eff

/*React 의 useEffect 를 이용한 컴포넌트 생명주기 실습을 위한 예제
Eff : 부모 컴포넌트 
부모 컴포넌트에서 버튼을 클릭하면 Child 컴포넌트의 생성과 제거를 조작할 수 있음 
Child 컴포넌트 내부에서는 useEffect를 사용해 타이머 관리 
Child : 자식 컴포넌트
*/

/* Eff(부모 컴포넌트)
   show 라는 상태 변수(useState) 를 가지고 있으며 
   초기값은 true 
   처음에는 Child 컴포넌트가 화면에 보이도록 설정 
   버튼을 클릭하면 show값이 변경되며 , 그에 따라 Child 컴포넌트가 생성되거나 사라짐 
   show가 true 일때만 <Child /> 컴포넌트가 화면에 렌더링 됨 
*/

/* Child(자식 컴포넌트 )
   count라는 상태 변수(useState)를 가지고 있으며 초기값은 0 
   버튼을 클릭하면 count 값이 증가 , 이에 따라 useEffect 가 다시 실행됨 
   useEffect 내부에서 setInterval 을 설정해 1초마다 콘솔에 메세지를 출력하지만 
   컴포넌트가 언마운트 될 때 타이머를 정리(cleanup) 하도록 설정 
*/

/* 

*/