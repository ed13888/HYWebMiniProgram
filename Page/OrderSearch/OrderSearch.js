// Page/OrderSearch/OrderSearch.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    orderNo: ""
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
  search: function(e) {
    var that = this;
    wx.showLoading({
      title: '查询中...',
    });
    console.log("search..");
    console.log("app.globalData.domain" + app.globalData.domain);
    // that.changeHidden();
    var orderNo = this.data.orderNo;
    wx.request({
      url: app.globalData.domain + '/Values/SearchOrder?orderNo=' + orderNo,
      success(res) {
        console.log("success");
        console.log(res.data);
        if (res.data.Passed) {
          wx.navigateTo({
            url: '/Page/OrderInfo/OrderInfo?json=' + JSON.stringify(res.data.Data),
            success: function(res) {
              console.log(res);
              // that.changeHidden();
              wx.hideLoading();
            },
            fail(e) {
              console.log(e);
              // that.changeHidden();
              wx.hideLoading();
            }
          });
        } else {
          // wx.showToast({
          //   title: '该订单不存在！',
          //   icon: 'succes',
          //   duration: 3000,
          //   mask: true
          // });
          // that.changeHidden();
          wx.hideLoading();
          wx.showModal({
            title: '提示',
            content: '该订单不存在！',
            success: function(res) {

            }
          });
        }

      },
      fail(e) {
        console.log("fail");
        console.log(e);
        wx.hideLoading();
        // that.changeHidden();
      }
    });
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