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
        url: "roadshowGrid",
        columns: [
          {type: "selection", width: 60,align: "center"},//hp_addonshop.create_by
          {title: "id", key: "roadshow.id", search: "roadshow.id", sortType:"desc", type: "",width: 80,sortable: true},
          {title: "活动标题",key: "roadshow.title",search: "roadshow.title", type: "", width: 200},
          {title: "活动主图",key: "roadshow.thumb",search: "",render:"img", type: "", width: 200},
          {title: "热", key: "roadshow.ishot", search: "roadshow.ishot", type: "select", width: 80,selectOPtion:[{label:"普通",value:"0"},{label:"hot",value:"1"}]},
          {title: "描述", key: "roadshow.description", search: "roadshow.description", type: "number", width: 200},
          {title: "创建时间",key: "roadshow.create_at",search: "roadshow.create_at",type: "time", ellipsis: true,width: 200 },
          {title: "活动类型",key: "roadshow_type.name",search: "roadshow.type",width: 200, type: "select", width: 200,url:"roadshowTypeGrid",colKey:"id",colName:"name"},
          {title: "内容",key: "roadshow.content", search: "", type: "", width: 200 }, 
          {title: "操作",key: "action", fixed: "right",align: "center",render:""
          }
        ],
        autoCol: true,
        primary:"roadshow.id",
        topBtnGroup: [
        { name: "添加", bgcolor: "info", url: "/addRoadShow", type: "add",icon:"plus" },
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "批量删除", bgcolor: "error", url: "/hmapi/article/api_roadshow/delete", type: "plDel",icon:"trash-b"},
        //   { name: "导出表格", bgcolor: "success", url: "", type: "export",icon:"forward" },
        //   { name: "导入表格", bgcolor: "success", url: "", type: "import",icon:"forward" }
        ],
        getList:{
          filter:""
        },
        toolEvent: [
        { type: "edit",title:"编辑", url: "/editRoadShow" },
          { type: "info",title:"详情", url: "/feedbackInfo" },
          { type: "del",title:"删除", url: "/hmapi/article/api_roadshow/delete" },

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
