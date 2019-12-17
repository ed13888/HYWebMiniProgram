// Page/OrderInsert/OrderInsert.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    focus: true,
    orderNo: ""
  },
  OrderNoInput: function(e) {
    this.setData({
      orderNo: e.detail.value
    });
  },
  changeHidden: function() {
    this.setData({
      hidden: !this.data.hidden
    });
  },
  Scan: function() {
    var that = this;
    wx.scanCode({
      success(res) {
        console.log(res)
        that.setData({
          orderNo: res.result
        });
      }
    })
  },
  Insert: function() {
    var that = this;
    that.changeHidden();
    var orderNo = this.data.orderNo;
    wx.request({
      url: app.globalData.domain + '/Values/InsertOrder',
      data: {
        OrderNo: orderNo
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        that.changeHidden();
        console.log(res.data);
        if (res.data.Passed) {
          that.setData({
            orderNo: "",
            focus: true
          });
          wx.showToast({
            title: '添加成功！',
            icon: 'succes',
            duration: 1000,
            mask: true
          });
        } else {
          wx.showToast({
            title: '添加失败！',
            icon: 'succes',
            duration: 1000,
            mask: true
          });
        }
      },
      fail() {
        that.changeHidden();
      }
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