package com.example.server;

import com.example.server.entity.Event;
import com.example.server.mapper.EventMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

@SpringBootTest
public class ConnectTest {
    @Autowired
    DataSource dataSource;
    @Test
    void contestLoad() throws SQLException{
        System.out.println(dataSource.getClass());
        Connection connection = dataSource.getConnection();
        System.out.println(connection);
        //template模板，拿来即用
        connection.close();
    }
    @Autowired
    EventMapper mapper;
    @Test
    public void toTest(){
        Event event = new Event();
        event.setTaskKey("123456");
        event.setUserID("1903015");
        event.setTitle("hello");
        event.setAllDay(false);
        event.setContent("hellp");
        event.setStartTime("123");
        event.setEndTimeMin(120);
        event.setEndTime("1930");
        event.setStartDays("12.9");

        mapper.addEvent(event);
    }
    @Test
    public void toTestSearch(){
        String userID = "oHWQY5Zipyq7fnC-ylNuFn88YRz0";
        List<Event> events = mapper.queryByUserId(userID);
        System.out.println(events);
    }
}
