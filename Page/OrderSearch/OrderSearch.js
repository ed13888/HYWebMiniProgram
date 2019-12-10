// Page/OrderSearch/OrderSearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    orderNo: "test001"
  },
  search: function(e) {
    var that = this;
    that.changeHidden();
    var orderNo = this.data.orderNo;
    wx.request({
      url: 'https://chaogege.vip/Values/SearchOrder?orderNo=' + orderNo,
      success(res) {
        that.changeHidden();
        console.log(res.data);
        if (res.data.Passed) {
          wx.navigateTo({
            url: '../OrderInfo/OrderInfo?json=' + JSON.stringify(res.data.Data),
            success: function(res) {
              console.log(1);
            }
          });
        }
      },
      error() {
        that.changeHidden();
      },
      fail() {
        that.changeHidden();
      }
    })
  },
  OrderInput: function(e) {
    this.setData({
      orderNo: e.detail.value
    });
  },
  changeHidden: function() {
    this.setData({
      hidden: !this.data.hidden
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})