// pages/me/me.js
var orders=[]
Page({

  /**
   * 页面的初始数据
   */

  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    this.setData({
      orders
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var app=getApp();
    orders=app.globalData.order
    this.setData({
      orders
    })
    console.log(app.globalData.order)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  goToAllOrders: function(){
    wx.navigateTo({
      url: '/pages/allOrders/allOrders',
    })
  },
  navToDetail:function(e){
    let index=e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/showDetail/showDetail?index='+index,
    })
    console.log(e.currentTarget.dataset.index)
    console.log(index)
  }
})
