//const { select } = require("underscore");

// pages/calendarHome/calendarHome.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
         today:"",
         list:[]
    },
    onLoad: function(options) {
        this.Calendar = this.selectComponent("#Calendar"); //这里是实例化
      },
      
      showBocklogMask:function(e){
          console.log(e.detail.value)
          wx.navigateTo({
        url: '../create/create?today='+this.data.today
      })
      },

      getList:function(e){
        let list = wx.getStorageSync(this.data.today) || [];
        //console.log(list);
        this.setData({
          list:list
        })
      },
      onShow:function(){
        this.getList(this.data.today);
        console.log(this.data.list);
      },
      
    select:function(e) {
         
        var today=e.detail.value;
        //console.log(today);
        this.setData({
            selectVal:e.detail,
            today:e.detail
        }),
        this.getList(e.detail);console.log(this.data.list);
    },

    selectTask:function(e){
      console.log(e);
      
    }
})