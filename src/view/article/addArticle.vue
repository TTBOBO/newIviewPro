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
          { field: "hm_archives.name",title: "文章标题",value: "", validate: "required",type:"input"},
          { field: "hm_archives.shorttitle",title: "短标题",value: "", validate: "required",type:"input"},
          { field: "hm_archives.click",title: "点了量",value: '', validate: "pInt", type:"input"},
          { field: "hm_archives.writer",title: "作者",value:'',validate: "required",type:"select",url:"/hmapi/member/api_admin/grid",colKey:"id",colName:"tname"},
          { field: "hm_archives.litpic",title: "缩略图",value: [],  validate: "required",type:"upload"},
          { field: "hm_archives.collection",title: "收藏id",value: '', validate: "required",type:"input"},
          { field: "hm_archives.pubdate",title: "发布日期",value: '', validate: "required",type:"time"},
          { field: "hm_archives.goodpost",title: "好评",value: '', validate: "pInt",type:"input"},
          { field: "hm_archives.badpost",title: "差评",value: '', validate: "pInt",type:"input"},
          { field: "hm_archives.notpost",title: "允许回复",value: '', validate: "required",type:"select",option:{0:"允许",1:"不允许"}},
          { field: "hm_archives.is_top",title: "置顶",value: '', validate: "required",type:"select",option:{0:"不顶置",1:"顶置"}},
          { field: "hm_archives.tip",title: "标签",value: '', validate: "required",type:"select",option:{1:"新闻",2:"热点",3:"资讯",4:"广告",5:"专题"}},
          { field: "hm_archives.description",title: "描述",value: '', validate: "",type:"editor"},

        ],
        infoUrl:"",  //获取详情url
        addEditUrl:"/hmapi/article/api_article/update_or_add",
        validata:{},
        primaryKey:'hm_archives.id'
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