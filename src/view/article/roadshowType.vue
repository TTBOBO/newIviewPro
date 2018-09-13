<template>
  <div>
	  <InitTable ref="table" :params="params"  :dataOpton="dataOpton" @deleteList="getDelete" @info="info"  @getSearch="getSearch"></InitTable>
  </div>
</template>
<script>
import InitTable from "../../components/table1";
import customAdd from '../../components/custom_add'
// import * as doAjax1 from "../../api/AjaxApi1";
export default {
  data() {
    // ,enum:true,selectOPtion:{a:"是",b:"否"} 
    return {
      dataOpton: {
        url: "roadshowTypeGrid",
        columns: [
          {type: "selection", width: 60,align: "center"},
          {title: "id", key: "id", search: "id", sortType:"desc", type: "number",sortable: true},
          {title: "栏目名称",key: "name",search: "name", type: "",sortable: true},
          {title: "描述", key: "des", search: "des", type: ""},
          {title: "操作",key: "action",align: "center",render:""
          }
        ],
        autoCol: true,
        primary:"id",
        topBtnGroup: [
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "添加", bgcolor: "info", url: "/addTest", type: "other",icon:"plus" ,},  //actionName:"addType"  可父组件自定义事件
          { name: "批量删除", bgcolor: "error", url: "/hmapi/goods/api_goods_type/delete", type: "plDel",icon:"trash-b"},
        ],
        getList:{
          filter:""
        },
        toolEvent: [
          { type: "edit",title:"编辑", url: "/editGoods", custom:"other" }, //actionName:"editType"
          { type: "del",title:"删除", url: "/hmapi/article/api_roadshow_type/delete" },
        ]
      },
      params: {
        formList: [
          { field: "name",title: "栏目名称",value: "", validate: "required",type:"input"},
          { field: "des",title: "描述",value: '', validate: "required",type:"input" },
        ],
        addEditUrl:"/hmapi/article/api_roadshow_type/update_or_add",
        validata:{},
        infoUrl:"/hmapi/article/api_roadshow_type/info",  //获取详情url
        primaryKey:'id',
        showModel:false,
      },
    };
  },
  components: {
    InitTable,
    // customAdd
  },
  methods:{
    getDelete(id) {
      console.log(id);
    },
    add_edit_suc() {
      this.$refs.table.reload();cd
    },
    editType(id) {
       this.params1.showModel = true;
       this.params1.id = id;
    },
    /**
     * 获取该条记录的id
     */
    info(id) {
      console.log(id);
    },
    getSearch(data) {
      console.log(data);
    },   
  },
  mounted() {
  }
};
</script>
