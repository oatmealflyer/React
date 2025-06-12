const Inp = () => {
    // localStorage CRUD
    // Create 입력 
    const data = { id: 1, name: "홍길동", comment: "아버지를 부르지 못하고 " }
    const jdata = JSON.stringify(data)
    localStorage.setItem('test3', jdata)
    // Read 읽기
    const readData = localStorage.getItem("test3")
    const oData = JSON.parse(readData)
    // 1개 삭제 
    localStorage.removeItem('test3')
    //모두 삭제 
    localStorage.clear()

    return (
        <>
            <h1>불러왔습니다 .</h1>
            <h2>{typeof (oData.id)}</h2>
            <h2>{typeof (oData.name)}</h2>
            <h2>{typeof (oData.comment)}</h2>
        </>
    )
}
export default Inp