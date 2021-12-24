package com.example.server.service;

import com.example.server.entity.Event;

import java.util.List;

public interface EventSolverService {
    // 查询用户的事件
    public List<Event>  queryByUserId(long userId);
    // 创建新的任务
    public String insertEvent(Event event);
    // 修改任务内容
    public String updateEvent(Event event);
    // 删除任务
    public String deleteEvent(long eventId);
}
