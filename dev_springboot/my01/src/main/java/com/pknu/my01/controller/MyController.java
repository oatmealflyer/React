package com.pknu.my01.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.pknu.my01.dto.BungBbang;
import com.pknu.my01.dto.MemberData;

/* 여기를 라우터라고 부르심 */
@Controller
public class MyController {
    @GetMapping("/")
    public String mainPage(Model model) {
        List<String> pageNames = List.of("model", "increase", "fragments", "ifunless", "DTO1_ex1", "DTO2_ex2",
                "GET_querystring", "GET_pathvariable", "POST_formdata", "final_chatbot");
        model.addAttribute("pages", pageNames);
        return "index"; // templates/index.html
    }

    @GetMapping("/ex01")
    public String ex01(Model model) {
        model.addAttribute("hello", "만나서 아주 반갑습니다.스프링부트 시작합니다");
        model.addAttribute("name", "홍길동");
        model.addAttribute("age", 22);
        return "ex01";
    }

    @GetMapping("/model")
    public String ex01a(Model model) {
        model.addAttribute("test1", "테스트1입니다");
        model.addAttribute("test2", "테스트2입니다");
        model.addAttribute("test3", "테스트3입니다");
        return "ex01a";
    }

    @GetMapping("/increase")
    public String ex02(Model model) {
        List<Integer> sampleNumbers = List.of(11, 22, 33, 44, 55, 66, 77);
        model.addAttribute("numbers", sampleNumbers);
        return "ex02"; // templates/ex02.html
    }

    @GetMapping("/fragments")
    public String ex03String(Model model) {
        return "ex03"; // templates/ex03.html
    }

    @GetMapping("/ifunless")
    public String ex04(Model model) {
        model.addAttribute("isAdmin", true);
        model.addAttribute("who", "이경주");
        List<String> itm = new ArrayList<>();
        itm.add("사과");
        itm.add("복숭아");
        itm.add("바나나");
        itm.add("수박");
        itm.add("망고");
        itm.add("포도");
        itm.add("참외");
        model.addAttribute("items", itm);
        return "ex04"; // templates/ex03.html
    }

    @GetMapping("/DTO1_ex1")
    public String ex05(Model model) {

        /* 틀을 가져와 실체화를 시키겠다 */
        MemberData member = new MemberData("홍길동", LocalDate.of(2001, 5, 5));
        MemberData smember = new MemberData("슈퍼맨", LocalDate.of(1995, 7, 5));
        model.addAttribute("member", member);
        model.addAttribute("smember", smember);
        /*
         * MemberData member2 = new MemberData("슈크림", LocalDate.of(2001, 5, 5));
         * MemberData member3 = new MemberData("피자", LocalDate.of(2001, 5, 5));
         */

        return "ex05";
    }

    @GetMapping("/DTO2_ex2")
    public String ex06(Model model) {

        List<BungBbang> bungs = List.of(
                /* 틀을 가져와 실체화를 시키겠다 */
                new BungBbang("팥붕어빵", 1000, LocalDate.of(2025, 6, 4)),
                new BungBbang("슈크림붕어빵", 1300, LocalDate.of(2025, 6, 4)),
                new BungBbang("초코붕어빵", 1200, LocalDate.of(2025, 6, 2)));
        model.addAttribute("bungs", bungs);
        return "ex06";
    }

    @GetMapping("/GET_querystring")
    public String ex07(@RequestParam(required = false) String inName, String inAge, String inGen, String want,
            String allow, Model model) {

        System.out.println("이름" + inName);
        System.out.println("나이" + inAge);
        System.out.println("성별" + inGen);
        System.out.println("언어" + want);
        System.out.println("동의" + allow);

        List<String> content = List.of(
                "이름:" + inName,
                "나이:" + inAge,
                "성별:" + inGen,
                "언어:" + want,
                "동의:" + allow);
        model.addAttribute("content", content);
        return "ex07";
    }

    @GetMapping({ "/GET_pathvariable", "/pathvariable/{name}", "/pathvariable/{name}/{age}" })
    public String ex08(@PathVariable(required = false) String name, @PathVariable(required = false) String age,
            Model model) {
        System.out.println("이름:" + name + "나이:" + age);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "ex08";
    }

    @GetMapping("/POST_formdata")
    public String ex09() {
        return "ex09";
    }

    @PostMapping("/POST_formdata")
    public String ex09Post(@RequestParam String name, @RequestParam String age, Model model) {
        // System.out.println("이름:" + name + "나이:" + age);
        // model.addAttribute("name", name);
        // model.addAttribute("age", age);
        try {
            int parseAge = Integer.parseInt(age);
            model.addAttribute("name", name);
            model.addAttribute("age", parseAge);
        } catch (NumberFormatException e) {
            model.addAttribute("error", "나이는 숫자로 입력해야 합니다");
        }
        return "ex09";
    }

    @GetMapping("/final_chatbot")
    public String ex10() {
        return "ex10";
    }

}
