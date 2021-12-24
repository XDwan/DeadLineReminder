package com.example.deadline.mapper;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.example.deadline.entity.Event;
@Mapper
public interface UserMapper {
    List<Event> findUserByName(String name);
    public List<Event> ListUser();
    public int insertUser(Event user);
    public int delete(int id);
    public int Update(Event user);
}