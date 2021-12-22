package com.example.deadline.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLOutput;
import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {

    @PostMapping("/wx/login")
    public String wxLogin(@RequestParam("data") JSONObject data){
        System.out.println(data);
        return new String("登录测试");
    }
}
