package com.example.server.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.server.entity.Event;
import com.example.server.service.impl.EventServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class EventController {
    private EventServiceImpl eventService = new EventServiceImpl();
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
        String userID = createData.getString("userID");
        System.out.println(createData.getString("taskKey"));
        System.out.println(createData.getString("userID"));
        System.out.println(userID);
        Event event = eventService.JSON2Event(createData);
        System.out.println(event);
        eventService.insertEvent(event);
        return new String("提交测试");
    }
    @PostMapping("/wx/selectDay")
    @ResponseBody
    public Event wxSelectTask(@RequestParam String userID,@RequestParam String day){
        Event selectEvent = new Event();
        System.out.println(userID);
        System.out.println(day);
        return selectEvent;
    }
}
