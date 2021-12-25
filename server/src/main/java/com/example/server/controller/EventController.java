package com.example.server.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.server.entity.Event;
import com.example.server.mapper.EventMapper;
import com.example.server.service.impl.EventServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class EventController {
    @Autowired
    private EventMapper mapper;
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
        System.out.println("createTask");
        System.out.println(createData);
        String userID = createData.getString("userID");
        System.out.println(createData.getString("taskKey"));
        System.out.println(createData.getString("userID"));
        System.out.println(userID);
        Event event = eventService.JSON2Event(createData);
        System.out.println(event);
        mapper.addEvent(event);
        return new String("提交测试");
    }
    @PostMapping("/wx/selectDay")
    @ResponseBody
    public List<Event> wxSelectTask(@RequestBody JSONObject postData){
        System.out.println("selectDay");
        Event selectEvent = new Event();
        System.out.println(postData);
        List<Event> events = mapper.queryByUserId(postData.getString("userID"));
        System.out.println(events);
        List<Event> returnEvents = new ArrayList<>();
        for (Event event:events){
            if (event.getStartDays().compareTo(postData.getString("day"))==0){
                returnEvents.add(event);
            }
        }
        System.out.println(returnEvents);
        return returnEvents;
    }
    @PostMapping("/wx/deleteTask")
    @ResponseBody
    public String wxDeleteTask(@RequestBody JSONObject postData){
        System.out.println(postData);
        List<Event> events = mapper.queryByUserId(postData.getString("userID"));
        boolean isExist = false;
        for (Event event:events){
            if (event.getTaskKey().compareTo(postData.getString("taskKey"))==0){
                isExist = true;
            }
        }
        if (isExist){
            mapper.deleteEvent(postData.getString("taskKey"));
            return new String("删除");
        }

        return new String("未发现");
    }
}
