package com.example.deadlinereminder.Dao;

public class User {
    String name;
    String age;
    String hello;
    public User(String name, String age, String hello){
        this.name = name;
        this.age = age;
        this.hello = hello;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getHello() {
        return hello;
    }

    public void setHello(String hello) {
        this.hello = hello;
    }
}
