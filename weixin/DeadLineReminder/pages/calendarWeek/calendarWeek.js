// pages/calendarday/calendarday.js
var utils = require('../../utils/util');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showActionsheet: false,
         groups: [//弹窗信息
            { text: '查看', value: 1 },
            { text: '删除', value: 2 },
        ],
        key:"",
        // 页面总高度将会放在这里
        windowHeight: 0,
        calendarWeekHeight: 0,
        // scroll-view的高度
        scrollViewHeight: 0,
        title: '',
        hour_titles: Array.from({ length: 25 }).map(function(value, index) {
            var hour = (index + 1) % 25;
            return ((hour < 10) ? "0" : "") + hour + ":00";
        }),
        day_hour_items: Array.from({ length: 25 }).map((value, index) => index + 1),
        todo_item_sizes: Array.from({ length: 25 }).map(function() {
            return {
                width: 1,
                height: 1
            }
        }),
        bar_item_sizes: Array.from({ length: 25 }).map(function() {
            return {
                width: 1,
                height: 1
            }
        }),

        calendarList:[],
        curDate:utils.formatDate(new Date()),
        list:[],
         today:utils.formatDate(new Date()),
    },
    /**
     * 需要接收一个事件列表
     * 
     * Events
     * 
     * /
   

     
    /**
     * 生命周期函数--监听页面加载
     */
    onShow: function(options) {
        this.getList(this.data.today);
    },
    getList:function(e){
        let list = wx.getStorageSync(e) || [];
        console.log(list);
        this.setData({
          list:list
        })
      },
  onLoad: function(options) {
    
    var today=this.data.today;
    this.getList(today); console.log(today);
  },

    //获取选择的日历数据
    onMyEvent: function(e) {
        this.getList(e.detail.data);
        console.log(this.data.list);
    },

    select:function(e){
        var today=e.detail.value;
        console.log(today);
        this.setData({
            today:e.detail
        }),
        this.getList(e.detail);console.log(this.data.list);
      },
  
      selectTask:function(e){
    
        this.setData({
          showActionsheet: true,//显示弹窗
          key:e.currentTarget.dataset.key
        })
         console.log(this.data.showActionsheet);
       },
   
       btnClick(e) {
             let { value } = e.detail
              console.log("点击了：", value)
          
              //判断值,执行相关操作
              switch (value) {
                case 1:
                 wx.navigateTo({
                   url: '../taskView/taskView?key='+this.data.key+'&today='+this.data.today
                 })
                  break
                case 2:
                 this.deleteTask();
                  this.onShow();      
                  break
              }
              this.setData({
                showActionsheet: false//显示弹窗
              });
      },
  
      listDelete:function(list,taskKey){
        
        let tempList=[];
        var temp;
        //console.log(this.listRead());
        for(var i=list.length-1;i>=0;i--)
        {
          console.log(list[i].taskKey===this.data.key);
          if(list[i].taskKey===this.data.key){
            list.pop();
            break;
          }else{
            temp=list.pop();
            tempList.push(temp);
          }
        }
        for(var i=tempList.length-1;i>=0;i--){
          temp=tempList.pop();
          list.push(temp);
        }
        return list;
      },
      //添加按钮，未完成
      deleteTask:function(){  
        let list = wx.getStorageSync(this.data.today) || [];
            var startDay=this.data.today;
            console.log(startDay);
            this.listDelete(list,this.data.key);
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
  
      },
      showBocklogMask:function(e){
        console.log(e.detail.value)
        wx.navigateTo({
      url: '../create/create?today='+this.data.today
    })
    },

    //获取组件高度
    getHeader: function(e) {
        console.log('获取日历组件的高度:', e.detail);
        let calendarWeekHeight = e.detail;
        wx.getSystemInfo({
            success: res => {
                this.data.windowHeight = res.windowHeight;
            }
        });

        let scrollViewHeight = this.data.windowHeight - calendarWeekHeight;
        console.log("scrollViewHeight = ", scrollViewHeight);
        // 算出来之后存到data对象里面
        this.setData({
            scrollViewHeight: scrollViewHeight
        });
    },
})