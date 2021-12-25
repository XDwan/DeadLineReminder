package com.example.server.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Event {
    String title;
    String content;
    int importantMapValue;
    String startDay;
    String startTime;
    String endTime;
    int StartTimeMin;
    int EndTimeMin;
    boolean isAllDay;
    String taskKey;
    String userID;

    @Override
    public String toString() {
        return "Event{" +
                "title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", importantMapValue=" + importantMapValue +
                ", startDay='" + startDay + '\'' +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", StartTimeMin=" + StartTimeMin +
                ", EndTimeMin=" + EndTimeMin +
                ", isAllDay=" + isAllDay +
                ", taskKey='" + taskKey + '\'' +
                ", userID='" + userID + '\'' +
                '}';
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getImportantMapValue() {
        return importantMapValue;
    }

    public void setImportantMapValue(int importantMapValue) {
        this.importantMapValue = importantMapValue;
    }

    public String getStartDay() {
        return startDay;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public int getStartTimeMin() {
        return StartTimeMin;
    }

    public void setStartTimeMin(int startTimeMin) {
        StartTimeMin = startTimeMin;
    }

    public int getEndTimeMin() {
        return EndTimeMin;
    }

    public void setEndTimeMin(int endTimeMin) {
        EndTimeMin = endTimeMin;
    }

    public boolean isAllDay() {
        return isAllDay;
    }

    public void setAllDay(boolean allDay) {
        isAllDay = allDay;
    }

    public String getTaskKey() {
        return taskKey;
    }

    public void setTaskKey(String taskKey) {
        this.taskKey = taskKey;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }
}
