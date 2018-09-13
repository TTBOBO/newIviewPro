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
        url: "addressGrid",
        columns: [
          {type: "selection", width: 60,align: "center"},//hp_addonshop.create_by
          {title: "id", key: "member_address.aid", search: "member_address.aid", sortType:"desc", type: "",width: 200,sortable: true},
          {title: "用户名",key: "hm_member.uname",search: "member_address.userid", type: "",sortable: true, width: 200},
          {title: "收货人姓名", key: "member_address.consignee", search: "member_address.consignee", type: "select", width: 200},
           {title: "地址", key: "member_address.address", search: "sex", type: "member_address.address", width: 200},
          {title: "省市",key: "member_address.city",search: "",type: "number", ellipsis: true,width: 200 },
          {title: "联系电话",key: "member_address.tel",search: "member_address.tel",  type: "number",width: 200 },
          {title: "是否默认", key: "member_address.id_default",search: "member_address.id_default",width: 200,type: "select",selectOPtion:[{label:"不默认",value:"0"},{label:"默认",value:"1"}]},
          {title: "操作",key: "action", fixed: "right",align: "center",render:"" }
        ],
        autoCol: true,
        primary:"member_address.aid",
        topBtnGroup: [
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "批量删除", bgcolor: "error", url: "/hmapi/member/api_address/delete", type: "plDel",icon:"trash-b"},
          { name: "导出表格", bgcolor: "success", url: "", type: "export",icon:"forward" }
        ],
        getList:{
          filter:""
        },
        toolEvent: [
          { type: "info",title:"详情", url: "/memberInfo" },
          { type: "del",title:"删除", url: "/hmapi/member/api_address/delete" },
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
