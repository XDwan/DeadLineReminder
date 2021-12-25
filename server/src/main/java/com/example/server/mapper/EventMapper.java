package com.example.server.mapper;

import com.example.server.entity.Event;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface EventMapper {
    // 通过UserId查询
    public List<Event> queryByUserId(String userID);
    // 添加新事件
    public void addEvent(Event event);
    // 根据事件id删除
    public int deleteEvent(String eventId);
    /*
    *  不写事件更新是为了数据库修改简单，事件更新先删除在写入（虽然可能暴毙）
    * */
}
