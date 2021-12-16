// pages/calendarday/calendarday.js
var utils = require('../../utils/util');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 页面总高度将会放在这里
        windowHeight: 0,
        calendarWeekHeight: 0,
        // scroll-view的高度
        scrollViewHeight: 0,
        title: '',
        hour_titles: Array.from({ length: 24 }).map(function(value, index) {
            var hour = (index + 1) % 24;
            return ((hour < 10) ? "0" : "") + hour + ":00";
        }),
        day_hour_items: Array.from({ length: 24 }).map((value, index) => index + 1),
        todo_item_sizes: Array.from({ length: 24 }).map(function() {
            return {
                width: 1,
                height: 1
            }
        }),
        bar_item_sizes: Array.from({ length: 24 }).map(function() {
            return {
                width: 1,
                height: 1
            }
        }),

        calendarList: [],
        curDate: utils.formatDate(new Date()),
        list: [],
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

    //获取选择的日历数据
    onMyEvent: function(e) {
        this.getList(e.detail.data);
        console.log(this.data.list);
    },

    getList: function(e) {
        let list = wx.getStorageSync(e) || [];
        console.log(list);
        this.setData({
            list: list
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