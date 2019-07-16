// pages/goods_list/goods_list.js
// 导入utils/request.js的require方法
const { request } = require("../../utils/request.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 初始化关键词
    query: '',
    //tab栏
    activeIndex: 0,
    //商品列表数据
    goods:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //结构获取页面参数
    const {
      query
    } = options
    // 更新数据
    this.setData({
      query
    });
    //调用getListData来获取到数据
    this.getListData(query);
  },

  //请求列表数据
  //(里面有参数,别忘记传)
  getListData(query) {
    request({
      url: "goods/search?query=" + query
    }).then(res =>{
      // 结构出goods的数据
      const {goods} =res;
      this.setData({
        goods:goods
      })
    })
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