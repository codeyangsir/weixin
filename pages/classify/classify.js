//导入封装好的request.js文件,并提取出来
const {request} = require("../../utils/request.js")

// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 初始化左侧菜单的默认选中状态索引
    activeIndex: 0,
    // 初始化分类总数据
    classify: [],
    // 初始化二级分类
    subClassify: []
  },
  //-------------------------------------------------
  //封装请求方法
  getClassifyData(){
    //console.log(request)//导入成功
    // 调用自己封装的 request 方法
    request({
      url:'categories'
    })
    .then(res =>{
      //console.log(res,'列表数据')
      this.setData({
        classify:res,
        subClassify: res[this.data.activeIndex].children
      })
    })
  },
  //点击分类左侧切换选项卡
  changeTab(event){
    //console.log(event)
    // 解构传递的索引值
    const { index } = event.currentTarget.dataset;
    //更新数据
    this.setData({
      // 左侧选项卡索引值更新
      activeIndex:index,
      // 右侧数据也根据索引值更新
      subClassify: this.data.classify[index].children
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getClassifyData()
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

  }
})