// //普通封装
// function request(){

// }
// 升级版
//要想一下哪些会变
const request = (param) =>{
  // 显示加载提示框
  wx.showLoading({
    title: '疯狂加载中...',
  });
  return new Promise((resolve, reject) => {
    //定义请求基准路径
    const baseURL = 'https://api.zbztb.cn/api/public/v1/'

    wx.request({
      // url 请求地址 = 基准路径 + 参数中 url
      url: baseURL + param.url,
      success: res => {
        //console.log(res.data, "11111")
        const { message } = res.data;
        // 请求成功执行 resolve，并传输 message 数据
        resolve(message); 
      },
      // 请求失败的回调函数
      fail: err => {
        reject(err);
      },
      // 请求结束都会执行
      complete: res => {
        // 隐藏记载提示框
        wx.hideLoading();
      }
    })
  })
}
// 把模块进行导出，导出一个对象
module.exports = {
  request
}