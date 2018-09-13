<template>
  <div>
      <goodInfo :params="params"></goodInfo>
  </div>
</template>
<script>
import goodInfo from "../../components/pageInfo";
export default {
  data() {
      return {
          params:{
            formList:[
                // {title: "商品号", key: "hp_addonshop.aid", type: "",width: 200},
                {title: "注册用户名",key: "userid", type: "", width: 200},
                {title: "昵称", key: "uname", type: "", width: 200,url:"/hmapi/member/api_admin/grid",colKey:"id",colName:"tname"},
                {title: "性别",key: "sex",type: "select",width: 200 ,selectOPtion:[{label:"男",value:"0"},{label:"女",value:"1"}]},
                {title: "会员级别",key: "rank",type:"",width: 200 ,right:"级",},
                {title: "邮箱", key: "email", type: "",width: 200},
                {title: "头像",key: "face",type: "image", width: 200},
                {title: "注册时间",key: "jointime", type: "time",width: 200 },
                {title: "登录时间", key: "logintime",type: "time",width: 200},
            ],
            infoUrl:"/hmapi/member/api_member/info",
            primaryKey:"mid"
          }
      }
  },
  components: {
      goodInfo
  }
}
</script>
