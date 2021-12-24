package com.example.deadline.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.deadline.entity.Event;
import com.example.deadline.mapper.UserMapper;
@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;
    public List<Event> findByName(String name) {
        return userMapper.findUserByName(name);
    }
    public Event insertUser(Event user) { userMapper.insertUser(user);return user;}
    public List<Event> ListUser(){
        return  userMapper.ListUser();
    }
    public int Update(Event user){
        return userMapper.Update(user);
    }
    public int delete(int id){
        return userMapper.delete(id);
    }
}