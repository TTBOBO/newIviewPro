const REQUEST = {
    productIndx: "/api/open/index", //产品首页
    productDetail: "api/open/productDetail", //产品详情
    addressList: 'api/userAddrs', //地址列表
    addAddress: 'api/addr/add', //添加地址
    updateaddr: 'api/addr/update', // 编辑地址
    addrInfo: 'api/addr/find', //地址详情
    delAddr: 'api/addr/del', //删除地址
    sendCode: 'api/open/sendCode', //发送验证码
    retrievePay: 'api/open/retrievePay', //设置交易密码
    owned: 'api/prod/owned', //已购产品持有
    onceOwned: 'api/prod/onceOwned', //已购产品过期
    transactList: 'api/transact/list', //转账记录
    sysAddrs: 'api/sysAddrs', //获取系统地址
    recharge: 'api/transact/recharge', //充币
    userInfo: 'api/userInfo', //用户信息
    inviteProfit: 'api/user/inviteProfit', // 累计邀请收益
    hosityList: 'api/open/hosityList', //网易收益
    giveList: 'api/open/giveList', //活动列表
    msglist: 'api/message/list', //消息列表
    delmsg: 'api/message/del', //删除消息
    authentication: '/api/user/authentication', //用户认证
    retrieve: 'api/open/retrieve', //修改登录密码
    purchase: 'api/prod/purchase', //购买产品
    userPhotos: 'api/userPhotos', //修改头像
    getPoundage: 'api/transact/getPoundage', //查询提币页面信息
    withdraw: 'api/transact/withdraw', //提币
    billFlow: 'api/billFlow/list', //账单
}
export default REQUEST;