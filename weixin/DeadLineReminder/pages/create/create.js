// pages/create/create.js
var utils = require('../../utils/util');
Page({
  /** 页面的初始数据*/
  data: {
    title: null,
    content: null,
    date: new Date(),
    importantMapValue: 0,
    addBtnStatus: "inActive",
    taskImportant: ['一般', '重要'],
    important: '一般',
    startTime: utils.formatTimeHM(new Date()),
    startDay: utils.formatDate(new Date()),
    endTime: utils.formatEndTimeHM(new Date()),
    endDay: utils.formatDate(new Date()),
    isAllday: false,
    taskKey: Date.parse(new Date()),
    createData: {},
    list: new Array(),
    StartTimeMin: utils.formatTimeMIN(new Date()),
    EndTimeMin: utils.formatEndTimeMin(new Date()),
  },

  onLoad: function (options) {
    console.log(options.today),
      this.setData({
        startDay: options.today,
        endDay: options.today,
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
      startDay: this.data.startDay,
      startTime: this.data.startTime,
      StartTimeMin: this.data.StartTimeMin,
      endDay: this.data.endDay,
      endTime: this.data.endTime,
      EndTimeMin: this.data.EndTimeMin,
      isAllday: this.data.isAllday,
      taskKey: this.data.taskKey
    }
    this.setData({
      createData: createData
    })
    console.log(createData);

    let list = wx.getStorageSync(createData.startDay) || [];
    list.push(createData);
    wx.setStorage({
      key: createData.startDay,
      data: list,
      success: function () {
        console.log('写入value1成功')
        console.log(list)
      },
      fail: function () {
        console.log('写入value1发生错误')
      }
    }),

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
      important: this.mapImportant(importantMapValue)
    });
  },
  //日程开始时间
  onChangeStartTime: function (e) {
    var hour = e.detail.value.slice(0, 2);
    var min = e.detail.value.slice(3);
    console.log(parseFloat(min));
    this.setData({
      startTime: e.detail.value,
      endTime: e.detail.value > this.data.endTime ? e.detail.value : this.data.endTime,
      StartTimeMin: parseFloat(hour) * 60 + parseFloat(min),
    })
  },
  //日程结束时间
  onChangeEndTime: function (e) {
    var hour = e.detail.value.slice(0, 2);
    var min = e.detail.value.slice(3);
    this.setData({
      endTime: e.detail.value,
      EndTimeMin: parseFloat(hour) * 60 + parseFloat(min),
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
        startTime: utils.formatTimeHM(new Date()),
        endTime: utils.formatEndTimeHM(new Date()),
      })
    }
  },
})