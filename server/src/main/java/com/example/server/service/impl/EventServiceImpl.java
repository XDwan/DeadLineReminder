package com.example.server.service.impl;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.example.server.entity.Event;
import com.example.server.service.EventService;

import java.util.List;

public class EventServiceImpl implements EventService {

    @Override
    public List<Event> queryByUserId(long userId) {
        return null;
    }

    @Override
    public String insertEvent(Event event) {
        return null;
    }

    @Override
    public String updateEvent(Event event) {
        return null;
    }

    @Override
    public String deleteEvent(long eventId) {
        return null;
    }

    public Event JSON2Event(JSONObject createDate){
        Event newEvent = new Event();
        newEvent.setTitle(createDate.getString("title"));
        newEvent.setContent(createDate.getString("content"));
        newEvent.setImportantMapValue(createDate.getIntValue("importantMapValue"));
        newEvent.setStartDay(createDate.getString("startday"));
        return newEvent;
    }
}
