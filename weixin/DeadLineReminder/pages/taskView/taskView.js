// pages/taskView/taskView.js
const { select } = require('../../lib/underscore');
const { min } = require('../../lib/underscore');
var utils = require('../../utils/util');
Page({
    /** 页面的初始数据*/
    data: {
      startList:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
      endList:["01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"],
      title:null,
      content : null,
      date:new Date(), 
      importantMapValue:0,
      addBtnStatus:"inActive",
      taskImportant : ['一般','重要'],
      important : '一般',
      startTime:utils.formatTimeH(new Date()),
      endTime:utils.formatEndTimeH(new Date()),
      isAllday:false,
      taskKey:"",
      createData:{},
      list:new Array(),
      startDays:new Array(),
      startDay:"",
      StartTimeMin:utils.formatTimeMIN(new Date()),
      EndTimeMin:utils.formatEndTimeMin(new Date()),
      show:false,
      selectList:[],
      text: '',
      isShow:false,
      buttons: [{text: '取消'}, {text: '确定'}],
      },
      onLoad: function (options) {
      console.log(options.today),
      this.setData({
        startDay:options.today,
        taskKey:options.key
      })
    },

    onLoad:function(options){
       
        var key=options.key;
        console.log(key);
        this.readList(key,options.today);
    },

    onShow:function(options){
        var taskKey=this.data.taskKey;
        var startDay=this.data.startDay;
        console.log(taskKey);
        this.readList(taskKey,startDay);
    },


    readList:function(e,today){
        var key=e;
        let list = wx.getStorageSync(today) || [];
        for(var i=0;i<list.length;i++)
        {
            if(list[i].taskKey===key){
                this.onChangeImportant(list[i].importantMapValue);
                
                this.setData({
                    startDay:today,
                    title: list[i].title,
                    content: list[i].content,
                    startDay:list[i].startDay,
                    startTime: list[i].startTime,
                    StartTimeMin:list[i].StartTimeMin,
                    endTime: list[i].endTime,
                    EndTimeMin:list[i].EndTimeMin,
                    isAllday:list[i].isAllday,
                    taskKey:list[i].taskKey
                })
            }
        }
    },

    

   
    //添加按钮，未完成
    reviseTask:function(e){
      
        wx.navigateTo({
            url: '../reviseTask/reviseTask?key='+this.data.taskKey+'&today='+this.data.startDay
          })
      
    //   wx.navigateBack({
    //     delta:1
    //   });
    },
    //取消按钮
    cancelTask:function(e){
        wx.navigateBack({
          delta:1
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
        var importantMapValue = e;
        this.setData({
          importantMapValue:importantMapValue,
          important:this.mapImportant(importantMapValue)
        });
      },
      //日期选择
      setShow:function(){
        //console.log(this.data.show);
        //var currentStatu = e.currentTarget.dataset.statu; 
       // this.util(currentStatu) 
        this.setData({
          isShow:true
        });
        console.log(this.data.isShow);
      },
      setClose:function(){
        //console.log(this.data.show);
        //var currentStatu = e.currentTarget.dataset.statu; 
       // this.util(currentStatu) 
        this.setData({
          isShow:false
        });
        console.log(this.data.isShow);
      },
      
       // 删除方法
  remove: function(array, val) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == val) {
        array.splice(i, 1);
      }
    }
    return -1;
  },
set:function(list,){
this.setData({
  startDays:list,
})
},
  tapDialogButton:function(e)
    {
      var that = this;
      let list=this.data.selectList;
      if(e.detail.item.text==="确定"){

      }else{console.log(e.detail.index===0);
       //list=[];
        
      };
        
        this.set(list);
        this.setClose();
        console.log(this.data.startDays);
        console.log(this.data.isShow);
      },
})