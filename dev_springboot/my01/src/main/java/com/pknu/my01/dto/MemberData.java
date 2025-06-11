package com.pknu.my01.dto;

import java.time.LocalDate;

public class MemberData {
    private String name;
    private LocalDate birthData;

    /* 생성자: 클래스이름과 동일한 이름의 메서드 */
    public MemberData(String name, LocalDate birthData) {
        this.name = name;
        this.birthData = birthData;
    }

    /* get함수로 내부안의 name 읽어오기 */
    /* 롬북은 이걸 매번 변수마다 불러오고 읽는 걸 대신 해줌 */
    public String getName() {
        return name;
    }

    public LocalDate getbirthData() {
        return birthData;
    }

}

// js
// const arr = new Array()
// const num = new Number()