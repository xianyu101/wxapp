// index.js
// 获取应用实例
module.exports={
  order:ordersTemp
}

const app = getApp();
var orders=[];
var orderNo=0;
var ordersTemp=[];
function storagethat(){
  ordersTemp=orders;
}
function initData(that){
  orders=[{
    orderNo:orderNo,
    orderType:"canteen",
    promulgator:"usertest",
    time:new Date(),
    isAccept:"unaccept",
    deliveryMan:"unaccept",
    window:"2-15",
    foodType:"鱼香肉丝+米饭",
    tradePlace:"4舍楼下",
    tradeTime:"11:50",
    tel:"18888888888",
    reward:"5",
    remark:"时间到了人不在可以直接放门口"
  }]
  orderNo++;
  that.setData({
    orders,
    orderNo
  })
}
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    initData(this);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    storagethat()
  },
  onHide(){
  storagethat()
  },
  
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
getDate:function() {
    var dt = new Date();
    var year = dt.getFullYear();//年
    var month = dt.getMonth() + 1;//月；从0开始所以要加1
    var date = dt.getDate();//日
    var hour = dt.getHours();
    var minutes = dt.getMinutes();
    var second = dt.getSeconds();

    month = month > 10 ? month : "0" + month;
    date = date > 10 ? date : "0" + date;
    hour = hour > 10 ? hour :  hour;
    minutes = minutes > 10 ? minutes : "0" + minutes;
    second = second > 10 ? second : "0" + second;

    return year + "年" + month + "月" + date + "日" + hour + ":" + minutes + ":" +                   
    second;
},
  sub_express:function(data){
    var tempTime=this.getDate();
    orders.push({
      orderNo:orderNo,
      orderType:'express',
      promulgator:'admin',
      time:tempTime,
      isAccept:"unaccept",
      deliveryMan:"unaccept",
      takePlace:data.detail.value.takePlace,
      tradePlace:data.detail.value.tradePlace,
      company:data.detail.value.company,
      artNo:data.detail.value.artNo,
      tel:data.detail.value.tel,
      reward:data.detail.value.reward,
      remark:data.detail.value.remark
    }),
    console.log(orderNo)
    console.log("express")
    console.log("admin")
    console.log(tempTime)
    console.log("unaccept")
    console.log("unaccept")
    console.log(data.detail.value.takePlace)
    console.log(data.detail.value.tradePlace)
    console.log(data.detail.value.company)
    console.log(data.detail.value.artNo)
    console.log(data.detail.value.tel)
    console.log(data.detail.value.reward)
    console.log(data.detail.value.remark)
    orderNo++
    this.setData({
      keepSpace:'',
      orders,
    })
   this.refreshOrder();
  },
  refreshOrder:function(){
    var app=getApp();
    app.globalData.order=orders;
    console.log(app.globalData.order)
  },
  changeSituation:function(num){
    orders[num].isAccept="accept";
    orders[num].deliveryMan="admin";
    this.setData({
      orders
    })
    this.refreshOrder();
  },
  sub_takeout:function(data){
    var tempTime=this.getDate();
    orders.push({
      orderNo:orderNo,
      orderType:'takeout',
      promulgator:'admin',
      time:tempTime,
      isAccept:'unaccept',
      deliveryMan:"unaccept",
      takePlace:data.detail.value.takePlace,
      tradePlace:data.detail.value.tradePlace,
      company:data.detail.value.company,
      arriveTime:data.detail.value.arriveTime,
      tel:data.detail.value.tel,
      reward:data.detail.value.reward,
      remark:data.detail.value.remark
    }),
    console.log(orderNo)
    console.log("takeout")
    console.log("admin")
    console.log(tempTime)
    console.log("unaccept")
    console.log("unaccept")
    console.log(data.detail.value.takePlace)
    console.log(data.detail.value.tradePlace)
    console.log(data.detail.value.company)
    console.log(data.detail.value.arriveTime)
    console.log(data.detail.value.tel)
    console.log(data.detail.value.reward)
    console.log(data.detail.value.remark)
    orderNo++
    this.setData({
      keepSpace:'',
      orders
    })
    this.refreshOrder();
    
  },
  sub_canteen:function(data){
    var tempTime=this.getDate();
    orders.push({
      orderNo:orderNo,
      orderType:'canteen',
      promulgator:'admin',
      time:tempTime,
      isAccept:"unaccept",
      deliveryMan:"unaccept",
      window:data.detail.value.window,
      tradePlace:data.detail.value.tradePlace,
      foodType:data.detail.value.foodType,
      tradeTime:data.detail.value.tradeTime,
      tel:data.detail.value.tel,
      reward:data.detail.value.reward,
      remark:data.detail.value.remark
    }),
    console.log(orderNo)
    console.log("canteen")
    console.log("admin")
    console.log(tempTime)
    console.log("unaccept")
    console.log("unaccept")
    console.log(data.detail.value.window)
    console.log(data.detail.value.tradePlace)
    console.log(data.detail.value.foodType)
    console.log(data.detail.value.tradeTime)
    console.log(data.detail.value.tel)
    console.log(data.detail.value.reward)
    console.log(data.detail.value.remark)
    orderNo++
    this.setData({
      keepSpace:'',
      orders
    })
    wx.setStorage({
      order:orders
    })
    this.refreshOrder();
  },
  acceptOrder:function(data){
    orders.isAccept="accept";
    console.log(orders.isAccept);
    this.setData({
      orders
    })
  },
  navToAccept:function(e){
    let orderNo=e.currentTarget.dataset.orderno
    let promulgator=e.currentTarget.dataset.promulgator
    let time=e.currentTarget.dataset.time
    let company=e.currentTarget.dataset.company
    let takePlace=e.currentTarget.dataset.takeplace
    let tradePlace=e.currentTarget.dataset.tradeplace
    let artNo=e.currentTarget.dataset.artno
    let tel=e.currentTarget.dataset.tel
    let reward=e.currentTarget.dataset.reward
    let remark=e.currentTarget.dataset.remark
    wx.navigateTo({
      url: '/pages/detail/detail?orderNo='+orderNo+'&promulgator='+promulgator+'&time='+time+'&company='+company+'&takePlace='+takePlace+'&tradePlace='+tradePlace+'&artNo='+artNo+'&tel='+tel+'&reward='+reward+'&remark='+remark,
    })
    
  },
  navToAccept1:function(e){
    let orderNo=e.currentTarget.dataset.orderno
    let promulgator=e.currentTarget.dataset.promulgator
    let time=e.currentTarget.dataset.time
    let company=e.currentTarget.dataset.company
    let takePlace=e.currentTarget.dataset.takeplace
    let tradePlace=e.currentTarget.dataset.tradeplace
    let arriveTime=e.currentTarget.dataset.arriveTime
    let tel=e.currentTarget.dataset.tel
    let reward=e.currentTarget.dataset.reward
    let remark=e.currentTarget.dataset.remark
    wx.navigateTo({
      url: '/pages/detail/detail?orderNo='+orderNo+'&promulgator='+promulgator+'&time='+time+'&company='+company+'&takePlace='+takePlace+'&tradePlace='+tradePlace+'&arriveTime='+arriveTime+'&tel='+tel+'&reward='+reward+'&remark='+remark,
    })
    
  },
  navToAccept2:function(e){
    let orderNo=e.currentTarget.dataset.orderno
    let promulgator=e.currentTarget.dataset.promulgator
    let time=e.currentTarget.dataset.time
    let window=e.currentTarget.dataset.window
    let foodType=e.currentTarget.dataset.foodType
    let tradePlace=e.currentTarget.dataset.tradeplace
    let tel=e.currentTarget.dataset.tel
    let reward=e.currentTarget.dataset.reward
    let remark=e.currentTarget.dataset.remark
    wx.navigateTo({
      url: '/pages/detail/detail?orderNo='+orderNo+'&promulgator='+promulgator+'&time='+time+'&window='+window+'&foodType='+foodType+'&tradePlace='+tradePlace+'&tel='+tel+'&reward='+reward+'&remark='+remark,
    })
    
  },
  
  
})

