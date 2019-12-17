// Page/AdminLogin/AdminLogin.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
  },
  changeHidden: function() {
    this.setData({
      hidden: !this.data.hidden
    });
  },
  login: function() {
    var that = this;
    wx.showLoading({
      title: '授权验证中...',
    });
    //that.changeHidden();
    wx.login({
      success(res) {
        console.log(res);
        wx.request({
          url: app.globalData.domain + '/Values/ValidateUserPrivilege?code=' + res.code,
          success: function(result) {
            console.log(result.errMsg)
            wx.hideLoading();
            if (result.data.Passed) {
              wx.navigateTo({
                url: '/Page/AdminIndex/AdminIndex',
                success: function(res) {
                  console.log(res);
                },
                fail: function(e) {
                  console.log(e);
                }
              });
            } else {
              //没有权限

              wx.showToast({
                title: '权限不足!',
                icon: 'success',
                duration: 2000
              });

              setTimeout(function() {
                wx.switchTab({
                  url: '/Page/OrderSearch/OrderSearch'
                });
              }, 2000);
            }
          },
          fail() {
            wx.hideLoading();
          }
        })
      },
      fail() {
        wx.hideLoading();
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
    // setTimeout(this.login, 2000);
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