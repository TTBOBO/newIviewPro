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
          { field: "userid",title: "注册用户名",value: "", validate: "required",type:"input"},
          { field: "uname",title: "昵称",value: "", validate: "required",type:"input"},
          { field: "sex",title: "性别",value: '', validate: "required", type:"select",option:{0:"男",1:"女"}},
          { field: "rank",title: "等级",value:[],validate: "pInt",type:"input", },
          { field: "email",title: "邮箱",value: [],  validate: "email",type:"input"},
          { field: "face",title: "头像",value: '', validate: "required",type:"upload"},
        ],
        infoUrl:"",  //获取详情url
        addEditUrl:"/hmapi/member/api_member/update_or_add",
        validata:{},
        primaryKey:'mid'
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