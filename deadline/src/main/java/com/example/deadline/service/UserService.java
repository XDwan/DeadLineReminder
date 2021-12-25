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
    public Event insertEvent(Event event) { userMapper.insertUser(event);return event;}
    public List<Event> ListEvent(){
        return  userMapper.ListUser();
    }
    public int Update(Event event){
        return userMapper.Update(event);
    }
    public int delete(int EventId){
        return userMapper.delete(EventId);
    }
}