/**
 * 1.向服务器发送的数据：
 * 保存在saveTask中的createData中
 * 
 * 日程标识 taskKey，创建时的秒数，num
 * 标题 title string
 * 内容 content string
 * 优先级 importantMapValue num
 * 日期 startDays  数组，多个数据
 * 是否全天 isAllday Boolean
 * 开始时间 startTime string
 * 结束时间 endTime string
 * 2.本地缓存，以日期为存储key
 */
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
      taskKey:new Date().getTime(),
      createData:{},
      list:new Array(),
      startDays:new Array(),
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
        startDay: options.today,
        endDay: options.today,
      })
  },
  onShow:function(){
    this.setData({
      taskKey:new Date().getTime(),
    })
        }, 

  listAdd: function (list, create) {

    let tempList = [];
    //console.log(this.listRead());
    for (var i = 0; i < list.length; i++) {
      if (list[i].startTime.localeCompare(create.startTime) < 0) {
        list.push(create);
        break;
      } else {
        tempList.pop(list[i]);
      }
    }
    for (var i = tempList.length; i > 0; i++) {
      list.push(tempList[i]);
    }
    return list;
  },

  //添加按钮，未完成
  saveTask: function (e) {
    let createData = {
      title: this.data.title,
      content: this.data.content || "",
      importantMapValue: this.data.importantMapValue,
      startDays:this.data.startDays,
      startTime: this.data.startTime,
      StartTimeMin: this.data.StartTimeMin,
      endTime: this.data.endTime,
      EndTimeMin: this.data.EndTimeMin,
      isAllday: this.data.isAllday,
      taskKey: this.data.taskKey
    }
    this.setData({
      createData: createData
    })
    console.log(createData);

    for(var i=0;i<this.data.startDays.length;i++)
        {
          var startDay=createData.startDays[i];
          console.log(startDay);
          let list = wx.getStorageSync(startDay) || [];
      list.push(createData);
          wx.setStorage({
          key:startDay,
          data:list,
          success: function() {
            console.log('写入value1成功')
            console.log(list)
          },
          fail: function() {
            console.log('写入value1发生错误')      
          } 
        })
        };

      wx.navigateBack({
        delta: 1
      });
  },
  //取消按钮
  cancelTask: function (e) {
    wx.navigateBack({
      delta: 1
    });
  },
  //添加按钮是否禁用
  onChangeTitle: function (e) {
    var title = e.detail.value;
    var addBtnStatus = title.length > 0 ? "active" : "inActive";
    this.setData({
      addBtnStatus: addBtnStatus,
      title: title
    });
  },
  //内容
  onChangeContent: function (e) {
    var content = e.detail.value;
    this.setData({
      content: content
    });
  },
  //优先级选择
  mapImportant: function (key) {
    var map = {
      "0": "一般",
      "1": "重要"
    };
    return map[key];
  },
  onChangeImportant: function (e) {
    var importantMapValue = e.detail.value;
    this.setData({
      importantMapValue:importantMapValue,
      important:this.mapImportant(importantMapValue)
    });
  },
  //日期选择的打开和关闭
  setShow:function(){
    this.setData({
      isShow:true
    });
    console.log(this.data.isShow);
  },
  setClose:function(){
    this.setData({
      isShow:false
    });
    console.log(this.data.isShow);
  },

  //日程开始时间
  onChangeStartTime: function (e) {
    var hour = e.detail.value
    this.setData({
      startTime: e.detail.value+":00",
          endTime: e.detail.value > this.data.endTime ? e.detail.value : this.data.endTime,
          StartTimeMin:parseInt(hour)*60,
    })
  },
  //日程结束时间
  onChangeEndTime: function (e) {
    var hour = e.detail.value;
    var temp=parseInt(hour)+1;
    this.setData({
      endTime: temp.toString()+":00",
          EndTimeMin:parseInt(hour)*60,
    })
  },
  //是否为全天
  onChangeAllDay: function (e) {
    var that = this;
    if (e.detail.value === true) {
      this.setData({
        isAllday: e.detail.value,
        startTime: "00:00",
        endTime: "24:00"
      })
    } else if (e.detail.value === false) {
      this.setData({
        isAllday: e.detail.value,
        startTime: utils.formatTimeH(new Date()),
        endTime: utils.formatEndTimeH(new Date()),
      })
    }
    if(this.data.isAllday){
      this.setData({
        StartTimeMin:parseFloat(this.data.endTime)*60,
        EndTimeMin:parseInt(this.data.endTime)*60+60,
      })
    }else{
      this.setData({
      StartTimeMin:parseInt(this.data.startTime)*60,
      EndTimeMin:parseInt(this.data.endTime)*60,
    })
  }
  },
  //选择多个日期
  select:function(e)
      {
          
          let selectList=this.data.selectList||[];
                if(selectList.indexOf(e.detail)===-1)
                {
                  selectList.push(e.detail);
                }else{
                    this.remove(selectList,e.detail);
                }
                
                console.log(selectList);
          this.setData({
            selectVal:e.detail,
            today:e.detail,
            selectList:selectList
        })
       
      },
       // 点击删除选中的日期
  remove: function(array, val) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == val) {
        array.splice(i, 1);
      }
    }
    return -1;
  },
  //选择日期的确定
set:function(list,){
this.setData({
  startDays:list,
})
},
  tapDialogButton:function(e)
    {
      var that = this;
      let list=this.data.selectList;        
        this.set(list);
        this.setClose();
        console.log(this.data.startDays);
        console.log(this.data.isShow);
      },
})