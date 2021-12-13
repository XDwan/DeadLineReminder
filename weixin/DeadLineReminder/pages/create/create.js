// pages/create/create.js
var utils = require('../../utils/util');
Page({
    /** 页面的初始数据*/
    data: {
      title:null,
      content : null,
      importantMapValue:0,
      addBtnStatus:"inActive",
      taskImportant : ['一般','重要'],
      important : '一般',
      startTime:new Date().getHours()+ ':'+ new Date().getMinutes(),
      startDay:new Date().toLocaleDateString(),
      endTime:new Date().getHours()+ ':'+ new Date().getMinutes(),
      endDay:new Date().toLocaleDateString(),
      isAllday:false,
      taskKey:Date.parse(new Date()),
      createData:{}
    },
    
    //添加按钮，未完成
    saveTask:function(e){
      let createData = {
        title: this.data.title, 
        content: this.data.content,
        importantMapValue:this.data.importantMapValue,
        startDay: this.data.startDay,
        startTime: this.data.startTime,
        endDay: this.data.endDay,
        endTime: this.data.endTime,
        isAllday:this.data.isAllday,
        taskKey:this.data.taskKey
      }
      this.setData({
          createData: createData
      })
      console.log(createData);
    },
    //取消按钮
    cancelTask:function(e){
        wx.navigateBack({
          delta:1
        });
      },
      //添加按钮是否禁用
      onChangeTitle:function(e){
        var title = e.detail.value;
        var addBtnStatus = title.length>0?"active":"inActive";
        this.setData({
          addBtnStatus:addBtnStatus,
          title:title
        });
      },
      //内容
      onChangeContent:function(e){
        var content = e.detail.value;
        this.setData({
          content:content
        });
      },
      //优先级选择
      mapImportant:function(key){
        var map = {
          "0":"一般",
          "1":"重要"
        };
        return map[key];
      },
      onChangeImportant:function(e){
        var importantMapValue = e.detail.value;
        this.setData({
          important:this.mapImportant(importantMapValue)
        });
      },
      //日程开始时间
      onChangeStartTime:function(e){
        this.setData({
          startTime: e.detail.value,
          endTime: e.detail.value > this.data.endTime ? e.detail.value : this.data.endTime
        })
      },
      //日程结束时间
      onChangeEndTime:function(e){
        this.setData({
          endTime: e.detail.value
        })
      },
      //是否为全天
      onChangeAllDay:function(e){
        var that =this;
        if(e.detail.value===true){
          this.setData({
          isAllday: e.detail.value,
          startTime: "00:00",
          endTime: "24:00"
        })
        }else if(e.detail.value===false){
          this.setData({
            isAllday: e.detail.value,
            startTime: new Date().getHours()+ ':'+ new Date().getMinutes(),
            endTime: new Date().getHours()+ ':'+ new Date().getMinutes(),
          })
        }
      },
})