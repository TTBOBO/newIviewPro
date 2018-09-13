<template>
  <div>
    <Tabs>
            <TabPane label="普通文章">
                <InitTable :dataOpton="dataOpton" @deleteList="getDelete" @add="add" @edit="edit" @info="info"   @getSearch="getSearch"></InitTable>
            </TabPane>
            <TabPane label="用户文章">
                 <InitTable :dataOpton="dataOpton1" @deleteList="getDelete" @add="add" @edit="edit" @info="info"  @getSearch="getSearch"></InitTable>
            </TabPane>
        </Tabs>
	 
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
        url: "articel",
        columns: [
          {type: "selection", width: 60,align: "center"},//hp_addonshop.create_by
          {title: "文章id", key: "hm_archives.id", search: "hm_archives.id", sortType:"desc", type: "",width: 200,sortable: true},
          {title: "文章标题",key: "hm_archives.name",search: "hm_archives.name", type: "",sortable: true, width: 200},
          {title: "文章类型", key: "article_type.name", search: "hm_archives.typeid", type: "select", width: 200,url:"articleType",colKey:"id",colName:"name"},
          {title: "短标题", key: "hm_archives.shorttitle", search: "hm_archives.shorttitle", type: "", width: 200,type: "",},
          {title: "点了量",key: "hm_archives.click",search: "hm_archives.clickrank",type: "number", ellipsis: true,width: 200 },
          {title: "作者",key: "hm_archives.writer",search: "hm_archives.writer",  type: "select",width: 200, type: "select", width: 200,url:"adminList",colKey:"id",colName:"tname"},
          {title: "缩略图", key: "hm_archives.litpic",search: "",render:'img',width: 200},
          {title: "收藏id",key: "hm_archives.collection", search: "hm_archives.collection", type: "", width: 200 }, 
          {title: "发布日期",key: "hm_archives.pubdate",search: "hm_archives.pubdate",type: "time", width: 200},
          {title: "好评",key: "hm_archives.goodpost",search: "hm_archives.goodpost",type: "number", width: 200},
          {title: "差评",key: "hm_archives.badpost", search: "hm_archives.badpost", type: "number", width: 200 },  //,render:'select',enum:[{name:"测试3",val:"0"},{name:"测试1",val:"1"},{name:"测试2",val:"2"}]
          {title: "允许回复",key: "hm_archives.notpost", search: "hm_archives.notpost", type: "select", width: 200,selectOPtion:[{label:"允许",value:"0"},{label:"不允许",value:"1"}] }, 
          {title: "描述",key: "hm_archives.description", search: "", type: "", width: 200 }, 
          {title: "置顶",key: "hm_archives.is_top", search: "hm_archives.is_top", type: "select", width: 200 ,selectOPtion:[{label:"不置顶",value:"0"},{label:"置顶",value:"1"}]}, 
          { title: "标签",key: "hm_archives.tip",search: 'hm_archives.tip',type:"select",width: 100,selectOPtion:[{label:"新闻",value:"1"},{label:"热点",value:"2"},{label:"资讯",value:"3"},{label:"广告",value:"4"},{label:"专题",value:"5"}]},
          {title: "操作",key: "action", fixed: "right",align: "center",render:""
          }
        ],
        autoCol: true,
        primary:"hm_archives.id",
        topBtnGroup: [
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "添加", bgcolor: "info", url: "/addArticle", type: "add",icon:"plus" },
          { name: "批量删除", bgcolor: "error", url: "/hmapi/article/api_article/delete", type: "plDel",icon:"trash-b"},
          { name: "导出表格", bgcolor: "success", url: "", type: "export",icon:"forward" },
          { name: "导入表格", bgcolor: "success", url: "", type: "import",icon:"forward" },
        ],
        getList:{
          filter:"hm_archives.typeid != 1"
        },
        toolEvent: [
          { type: "info",title:"详情", url: "/memberInfo" },
          { type: "edit",title:"编辑", url: "/editArticle" },
          { type: "del",title:"删除", url: "/hmapi/article/api_article/delete" },
        ]
      },
       dataOpton1: {
        url: "articel",
        columns: [
          {type: "selection", width: 60,align: "center"},//hp_addonshop.create_by
          {title: "文章id", key: "hm_archives.id", search: "hm_archives.id", sortType:"desc", type: "",width: 200,sortable: true},
          {title: "文章标题",key: "hm_archives.name",search: "hm_archives.name", type: "",sortable: true, width: 200},
          {title: "文章类型", key: "article_type.name", search: "hm_archives.typeid", type: "select", width: 200,url:"articleType",colKey:"id",colName:"name"},
          {title: "短标题", key: "hm_archives.shorttitle", search: "hm_archives.shorttitle", type: "", width: 200,type: "",},
          {title: "点了量",key: "hm_archives.click",search: "hm_archives.clickrank",type: "number", ellipsis: true,width: 200 },
          {title: "作者",key: "hm_archives.writer",search: "hm_archives.writer",  type: "select",width: 200, type: "select", width: 200,url:"adminList",colKey:"id",colName:"tname"},
          {title: "缩略图", key: "hm_archives.litpic",search: "",render:'img',width: 200},
          {title: "收藏id",key: "hm_archives.collection", search: "hm_archives.collection", type: "", width: 200 }, 
          {title: "发布日期",key: "hm_archives.pubdate",search: "hm_archives.pubdate",type: "time", width: 200},
          {title: "好评",key: "hm_archives.goodpost",search: "hm_archives.goodpost",type: "number", width: 200},
          {title: "差评",key: "hm_archives.badpost", search: "hm_archives.badpost", type: "number", width: 200 },  //,render:'select',enum:[{name:"测试3",val:"0"},{name:"测试1",val:"1"},{name:"测试2",val:"2"}]
          {title: "允许回复",key: "hm_archives.notpost", search: "hm_archives.notpost", type: "select", width: 200,selectOPtion:[{label:"允许",value:"0"},{label:"不允许",value:"1"}] }, 
          {title: "描述",key: "hm_archives.description", search: "", type: "", width: 200 }, 
          {title: "置顶",key: "hm_archives.is_top", search: "hm_archives.is_top", type: "select", width: 200 ,selectOPtion:[{label:"不置顶",value:"0"},{label:"置顶",value:"1"}]}, 
          { title: "标签",key: "hm_archives.tip",search: 'hm_archives.tip',type:"select",width: 100,selectOPtion:[{label:"新闻",value:"1"},{label:"热点",value:"2"},{label:"资讯",value:"3"},{label:"广告",value:"4"},{label:"专题",value:"5"}]},
          {title: "操作",key: "action", fixed: "right",align: "center",render:""
          }
        ],
        autoCol: true,
        primary:"hm_archives.id",
        topBtnGroup: [
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "添加", bgcolor: "info", url: "/addArticle", type: "add",icon:"plus" },
          { name: "批量删除", bgcolor: "error", url: "/hmapi/article/api_article/delete", type: "plDel",icon:"trash-b"},
          { name: "导出表格", bgcolor: "success", url: "", type: "export",icon:"forward" },
          { name: "导入表格", bgcolor: "success", url: "", type: "import",icon:"forward" }
        ],
        getList:{
          filter:"hm_archives.typeid = 1"
        },
        toolEvent: [
          { type: "info",title:"详情", url: "/memberInfo" },
          { type: "edit",title:"编辑", url: "/editArticle" },
          { type: "del",title:"删除", url: "/hmapi/article/api_article/delete" },
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
