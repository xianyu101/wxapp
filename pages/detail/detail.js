// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      orderNo:'',
      promulgator:'',
      time:'',
      company:'',
      takePlace:'',
      tradePlace:'',
      artNo:'',
      tel:'',
      reward:'',
      remark:'',
      flag:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      orderNo:options.orderNo,
      promulgator:options.promulgator,
      time:options.time,
      company:options.company,
      takePlace:options.takePlace,
      tradePlace:options.tradePlace,
      artNo:options.artNo,
      tel:options.tel,
      reward:options.reward,
      remark:options.remark
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
  accOrder:function(e){
  
    let page=getCurrentPages();
    let l=page.length;
    let upperpage=page[l-2];
    var orderNoo=this.data.orderNo;
    wx.navigateBack({
      success:function(){
        upperpage.changeSituation(orderNoo)
      }
    })
    
  }
})