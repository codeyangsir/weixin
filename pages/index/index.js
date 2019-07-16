Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1.0 初始化轮播图数据
    slider: [],
    //一楼图片
    floor:[],
    //隐藏显示返回顶部按钮
    showTop:false
  },
  //请求轮播图数据
  getSliderData(){
    //向服务器发送请求，获取轮播图数据
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: res =>{
        //console.log(res,111111)//成功拿到数据
        const {message} = res.data;
        // 通过 setData 方法设置页面数据更新
        this.setData({
          slider:message
        })
      }
    })
  },
  //获取楼层图片(一楼)
  getFloor(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: res =>{
        //console.log(res.data,22222)
        const {message} = res.data
        this.setData({
          floor:message
        })
      }
    })
  },
  //回到顶部事件出来函数
  goTop(event){
    //console.log("看看event返回那些事件",event)
    const { top } = event.currentTarget.dataset
    //微信API文档复制
    wx.pageScrollTo({
      //滚动到页面的目标位置px
      scrollTop: 0,
      //滚动动画的时长
      duration: 300
    })
  },
  //页面滚动的时候触发(框架-页面-page里面的方法)
  onPageScroll(event){
    //看看滚动屏幕能不能触发
    //console.log(event)
    const {scrollTop} = event;
    if(scrollTop > 200){
      this.setData({
        showTop:true
      });
    }else{
      this.setData({
        showTop: true
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用轮播图请求
    this.getSliderData();
    // 调用一楼图片
    this.getFloor();
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