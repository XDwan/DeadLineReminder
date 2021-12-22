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
      taskKey:0,
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
        var key=options.key;
        console.log(key);
        this.readList(key,options.today);
    },
    onShow:function(){
      
          },
          readList:function(e,today){
            var key=parseInt(e);
            let list = wx.getStorageSync(today) || [];
            for(var i=0;i<list.length;i++)
            {
                if(list[i].taskKey===key){
                    this.onChangeImportant(list[i].importantMapValue);
                    
                    this.setData({
                        startDay:today,
                        title: list[i].title,
                        content: list[i].content,
                        startDays:list[i].startDays,
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
    

    listAdd:function(list,create){
      
      let tempList=[];
      var temp;
      //console.log(this.listRead());
      for(var i=list.length-1;i>=0;i--)
      {
        if(list[i].taskKey===this.data.taskKey){
          list.pop();
          list.push(create);
          break;
        }else{
          temp=list.pop();
          tempList.push(temp);
          console.log(tempList);
        }
      }
      for(var i=tempList.length-1;i>=0;i--){
        temp=tempList.pop();
        list.push(temp);
      }
      return list;
    },
    //添加按钮，未完成
    saveTask:function(e){
      let createData = {
        title: this.data.title,
        content: this.data.content||"",
        importantMapValue:this.data.importantMapValue,
        startDays:this.data.startDays,
        startTime: this.data.startTime,
        StartTimeMin:this.data.StartTimeMin,
        endTime: this.data.endTime,
        EndTimeMin:this.data.EndTimeMin,
        isAllday:this.data.isAllday,
        taskKey:this.data.taskKey
      }
      this.setData({
          createData: createData
      })
      //console.log(createData);
      //let arr = wx.getStorageSync("test1") || [];
      
      console.log(this.data.startDays);
        for(var i=0;i<this.data.startDays.length;i++)
        {
          var startDay=createData.startDays[i];
          console.log(startDay);
          let list = wx.getStorageSync(startDay) || [];
          this.listAdd(list,createData);
          if(list.length===0)
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
        delta:2
      });
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
        var importantMapValue = e;
        console.log(importantMapValue);
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
      
      //日程开始时间
      onChangeStartTime:function(e){
        var hour=e.detail.value.slice(0,2);
        var min=e.detail.value.slice(3);
        console.log(e.detail.value+":00");
        this.setData({
          startTime: e.detail.value+":00",
          endTime: e.detail.value > this.data.endTime ? e.detail.value : this.data.endTime,
          StartTimeMin:parseFloat(hour)*60,
          //EndTimeMin:utils.formatEndTimeMin(e.detail.data),
        })
      },
      //日程结束时间
      onChangeEndTime:function(e){
        console.log(e.detail.value+":00");
        var hour=e.detail.value.slice(0,2);
        var min=e.detail.value.slice(3);
        this.setData({
          endTime: e.detail.value+":00",
          EndTimeMin:parseInt(hour)*60,
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
            startTime: utils.formatTimeHM(new Date()),
            endTime: utils.formatEndTimeHM(new Date()),
          })
        }
      },
      select:function(e)
      {
          //var day=utils.formatDate(e.detail);
          //console.log(e);
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
       // this.getList(e.detail);
        //console.log(this.data.selectList);
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