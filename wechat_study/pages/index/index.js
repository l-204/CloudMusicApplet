// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"初始化测试数据",
    userInfo:{
      // 用户的基本信息
    }
  },

  handleParent(){
    console.log('parent')
  },
  handleChild(){
    console.log('child')
  },

  // 跳转至logs页面
  toLogs(){
    wx.reLaunch({
      url: '/pages/logs/logs',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 修改 message 状态数据, 语法: this.setData
    // console.log(this.data.message) // this 代表当前页面的实例对象
    // this.setData({
    //   message:'修改之后的数据'
    // })
    
    // setTimeout(()=>{
    //   console.log(this.data.message)
    // },2000)
    // console.log('onLoad()')

    // 授权以后获取用户信息
    wx.getUserInfo({
      success:(res)=>{
        console.log(res)
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  },

  // 获取用户信息的回调
  handleGetUserInfo(res){
    console.log(res)
    if(res.detail.userInfo){
      // 修改userInfo的状态数据
      this.setData({
        userInfo: res.detail.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onReady()')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onShow()')

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('onHide()')

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('onUnload()')

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})