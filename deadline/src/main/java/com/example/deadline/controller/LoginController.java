package com.example.deadline.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.deadline.entity.Event;
import com.example.deadline.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.HashMap;
import java.util.Map;

@Controller

public class LoginController {

    private UserService userservice;

    @PostMapping("/wx/login")
    @ResponseBody
    public String wxLogin(@RequestBody JSONObject data){
        System.out.println(data);

//        data.get('title');
        userservice.insertEvent(new Event());
        return new String("登录测试");
    }

    @PostMapping("/wx/createTask")
    @ResponseBody
    public String wxCreateTask(@RequestBody JSONObject createData){
        System.out.println(createData);
        Event newEvent = new Event();
        newEvent.setTaskKey(createData.getString("taskKey"));
        System.out.println(createData.getString("taskKey"));

        return new String("提交测试");
    }

}
