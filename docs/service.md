# 服务管理

## 新建日程

### 前端：

1.未实现js函数

- saveTask          保存按钮，向服务器发送数据


2.向服务器发送的数据
- createData:{
    - title:日程标题，string类型
    - content : 日程内容，string类型
    - importantMapValue:日程紧急程度,num类型
    - startTime:日程开始时间,string类型
    - startDay：日程开始日期，string类型
    - endTime:日程结束时间，string类型
    - endDay:日程结束日期，string类型
    - isAllday:是否为一整天，bool类型
    - taskKey:日程标识,num类型，为ms

    }


