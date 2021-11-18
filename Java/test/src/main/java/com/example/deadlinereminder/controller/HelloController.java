package com.example.deadlinereminder.controller;

import com.example.deadlinereminder.Dao.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HelloController {
    @ResponseBody
    @RequestMapping("/hello")
    public User hello(){
        User user = new User("贾睿吉","18","你好，我是贾睿吉");
        return user;
    }
}
