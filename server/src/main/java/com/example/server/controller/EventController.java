package com.example.server.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class EventController {
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
        System.out.println(createData.getString("taskKey"));

        return new String("提交测试");
    }
}
