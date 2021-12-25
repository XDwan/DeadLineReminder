package com.example.server.service.impl;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.example.server.entity.Event;
import com.example.server.mapper.EventMapper;
import com.example.server.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service()
public class EventServiceImpl implements EventService {

    @Autowired
    private EventMapper mapper;

    @Override
    public List<Event> queryByUserId(String userId) {
        return mapper.queryByUserId(userId);
    }

    @Override
    public void insertEvent(Event event) {
        System.out.println(event);
        mapper.addEvent(event);
    }

    @Override
    public String updateEvent(Event event) {
        String eventID = event.getTaskKey();
        mapper.deleteEvent(eventID);
        mapper.addEvent(event);
        return null;
    }

    @Override
    public int deleteEvent(String eventId) {
        return mapper.deleteEvent(eventId);
    }

    public Event JSON2Event(JSONObject createDate){
        Event newEvent = new Event();
        newEvent.setTitle(createDate.getString("title"));
        newEvent.setContent(createDate.getString("content"));
        newEvent.setTaskKey(createDate.getString("taskKey"));
        newEvent.setUserID(createDate.getString("userID"));
        newEvent.setImportantMapValue(createDate.getIntValue("importantMapValue"));
        newEvent.setStartDays(createDate.getString("startDay"));
        newEvent.setStartTime(createDate.getString("startTime"));
        newEvent.setEndTime(createDate.getString("endTime"));
        newEvent.setEndTimeMin(createDate.getIntValue("EndTimeMin"));
        newEvent.setStartTimeMin(createDate.getIntValue("StartTimeMin"));
        newEvent.setAllDay(createDate.getBoolean("isAllday"));
        return newEvent;
    }
}
