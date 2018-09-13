<template>
  <div>
       <InitTable :dataOpton="dataOpton"></InitTable>
  </div>
</template>
<script>
import InitTable from "../../components/table1";
export default {
  data() {
      return {
          dataOpton: {
        url: "admin1Grid",
        columns: [
          {type: "selection", width: 60,align: "center"},//hp_addonshop.create_by
           {title: "id", key: "hm_admin.id", search: "hm_admin.id", sortType:"desc", type: "",width: 200,sortable: true},
          {title: "用户名", key: "hm_admin.uname", search: "hm_admin.uname", sortType:"desc", type: "",width: 200,sortable: true},
          {title: "真实姓名",key: "hm_admin.tname",search: "hm_admin.tname", type: "",width: 200,sortable: true,},
          {title: "角色名称", key: "hm_role.name", search: "hm_role.role_id",width: 200, },
          {title: "邮箱", key: "hm_admin.email", search: "hm_admin.email",width: 200,type: "", },
          {title: "头像", key: "hm_admin.face", search: "hm_admin.face",width: 200,render:"img", },
          {title: "性别", key: "hm_admin.sex", search: "hm_admin.sex", width: 200,type: "select",selectOPtion:[{label:"男",value:"0"},{label:"女",value:"1"}]},
           {title: "操作",key: "action", fixed: "right",align: "center",render:""}
        ],
        autoCol: true,
        primary:"hm_admin.id",
        topBtnGroup: [
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "添加", bgcolor: "info", url: "/addAdmin", type: "add",icon:"plus" },
          { name: "批量删除", bgcolor: "error", url: "/hmapi/admin/api_admin1/delete", type: "plDel",icon:"trash-b"},
          { name: "导出表格", bgcolor: "success", url: "", type: "export",icon:"forward" },
        ],
        getList:{
          filter:""
        },
        toolEvent: [
          { type: "edit",title:"编辑", url: "/editAdmin" },
          { type: "del",title:"删除", url: "/hmapi/member/api_admin1/delete" },
        ]
      }
      }
  },
  methods:{

  },
  mounted() {

  },
  components:{
      InitTable
  },
  computed:{

  },
  created() {

  }
}
</script>
