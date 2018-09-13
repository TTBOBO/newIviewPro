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
          { field: "roadshow.title",title: "活动标题",value: "", validate: "required",type:"input"},
          { field: "roadshow.thumb",title: "活动主图",value: "", validate: "required",type:"upload"},
          { field: "roadshow.ishot",title: "热",value: '', validate: "required",type:"select",option:{0:"普通",1:"热"}},
          { field: "roadshow.type",title: "活动类型",value:"",  validate: "required",type:"select",url:"/hmapi/article/api_roadshow_type/grid",colKey:"id",colName:"name"},
          { field: "roadshow.description",title: "描述",value:"",validate: "required",type:"input"},
          { field: "roadshow.create_at",title: "创建时间",value: '', validate: "required",type:"time"},
          { field: "roadshow.content",title: "活动内容",value: '', validate: "",type:"editor"},
        ],
        infoUrl:"/hmapi/article/api_roadshow/info",  //获取详情url
        addEditUrl:"/hmapi/article/api_roadshow/update_or_add",
        validata:{},
        primaryKey:'roadshow.id'
      }
    };
  },
  mounted() {},
  methods: {
    changeData(data) {
      console.log(data);
    },
  },
  components: {
    addEdit
  }
};
</script>