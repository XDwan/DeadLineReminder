package com.example.deadlinereminder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class DeadlineReminderApplication {

    public static void main(String[] args) {
        SpringApplication.run(DeadlineReminderApplication.class, args);
    }

}
