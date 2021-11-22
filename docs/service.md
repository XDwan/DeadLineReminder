# 服务管理

## 新建日程

### 前端：

1.未实现js函数

- onChangeStartTime 开始时间
- onChangeEndTime   结束时间
- onChangeAllDay    是否为全天
- saveTask          保存按钮，向服务器发送数据

    其余js函数均已本地实现

2.向服务器发送的数据

- 标题 &nbsp;title&nbsp;string类型 &nbsp;函数onChangeTitle 
- 内容&nbsp;content&nbsp;string类型&nbsp;函数onChangeContent
- 优先级 &nbsp;key&nbsp; num类型&nbsp; 函数onChangeImportant中
- 开始时间 
    - 开始时间的日期&nbsp; date &nbsp;string类型&nbsp; 函数onChangeStartTime &nbsp;xxxx年xx月xx日形式
    - 日程开始的时刻 &nbsp;startTime&nbsp;string类型 &nbsp; 函数onChangeStartTime &nbsp;xx：xx形式
- 结束时间 
    - 结束时间的日期 &nbsp;date &nbsp;string类型 &nbsp;函数onChangeStartTime&nbsp; xxxx年xx月xx日形式
    - 日程结束的时刻 &nbsp;endTime &nbsp;string类型 &nbsp;函数onChangeStartTime&nbsp;xx：xx形式

3.其他数据
- 开始时间限制 &nbsp;startTimeBeginLimit &nbsp;为此时刻时间，在弹窗中
- 结束时间限制 &nbsp;endTimeBeginLimit &nbsp;  为此时刻时间，在弹窗中

