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
        url: "feedbackGrid",
        columns: [
          {type: "selection", width: 60,align: "center"},//hp_addonshop.create_by
          {title: "id", key: "hm_feedback.id", search: "hm_feedback.id", sortType:"desc", type: "",width: 80,sortable: true},
          {title: "文章标题",key: "hm_archives.name",search: "hm_feedback.name", type: "", width: 200},
          {title: "评论内容",key: "hm_feedback.content",search: "hm_feedback.content", type: "", width: 200},
          {title: "好评", key: "hm_feedback.good", search: "hm_feedback.good", type: "number", width: 80},
          {title: "差评", key: "hm_feedback.bad", search: "hm_feedback.bad", type: "number", width: 80},
          {title: "评论时间",key: "hm_feedback.dtime",search: "hm_feedback.dtime",type: "time", ellipsis: true,width: 200 },
          {title: "评论者",key: "hm_member.uname",search: "hm_feedback.mid",width: 200, type: "select", width: 200,url:"memberGrid",colKey:"mid",colName:"uname"},
          {title: "是否审核",key: "hm_feedback.ischeck", search: "hm_feedback.ischeck", type: "select", width: 200 ,selectOPtion:[{label:"不审核",value:"0"},{label:"审核",value:"1"}]}, 
          {title: "操作",key: "action", fixed: "right",align: "center",render:""
          }
        ],
        autoCol: true,
        primary:"hm_feedback.id",
        topBtnGroup: [
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "批量删除", bgcolor: "error", url: "/hmapi/article/api_article_feedback/delete", type: "plDel",icon:"trash-b"},
        //   { name: "导出表格", bgcolor: "success", url: "", type: "export",icon:"forward" },
        //   { name: "导入表格", bgcolor: "success", url: "", type: "import",icon:"forward" }
        ],
        getList:{
          filter:""
        },
        toolEvent: [
          { type: "info",title:"详情", url: "/feedbackInfo" },
          { type: "del",title:"删除", url: "/hmapi/article/api_article_feedback/delete" },
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
