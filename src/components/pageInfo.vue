<template>
  <div style="padding:20px;">
    <Form :label-width="100" v-if="show">
       <FormItem   v-for="(item, index) in infoData" v-if="item.type != 'time' && item.type != 'image'" :label="item.title+'：'" :key="index">
            <p>{{item.left ? item.left+' ' : ""}}{{item.value}}{{item.right ? ' '+item.right : ""}}</p>
        </FormItem>
         <FormItem   v-for="(item, index) in infoData" v-if="item.type == 'time'" :label="item.title+'：'" :key="index">
            <p>{{item.value}}</p>
        </FormItem>
         <FormItem   v-for="(item, index) in infoData" v-if="item.type == 'image'" :label="item.title+'：'" :key="index">
            <img v-if="item.value.split(',').length == 1" :src="item.value"  class="imgCon" @click="showImg(item.value)" />
            <img v-else v-for="(imgChild,index) in item.value.split(',')" :src="imgChild[i]"  class="imgCon"  :key="index"/>
        </FormItem>
    </Form>
    <Modal :title="modal.modalTitle" v-model="visible">
        <img :src="modal.modalImg" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>
<script>
import ykp from "../assets/js/ykp";
import hm from "../assets/js/hm";
import util from "../assets/js/util";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      id:"",
      infoData:[],
      show:false,
      visible:false,
      modal: {
					modalTitle: "查看图片",
					modalImg: ""
			},
    };
  },
  props: {
    params: {
      default: function() {
        return {
          formList: [],
          infoUrl: ""
        };
      }
    }
  },
  methods: {
    //点击查看大图
			showImg(url, index, key) {
				this.modal.modalImg = url;
				this.visible = true;
			},
    initPage() {
      this.infoData = this.params.formList;
      this.id = this.$route.query.id;
      this.$ajaxPost(this.params.infoUrl,{
         filter: this.params.primaryKey +'='+this.id
      }).then(res => {
        let data = res.data;
        this.infoData.forEach((item) => {
            for(var i in data) {
              if(i == item.key) {
                if(item.type == 'time') {
                   item['value'] = util.time.getNowDate(data[i]);
                }else if(item.type == 'select') {
                   item['value'] = this.getSelectOption(item.selectOPtion,data[i]);
                }else{
                  item['value'] = data[i]
                }
              }
            }
        });
        
        this.show = !this.show;
      });
    },
    getSelectOption(obj,val) {
      let res = "";
      if(obj.length > 0) {
       
        obj.forEach((item) => {
          if(item.value == val) {
            res = item.label;
            return false;
          }
        })
      }
      return res;
    },
  },
  computed: {
    ...mapState(["orderList"])
  },
  mounted() {
    this.initPage();
  }
};
</script>
<style>
.imgCon{
  width: 80px;
  height: 80px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
</style>


