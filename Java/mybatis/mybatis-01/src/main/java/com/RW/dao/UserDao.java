package com.RW.dao;

import com.RW.pojo.User;

import java.util.List;

public interface UserDao {
    //获取全部用户
    List<User> getUserList();

    //根据ID查询用户
    User getUserById();

}
