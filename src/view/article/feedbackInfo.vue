<template>
  <div>
      <goodInfo :params="params"></goodInfo>
  </div>
</template>
<script>
import goodInfo from "../../components/pageInfo";
export default {
  data() {
      return {
          params:{
            formList:[
                // {title: "商品号", key: "hp_addonshop.aid", type: "",width: 200},
                {title: "文章标题",key: "hm_feedback.arctitle", type: "", width: 200},
                {title: "评论内容", key: "hm_feedback.content", type: "", width: 200},
                {title: "好评",key: "hm_feedback.good",width: 200 },
                {title: "差评",key: "hm_feedback.bad",type:"",width: 200 ,},
                {title: "评论时间", key: "hm_feedback.dtime", type: "time",width: 200},
                {title: "评论者",key: "hm_member.uname",type: "", width: 200},
                {title: "是否审核",key: "hm_feedback.ischeck", width: 200 ,type: "select",selectOPtion:[{label:"不审核",value:"0"},{label:"审核",value:"1"}]},
            ],
            infoUrl:"/hmapi/article/api_article_feedback/info",
            primaryKey:"hm_feedback.id"
          }
      }
  },
  components: {
      goodInfo
  }
}
</script>
