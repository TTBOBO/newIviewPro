<template>
  <div>
      <addEdit :params="params" @getData="changeData"></addEdit>
  </div>
</template>
<script>
import addEdit from "../../components/add_edit";
import hm from "../../assets/js/hm";
export default {
  data() {
    return {
      params: {
        formList: [
          { field: "hm_admin.uname",title: "用户名",value: "", validate: "required",type:"input"},
          { field: "hm_admin.tname",title: "真实姓名",value: "", validate: "required",type:"input"},
          { field: "hm_admin.email",title: "邮箱",value: '', validate: "",type:"input" },
          { field: "hm_admin.role_id",title: "管理员角色",value:[],validate: "required",type:"select",url:"/hmapi/member/api_role/grid",colKey:"id",colName:"name", },
          { field: "hm_admin.face",title: "头像",value: [],  validate: "required",type:"upload"},
          { field: "hm_admin.sex",title: "性别",value: '', validate: "required",type:"select",option:{0:"男",1:"女"}},
          { field: "hm_admin.pwd",title: "密码",value: '', validate: "password",type:"password"},
        ],
        infoUrl:"/hmapi/member/api_admin1/info",  //获取详情url
        addEditUrl:"/hmapi/member/api_admin1/update_or_add",
        validata:{},
        primaryKey:'hm_admin.id'
      }
    };
  },
  mounted() {},
  methods: {
    changeData(data) {
      console.log(data);
    },
    test() {

    },
    test1() {
      
    }
  },
  components: {
    addEdit
  }
};
</script>