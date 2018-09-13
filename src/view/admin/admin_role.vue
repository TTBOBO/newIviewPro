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
        url: "roleGrid",
        columns: [
          {type: "selection", width: 60,align: "center"},//hp_addonshop.create_by
           {title: "id", key: "id", search: "id", sortType:"desc", type: "",width: 200,sortable: true},
          {title: "角色名称", key: "name", search: "name", sortType:"desc", type: "",width: 200,sortable: true},
          {title: "权限列表",key: "permission",search: "permission", type: "",sortable: true,},
          {title: "创建时间", key: "create_at", search: "create_at", type: "time", },
           {title: "操作",key: "action",align: "center",render:""}
        ],
        autoCol: true,
        primary:"id",
        topBtnGroup: [
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "添加", bgcolor: "info", url: "/addRole", type: "add",icon:"plus" },
          { name: "批量删除", bgcolor: "error", url: "/hmapi/member/api_role/delete", type: "plDel",icon:"trash-b"},
          { name: "导出表格", bgcolor: "success", url: "", type: "export",icon:"forward" },
        ],
        getList:{
          filter:""
        },
        toolEvent: [
          { type: "edit",title:"编辑", url: "/editRole" },
          { type: "del",title:"删除", url: "/hmapi/member/api_role/delete" },
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
