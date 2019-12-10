// Page/AdminLogin/AdminLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
  },
  changeHidden: function() {
    this.setData({
      hidden: !this.data.hidden
    });
  },
  login: function() {
    var that = this;
    that.changeHidden();
    wx.login({
      success(res) {
        console.log(res);
        wx.request({
          url: 'https://chaogege.vip/Values/ValidateUserPrivilege?code=' + res.code,
          success: function(result) {
            console.log(result.errMsg)
            if (result.data.Passed) {
              wx.navigateTo({
                url: '../AdminIndex/AdminIndex',
                success: function(res) {
                  console.log(res);
                },
                fail: function(e) {
                  console.log(e);
                }
              });
              that.changeHidden();
            }
          },
          fail() {
            that.changeHidden();
          }
        })
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