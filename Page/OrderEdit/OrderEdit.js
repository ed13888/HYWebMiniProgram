// Page/OrderEdit/OrderEdit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    begindate: '2016-09-01',
    enddate: '2016-09-01',
    index: 0,
    array: ['已签收', '已装柜', '已出港', '已请关', '已到达'],
  },
  bindBeginDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      begindate: e.detail.value
    })
  },
  bindEndDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      enddate: e.detail.value
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  changeHidden: function() {
    this.setData({
      hidden: !this.data.hidden
    });
  },
  Update: function(e) {
    var that = this;
    that.changeHidden();
    var begindate = this.data.begindate;
    var enddate = this.data.enddate;
    var state = (parseInt(this.data.index) + 1) + '';
    wx.request({
      url: 'https://chaogege.vip/Values/UpdateOrderState',
      data: {
        BeginTime: begindate,
        EndTime: enddate,
        State: state
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        that.changeHidden();
        console.log(res.data);
        if (res.data.Passed) {
          wx.showToast({
            title: '更新成功' + res.data + '条！',
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
    var now = new Date();
    var yesterday = new Date(now.setDate(now.getDate() - 1));
    now = new Date();
    var yesterdaystr = yesterday.getFullYear() + '-' + (yesterday.getMonth() + 1) + '-' + yesterday.getDate();
    var todaystr = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    this.setData({
      begindate: yesterdaystr,
      enddate: todaystr
    });
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