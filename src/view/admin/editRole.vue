<template>
  <div>
        <div style=" padding:30px;width:300px;">
            <Form ref="roleValidat" label-position="left" :model="formItem" :label-width="80" :rules="ruleValidate">
                <FormItem prop="name" label="角色名称">
                    <Input v-model="formItem.name" placeholder="角色名称"></Input>
                </FormItem>
            </Form>
             <tree-list ref="tree" :dataList="treeData" :defaultData="defaultData" @changeTree = "changeTree"></tree-list>
            <div class="buttonTool" style="margin-top:50px;">
                <Button type="primary" @click="add_edit('roleValidat')">保存</Button>
                <Button type="primary" @click="reset('roleValidat')">取消</Button>
            </div>
        </div>
     
  </div>
</template>
<script>
import treeList from '../../components/tree/tree'
import tree1 from '../../components/tree/tree2'
import ykp from "../../assets/js/ykp";
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  data() {
      return {
          formItem:{
              name:""
          },
          ruleValidate:{
               name: [
                    { required: true, message: '请输入角色名称 ', trigger: 'blur' }
                ],
          },
          treeData:[],
          defaultData:[],
          treeRes:'',
          id:"",
          showtree:false
      }
  },
  methods:{
      changeTree(res) {
          this.treeRes = res;
          
      },
      initRole(){
            let data = {},data1={};
            data.uid = 1;
            this.$ajaxPost("/hmapi/member/api_role/",data).then(res => {
                this.role.dataList = res.data;
                console.log(res.data);
                this.treeData = res.data;
                
            })
            data1.uid = JSON.parse(ykp.getSessionStorage('userInfo')).id;
            data1.role_id = this.$route.query.id;
            this.$ajaxPost("/hmapi/member/api_role/editRole",data1).then(res => {
                // this.treeData = res.data;
                this.formItem.name = res.data.info.name;
                this.id = res.data.info.id;
                this.defaultData =  res.data.info.permission.split(',');   
                 this.role.defaultData = res.data.info.permission.split(',');             
                this.treeRes =  res.data.info.permission.split(',');
                console.log(this.role);
                this.showtree = true;
			})
      },
      add_edit(name) {
          	this.$refs[name].validate(valid => {
				if(valid) {
                    if(this.treeRes.length == 0) {
                        this.$Message.error('请选择权限在提交');
                        return false;
                    }
                    let data = {};
                    data.name = this.formItem.name;
                    data.permission = this.treeRes.join(',');
                    data.id = this.id;
                    this.$ajaxPost("/hmapi/member/api_role/add_or_edit",data).then(res => {
                        if(res.code == 400) {
                            this.$Message.error('操作失败');
                            return false;
                        }
                        this.$Message.success('编辑成功');
                        this.$router.go(-1);
                    })
                }
            })
      },
      getSelectNodes() {
          
      },
      reset(name) {
          this.$refs[name].resetFields();
      }
  },
  mounted() {
      this.initRole();
  },
  components:{
      treeList,
      tree1
  },
  computed:{
    ...mapState([
		'role'
	]),
  },
  created() {

  }
}
</script>
