package com.example.controller;

import com.example.domain.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //相当于ResponseBody+Controller
@CrossOrigin 	//解决跨域问题的注解
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/list")
    @ResponseBody
    public List<User> userList(@RequestParam(defaultValue = "")String name){
        List<User> userList  =   userService.listByName(name);
        return userList;
    }
}
