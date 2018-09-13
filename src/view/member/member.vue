<template>
  <div>
	  <InitTable :dataOpton="dataOpton" @deleteList="getDelete" @add="add" @edit="edit" @info="info"  @getSearch="getSearch"></InitTable>
  </div>
</template>
<script>
import InitTable from "../../components/table1";
// import * as doAjax1 from "../../api/AjaxApi1";
export default {
  data() {
    // ,enum:true,selectOPtion:{a:"是",b:"否"} 
    return {
      dataOpton: {
        url: "memberGrid",
        columns: [
          {type: "selection", width: 60,align: "center"},//hp_addonshop.create_by
          {title: "会员id", key: "mid", search: "mid", sortType:"desc", type: "",width: 200,sortable: true},
          {title: "注册用户名",key: "userid",search: "userid", type: "",sortable: true, width: 200},
          {title: "昵称", key: "uname", search: "uname", type: "select", width: 200},
           {title: "性别", key: "sex", search: "sex", type: "select", width: 200,type: "select",selectOPtion:[{label:"男",value:"0"},{label:"女",value:"1"}]},
          {title: "会员级别值",key: "rank",search: "rank",type: "number", ellipsis: true,width: 200 },
          {title: "邮箱",key: "email",search: "email",  type: "number",width: 200 },
          {title: "头像", key: "face",search: "",render:'img',width: 200},
          {title: "注册时间",key: "jointime",search: "jointime",type: "time", width: 200},
          {title: "登录时间",key: "logintime", search: "logintime", type: "time", width: 200 },  //,render:'select',enum:[{name:"测试3",val:"0"},{name:"测试1",val:"1"},{name:"测试2",val:"2"}]
          {title: "操作",key: "action", fixed: "right",align: "center",render:""
          }
        ],
        autoCol: true,
        primary:"mid",
        topBtnGroup: [
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "添加", bgcolor: "info", url: "/addMember", type: "add",icon:"plus" },
          { name: "批量删除", bgcolor: "error", url: "/hmapi/member/api_member/delete", type: "plDel",icon:"trash-b"},
          { name: "导出表格", bgcolor: "success", url: "", type: "export",icon:"forward" },
          { name: "导入表格", bgcolor: "success", url: "", type: "import",icon:"forward" }
        ],
        getList:{
          filter:""
        },
        toolEvent: [
          { type: "info",title:"详情", url: "/memberInfo" },
          { type: "edit",title:"编辑", url: "/editMember" },
          { type: "del",title:"删除", url: "/hmapi/member/api_member/delete" },
        ]
      }
    };
  },
  components: {
    InitTable
  },
  methods:{
    getDelete(id) {
      console.log(id);
    },
     /**
     * 获取该条记录的id
     */
    edit(id) {
      //  console.log(id);
    },
    add() {
      // this.$Message.info('123');
    },
    /**
     * 获取该条记录的id
     */
    info(id) {
      console.log(id);
    },
    getSearch(data) {
      console.log(data);
    }
  },
  mounted() {
  }
};
</script>
