package com.example.deadline.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.HashMap;
import java.util.Map;

@Controller

public class LoginController {

    @PostMapping("/wx/login")
    @ResponseBody
    public String wxLogin(@RequestBody JSONObject data){
        System.out.println(data);
        return new String("登录测试");
    }

    @PostMapping("/wx/createTask")
    @ResponseBody
    public String wxCreateTask(@RequestBody JSONObject createData){
        System.out.println(createData);
        return new String("提交测试");
    }
}
