/**
 * 删除日程
 * createData
 * 
 * 除了taskKey均为null
 * taskKey保存有时间戳
 */


Page({

    /**
     * 页面的初始数据
     */
    data: {
         today:"",
         list:[],
         showActionsheet: false,
         groups: [//弹窗信息
            { text: '查看', value: 1 },
            { text: '删除', value: 2 },
        ],
        key:"",
        createData:{},
        userID:""
    },
    getUserId:function (e) {
        var appId = 'wx8af258cf8ae80fbd';
        var appSecret = 'd5b3f3e802c62131880f5a168478bd4c';
        let that = this;
        wx.login({
          success(res){
            console.log('code====',res.code);
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session',
              data:{
                appid: appId,
                secret: appSecret,
                js_code: res.code,
                grant_type:'authorization_code'
              },
              method:"GET",
              success(res){
                that.setData({
                  userID:res.data.openid
                })
                console.log('openid=====',res.data.openid);   // 得到openid
                console.log('session_key====', res.data.session_key);   // 得到 session_key
              }
            })
          }
        })
      },
    onLoad: function(options) {
        this.Calendar = this.selectComponent("#Calendar"); //这里是实例化
        this.getUserId();
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
        let that = this;
        wx.request({
          url: 'http://192.168.1.109:8081/wx/selectDay',
          data:{
            userID:that.data.userID,
            day:today
          },
          success(res){
            that.setData({
              list:res.list
            })
          },
          fail(res){
            console.log(res);
          }
        })
        this.setData({
            selectVal:e.detail,
            today:e.detail
        }),
        this.onShow();
        this.getList(e.detail);
        console.log(this.data.list);
    },

    selectTask:function(e){
      this.data.nowClickValue = e.currentTarget.dataset.value
     console.log(e);
     this.setData({
       showActionsheet: true,//显示弹窗
       key:e.currentTarget.dataset.key
     })
      console.log(e.currentTarget.dataset.key);
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
        deleteTask:function(){  
          let list = wx.getStorageSync(this.data.today) || [];
            this.createDeleteTask(this.data.key);       
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
        createDeleteTask:function(e){
          let createData = {
            title: null,
            content:  null,
            importantMapValue:  null,
            startDays: null,
            startTime:  null,
            StartTimeMin:  null,
            endTime:  null,
            EndTimeMin:  null,
            isAllday: null,
            taskKey: e
          }
          console.log(createData);
          this.setData({
            createData: createData
          })
        }
})