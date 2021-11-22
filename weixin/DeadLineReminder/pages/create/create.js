// pages/create/create.js
var utils = require('../../utils/util');
Page({
  /** 页面的初始数据*/
  data: {
    addBtnStatus: "inActive",
    taskImportant: ['一般', '重要'],
    important: '一般',
  },
  //取消按钮
  cancelTask: function (e) {
    wx.navigateBack({
      delta: 1
    });
  },
  //添加按钮是否禁用
  onChangeTitle: function (e) {
    var title = null;
    title = e.detail.value;
    var addBtnStatus = title.length > 0 ? "active" : "inActive";
    this.setData({
      addBtnStatus: addBtnStatus,
      title: title
    });
  },
  //内容
  onChangeContent: function (e) {
    var content = null;
    content = e.detail.value;
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
    var value = e.detail.value;
    this.setData({
      important: this.mapImportant(value)
    });
  },

  onChangeStartTime: function (e) {//?
  },
  onChangeEndTime: function (e) {//?
  },
  onChangeAllDay: function (e) {//?
  },
  saveTask: function (e) {
    // 保存，向服务器发送数据，未完成
    wx.navigateBack({
      delta: 1
    });
  },


})