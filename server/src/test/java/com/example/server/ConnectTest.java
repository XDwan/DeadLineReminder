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
    EventMapper eventMapper;
    @Test
    public void toTest(){
        List<Event> events = eventMapper.queryByUserId("");
        for (Event event:events){
            System.out.println(event);
        }
    }
}
