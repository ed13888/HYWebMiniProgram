// Page/OrderInfo/OrderInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: {
      orderNo: "813291235464788594"
    },
    status: {
      1: {
        ing: "签收中",
        pass: "已签收"
      },
      2: {
        ing: "装柜中",
        pass: "已装柜"
      },
      3: {
        ing: "出港中",
        pass: "已出港"
      },
      4: {
        ing: "清关中",
        pass: "已清关"
      },
      5: {
        ing: "取货中",
        pass: "已到达"
      },
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var json = JSON.parse(options.json)
    if (json.SHTime) {
      var time = new Date(json.SHTime);
      json.Date1 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate();
      json.Time1 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds();
    }
    if (json.ZGTime) {
      var time = new Date(json.ZGTime);
      json.Date2 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate();
      json.Time2 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds();
    }
    if (json.CGTime) {
      var time = new Date(json.CGTime);
      json.Date3 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate();
      json.Time3 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds();
    }
    if (json.QGTime) {
      var time = new Date(json.QGTime);
      json.Date4 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate();
      json.Time4 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds();
    }
    if (json.DDTime) {
      var time = new Date(json.DDTime);
      json.Date5 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate();
      json.Time5 = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds();
    }

    this.setData({
      order: json
    });
    console.log(json);
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