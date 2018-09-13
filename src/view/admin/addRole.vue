<template>
  <div>
        <div style="width:300px; padding:30px;">
            <Form ref="roleValidat" label-position="left" :model="formItem" :label-width="80" :rules="ruleValidate">
                <FormItem prop="name" label="角色名称">
                    <Input v-model="formItem.name" placeholder="角色名称"></Input>
                </FormItem>
            </Form>
             <tree-list ref="tree" :dataList="treeData" @changeTree = "changeTree"></tree-list>

            <div class="buttonTool" style="margin-top:50px;">
                <Button type="primary" @click="add_edit('roleValidat')">保存</Button>
                <Button type="primary" @click="reset('roleValidat')">取消</Button>
            </div>
        </div>
        <!-- <tree1></tree1> -->
  </div>
</template>
<script>
import treeList from '../../components/tree/tree'
import tree1 from '../../components/tree/tree1'
import ykp from "../../assets/js/ykp";
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
          treeRes:''
      }
  },
  methods:{
      changeTree(res) {
          this.treeRes = res;
          
      },
      initRole(){
            let data = {};
            data.uid = 1;
            this.$ajaxPost("/hmapi/member/api_role/",data).then(res => {
				this.treeData = res.data;
			})
      },
      add_edit(name) {
          	this.$refs[name].validate(valid => {
				if(valid) {
                    if(this.treeRes.length == 0) {
                        console.log(this);
                        this.$Message.error('请选择权限在提交');
                        return false;
                    }
                    let data = {};
                    data.name = this.formItem.name;
                    data.permission = this.treeRes.join(',');
                    console.log(data);
                    this.$ajaxPost("/hmapi/member/api_role/add_or_edit",data).then(res => {
                        console.log(res);
                        if(res.code == 400) {
                            this.$Message.error('操作失败');
                            return false;
                        }
                        this.$Message.success('添加成功');
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
      
  },
  created() {

  }
}
</script>
