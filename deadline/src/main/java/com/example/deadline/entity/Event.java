package com.example.deadline.entity;
public class Event {

    private String taskKey;
    private String title;
    private String startTime;
    private String endTime;
    private String startDays;
    private String startTimeMin;
    private String endTimeMin;
    private String importantMapValue;
    private String isAllday;
    private String content;

    public String getTaskKey() {
        return taskKey;
    }

    public void setTaskKey(String taskKey) {
        this.taskKey = taskKey;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public void setStartDays(String startDays) {
        this.startDays = startDays;
    }

    public void setStartTimeMin(String startTimeMin) {
        this.startTimeMin = startTimeMin;
    }

    public void setEndTimeMin(String endTimeMin) {
        this.endTimeMin = endTimeMin;
    }

    public void setImportantMapValue(String importantMapValue) {
        this.importantMapValue = importantMapValue;
    }

    public void setIsAllday(String isAllday) {
        this.isAllday = isAllday;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public String getStartTime() {
        return startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public String getStartDays() {
        return startDays;
    }

    public String getStartTimeMin() {
        return startTimeMin;
    }

    public String getEndTimeMin() {
        return endTimeMin;
    }

    public String getImportantMapValue() {
        return importantMapValue;
    }

    public String getIsAllday() {
        return isAllday;
    }

    public String getContent() {
        return content;
    }

    @Override
    public String toString() {
        return "Event [id=" + taskKey + ", title=" + title + ",startDay="+startDays+", startTime="+startTime+",endTime=" + endTime + ","+"]";
    }
}