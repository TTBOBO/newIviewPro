<template>
  <div>
      <Modal v-model="params.showModel"  :title="params.title || '添加' " v-if="showForm" width="500px" @on-ok="add_edit('paramsData')" @on-cancel="cancelModal" :loading="loading">
       <!-- {{paramsData}}    {{params.formList}}  {{validata}}  -->
                <Form ref="paramsData"  :model="paramsData"  :rules="validata" :label-width="90"  v-show="showForm" >
                 <!-- //params.formList -->
                    <FormItem :label="item.title+':'"  v-for="(item, index) in params.formList" :model="params.formList"  :prop="item.field.replace(/\./,'-')"  :key="index" >
                        <!-- Input start-->
						                <Input  v-model="paramsData[item.field.replace(/\./,'-')]"  :placeholder="'请输入'+item.title" style="width:200px"  v-if="item.type=='input'"> </Input>
                        <!-- Input end-->
                        <!-- Select start-->
                        <Select v-model="paramsData[item.field.replace(/\./,'-')]" clearable  style="width:200px"  :placeholder="'请选择'+item.title"  v-if="item.type=='select' && !item.multiple">
                            <Option v-for="selectOpt in item.option" :value="selectOpt.value" :key="selectOpt.value">{{ selectOpt.label }}</Option>
                        </Select>
                        <!-- Select end-->

                        <!-- Select multiple start-->
                        <Select v-model="paramsData[item.field.replace(/\./,'-')]"  style="width:200px"  multiple  filterable :placeholder="'请选择'+item.title"  v-if="item.type=='select' && item.multiple">
                            <Option v-for="selectOpt in item.option" :model="item.option" :value="selectOpt.value" :key="selectOpt.value">{{ selectOpt.label }}</Option>
                        </Select>
                        <!-- Select multiple end-->

                        <!-- DatePicker  start-->
                        <DatePicker  v-model="paramsData[item.field.replace(/\./,'-')]"  style="width:200px" :type="item.dataType" :placeholder="item.title"  v-if="item.type=='time'" ></DatePicker>
                        <!-- DatePicker end-->

                        <!-- CheckboxGroup start-->
                        <CheckboxGroup v-model="raio" v-if="item.type=='checkbox'">
                            <Checkbox  v-for="(checkOption,index) in item.option" :label="checkOption.value" :key="index" >
                                <span>{{ checkOption.label }}</span>
                            </Checkbox>
                        </CheckboxGroup>
                        <!-- CheckboxGroup end-->

                        <!-- RadioGroup start-->
                        <RadioGroup  v-model="paramsData[item.field.replace(/\./,'-')]"  v-if="item.type=='radio'">
                            <Radio  v-for="(radioOption,index) in item.option" :label="radioOption.value" :key="index">
                                <span>{{ radioOption.label }}</span>
                            </Radio>
                        </RadioGroup>
                        <!-- RadioGroup end-->

                        
                        <!-- Switch start-->
                        <i-switch  size="large"  v-model="paramsData[item.field.replace(/\./,'-')]"   v-if="item.type=='switch'">
                          <span slot="open">ON</span>
                          <span slot="close">OFF</span>
                        </i-switch>
                        <!-- Switch end-->


                        <!-- 上传图片  v-model="paramsData[item.field.replace(/\./,'-')]"  start-->
                        
                        <div v-if="item.type=='upload'">
							<span style="display:none">{{paramsData[item.field.replace(/\./,'-')] }}   {{item.value}}</span>
                            <div class="demo-upload-list" :ref="item.field.replace(/\./,'-')"  v-for="(item1,index) in item.value"  :key=index>
                              <template>
                                  <img :src="item1.url">
                                  <div class="demo-upload-list-cover">
                                      <Icon type="ios-eye-outline" @click.native="handleView(item1.url,index,item.field.replace(/\./,'-'))"></Icon>
                                      <Icon type="ios-trash-outline" @click.native="handleRemove(item1.url,index,item.field.replace(/\./,'-'))"></Icon>
                                  </div>
                              </template>
                          </div>
                          <span  @click="changeUplad(item.field)">
                          <Upload
                              ref="upload"
                              :show-upload-list="false"
                              :default-file-list="item.value"
                              :on-success="handleSuccess"
                              :format="['jpg','jpeg','png']"
                              :max-size="2048"
                              :before-upload="handleBeforeUpload"
                              :on-progress="handProgress"      
                              multiple
                              method="post"
                              type="drag"
                              action="http://www.huiming.com/api/api_common1/upload_file"
                              style="display: inline-block;width:80px;">
                              <div style="width: 80px;height:80px;line-height: 80px;">
                                  <Icon type="camera" size="20"></Icon>
                              </div>
                          </Upload>
                          </span>
                        </div>
						 <!-- 上传图片  end-->

						 <!-- tagGroup标签 start-->
						 <!-- {{item.value}}  {{paramsData[item.field.replace(/\./,'-')]}} -->
						<tagGroup  v-model="paramsData[item.field.replace(/\./,'-')]" @changeTag="changeTagGroup" :colKey="item.field.replace(/\./,'-')" :tagCount="paramsData[item.field.replace(/\./,'-')]" v-if="item.type == 'tag'"></tagGroup>
						 <!-- tagGroup标签 endt-->

						  <!-- 数字加减 start-->
						  <InputNumber v-model="paramsData[item.field.replace(/\./,'-')]" size="large" v-if="item.type == 'adddelInput'" :value="item.value"></InputNumber>
						<!-- <adddelInput  v-model="paramsData[item.field.replace(/\./,'-')]"  @changeNum="changeInput" v-if="item.type == 'adddelInput'" :value="item.value"></adddelInput> -->
                        <!-- 数字加减 endt-->

					<!-- 富文本 start-->
						<div style="width:80%" v-if="item.type=='editor'">
							<div style="display: none;">
								<Upload 
								ref="uploadFile"
								:action="baseUrl"
								:on-success="editorHandle"
								:show-upload-list=false
								:max-size=2048
								:format= "['jpg','jpeg','png']"
							>
								<Button id="editorUpload"  icon="arrow-up-a">上传文件</Button>
							</Upload>
							</div>
						
                            <quill-editor ref="myEditor"   v-model="paramsData[item.field.replace(/\./,'-')]" style="height: 150px; width: 100%; margin-top: 10px;" >
								
							</quill-editor>
                        </div>
                         <!-- 富文本  end-->
					          </FormItem>
                </Form>
				<!-- {{radioGroup}}   {{radio}}
				<radioGroup v-model="radio">
					<Radio v-for="(radioO,index) in radioGroup" :label="radioO.value" :key="index">
						<span>{{radioO.label}}</span>
					</Radio>
				</radioGroup> -->
				
                <!-- <div class="buttonTool">
                    <Button type="primary" @click="add_edit('paramsData')">保存</Button>
                    <Button type="primary" @click="reset('paramsData')">取消</Button>
                </div> -->
            <!-- </Col> -->
        </Modal>
  </div>
</template>
<script>
// import addEdit from "./add_edit";
import ykp from "../assets/js/ykp";
import util from "../assets/js/util";
import tagGroup from "../components/tagGroup";
import adddelInput from "../components/adddelInput";
import * as type from '../store/constant/type';
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      addList: {},
      showModel: false,

      // validata:{},
      validata: {},
      paramsData: {},
      uplaodObj: "", //存放上传文件的参数
      modal: {
        modalTitle: "查看图片",
        modalImg: ""
      },
      visible: false,
      add_edit_info: {
        modelInfo: {},
        colModel: [],
        primaryKey: "",
        id: ""
      },
      add_edit_info1: {},
      showForm: false,
      tagCount: [1, 2],
      loading: true,
      baseUrl:''
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
    cancelModal() {
     this.$emit('changeModal',false);
    },
      /**
			 * 富文本上传图片成功插入图片
			 */
			editorHandle(res, file) {
				let addImgRange = this.$refs.myEditor[0].quill.getSelection();
				this.$refs.myEditor[0].quill.editor.insertEmbed(addImgRange.index, 'image', res.data);
			},
    add_edit(formList) {
      this.$refs[formList].validate(valid => {
        // console.log(valid);
        if (valid) {
          //验证成功时
          for (var i in this.paramsData) {
            this.params.formList.forEach((item, index) => {
              if (item.field.replace(/\./, "-") == i) {
                if (item.type == "time") {
                  if (this.params.curent) {
                    //curent  当出现 默认只传参数时
                    if (item.dataType == "datetimerange") {
                      //时间范围时 数值是数组
                      this.paramsData[i]
                        ? (this.add_edit_info1[i.substr(i.indexOf("-") + 1)] =
                            parseInt(new Date(this.paramsData[i][0]) / 1000) +
                            "-" +
                            parseInt(new Date(this.paramsData[i][1]) / 1000))
                        : "";
                    } else {
                      this.paramsData[i]
                        ? (this.add_edit_info1[
                            i.substr(i.indexOf("-") + 1)
                          ] = parseInt(new Date(this.paramsData[i]) / 1000))
                        : "";
                    }
                  } else {
                    if (item.dataType == "datetimerange") {
                      //时间范围时 数值是数组
                      this.paramsData[i]
                        ? (this.add_edit_info.modelInfo[
                            i.substr(i.indexOf("-") + 1)
                          ] =
                            parseInt(new Date(this.paramsData[i][0]) / 1000) +
                            "-" +
                            parseInt(new Date(this.paramsData[i][1]) / 1000))
                        : "";
                    } else {
                      this.paramsData[i]
                        ? (this.add_edit_info.modelInfo[
                            i.substr(i.indexOf("-") + 1)
                          ] = parseInt(new Date(this.paramsData[i]) / 1000))
                        : "";
                    }
                  }
                } else if (
                  item.type == "upload" ||
                  item.multiple ||
                  item.type == "tag" ||
                  item.type == "checkbox"
                ) {
                  if (this.params.curent) {
                    this.add_edit_info1[
                      i.substr(i.indexOf("-") + 1)
                    ] = this.paramsData[i].join(",");
                  } else {
                    if (this.params.curent) {
                      if (this.paramsData[i]) {
                        this.add_edit_info1[
                          i.substr(i.indexOf("-") + 1)
                        ] = this.paramsData[i].join(",");
                      }
                    } else {
                      if (this.paramsData[i]) {
                        this.add_edit_info.modelInfo[
                          i.substr(i.indexOf("-") + 1)
                        ] = this.paramsData[i].join(",");
                      }
                    }
                  }
                } else if (item.type == "switch") {
                  if (this.params.curent) {
                    this.add_edit_info1[i.substr(i.indexOf("-") + 1)] = this
                      .paramsData[i]
                      ? 1
                      : 0;
                  } else {
                    this.add_edit_info.modelInfo[
                      i.substr(i.indexOf("-") + 1)
                    ] = this.paramsData[i] ? 1 : 0;
                  }
                } else {
                  if (this.params.curent) {
                    this.add_edit_info1[
                      i.substr(i.indexOf("-") + 1)
                    ] = this.paramsData[i];
                  } else {
                    this.add_edit_info.modelInfo[
                      i.substr(i.indexOf("-") + 1)
                    ] = this.paramsData[i];
                  }
                }
                if (!this.params.curent) {
                  this.add_edit_info.colModel.push({
                    name: i.substr(i.indexOf("-") + 1)
                  });
                }

                delete this.paramsData[i];
              }
            });
          }
          //当前页面操作数据时   数据需要复杂操作数据时 直接返回数据给父组件
          if (!this.params.curent) {
            this.add_edit_info.id = this.params.id;
            this.add_edit_info.primaryKey = this.params.primaryKey;
          }
          // this.$emit('getData',this.add_edit_info);

          //执行添加编辑
          this.loading = false;   //加载圈
          this.do_add_edit(
            !this.params.curent ? this.add_edit_info : this.add_edit_info1
          );
        } else {
          setTimeout(() => {
            this.loading = false;
          }, 200);
        }
      });

      this.showForm = true;
    },
    reset(name) {
      this.$refs[name].resetFields();
      console.log( !this.params.curent ? this.add_edit_info : this.add_edit_info1);
    },
    //执行添加编辑
    do_add_edit(option) {
      let data = {};
      let msg = option.id ? "编辑成功" : "添加成功";
      let fail = option.id ? "编辑失败" : "添加失败";
      if (!this.params.curent) {
        if (!option.modelInfo || !option.colModel || !option.primaryKey) {
          console.error("请传入正确的参数");
          return false;
        } else {
          if (option.id) {
            option.colModel.unshift({ name: option.primaryKey });
            option.modelInfo[option.primaryKey] = option.id;
          }
          data.primaryKey = option.primaryKey;
          data.colModel = JSON.stringify(option.colModel);
          data.modelInfo = JSON.stringify(option.modelInfo);
        }
        this.$emit("getData", option);
      } else {
        this.$emit("getData", option);
      }
      if (this.params.id) {
        data.id = option.id;
      }
      data = this.params.curent ? option : data;

      this.$ajaxPost(this.params.addEditUrl, data).then(res => {
        if (res.code == 200) {
          this.$Message.success(msg);
          this.$emit("add_edit_suc",false);
          this.params.showModel = false;
        } else {
          this.$Message.error(fail);
        }
      });
    },

    //点击查看大图
    handleView(url, index, key) {
      this.modal.modalImg = url;
      this.visible = true;
    },
    // 删除图片
    handleRemove(url, index, key) {
      this.params.formList.forEach((item, i) => {
        if (item.field == key.replace(/\-/, ".")) {
          item.value.splice(index, 1);
        }
      });

      for (var i in this.paramsData) {
        if (i == key) {
          this.paramsData[i].splice(index, 1);
        }
      }
    },
    /**  上传图片方法  成功 */
    handleSuccess(response, file, fileList) {
      for (var i in this.paramsData) {
        if (i == this.uplaodObj) {
          this.paramsData[i].push(response.data);
        }
      }
      // console.log(this.uplaodObj.replace(/\-/, "."));
      this.params.formList.forEach((item, index) => {
        if (item.field == this.uplaodObj.replace(/\-/, ".")) {
          item.value.push({
            status: "finished",
            url: response.data,
            uid: parseInt(151376444600 + Math.random() * 10),
            percentage: 102
          });
        }
      });
    },
    handProgress(event, file, fileList) {},
    handleFormatError(file) {
      this.$Notice.warning({
        title: "文件格式不正确",
        desc: "文件 " + file.name + " 格式不正确，请上传 jpg 或 png 格式的图片。"
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "超出文件大小限制",
        desc: "文件 " + file.name + " 太大，不能超过 2M。"
      });
    },
    /**
			 * 上传前回调   item 为额外添加的参数  返回操作的数据字段
			 */
    handleBeforeUpload(img, name) {},

    changeUplad(name) {
      this.params.formList.forEach((item, index) => {
        if (item.field == name) {
          this.uplaodObj = name.replace(/\./, "-");
          // this.uplaodObj = name;
        }
      });
    },

    changeNum() {
      // console.log(this.params.formList);
      // console.log(this.paramsData);
    },
    changeTagGroup(group) {
      this.paramsData[group.key] = group.tagCount;
    },
    //初始化页面内容   id 编辑  / 无id  添加
    pageinit() {
      var id = this.$route.query.id;
      var listArr = {};

      this.params.formList.forEach((item, index) => {
        if (
          item.type == "select" ||
          item.type == "radio" ||
          item.type == "checkbox"
        ) {
          if (item.option) {
            //option:{0:"测试",1:"测试1"}   转化成  [{value:0,label:'测试'},{value:1,label:'测试1'}]
            item.option1 = [];
            for (var i in item.option) {
              item.option1.push({
                value: i,
                label: item.option[i]
              });
            }
            item.option = item.option1;
            delete item.option1;
          } else if (item.url) {
           
            this.$ajaxPost(item.url, {
              select:
                item.colKey +
                " as " +
                item.colKey +
                "," +
                item.colName +
                " as " +
                item.colName
            }).then(res => {
              item.option = [];
              res.data.rows.forEach((item1, index) => {
                item.option.push({
                  value: item1[item.colKey],
                  label: item1[item.colName]
                });
              });
            });
          }
        }
	  });
      if (this.params.infoUrl && this.params.id) {
        //编辑
        this.$ajaxPost(this.params.infoUrl, {
          filter: this.params.primaryKey + "=" + this.params.id
        }).then(res => {
          if (res.code == 200) {
            var data = res.data;
            for (var i in this.params.formList) {
              for (var j in data) {
                if (this.params.formList[i].field == j) {
                  if (this.params.formList[i].type == "upload") {
                    this.params.formList[i].value1 = [];
                    if (data[j]) {
                      data[j].split(",").forEach(item => {
                        if (item) {
                          this.params.formList[i].value1.push({
                            status: "finished",
                            url: item,
                            uid: parseInt(151376444600 + Math.random() * 10)
                          });
                        }
                      });
                    }
                    this.params.formList[i].value = this.params.formList[
                      i
                    ].value1;
                    delete this.params.formList[i].value1;
                    this.paramsData[
                      this.params.formList[i]["field"].replace(/\./, "-")
                    ] = data[j].split(",");
                  } else if (this.params.formList[i].type == "time") {
                    if (this.params.formList[i].dataType == "datetimerange") {
                      //时间范围 必须存放数组
                      this.paramsData[
                        this.params.formList[i]["field"].replace(/\./, "-")
                      ] = [];
                      this.paramsData[
                        this.params.formList[i]["field"].replace(/\./, "-")
                      ][0] = util.time.getNowTime(data[j].split("-")[0]);
                      this.paramsData[
                        this.params.formList[i]["field"].replace(/\./, "-")
                      ][1] = util.time.getNowTime(data[j].split("-")[1]);
                    } else {
                      this.params.formList[i].value = util.time.getNowTime(
                        data[j]
                      );
                      this.paramsData[
                        this.params.formList[i]["field"].replace(/\./, "-")
                      ] = util.time.getNowTime(data[j]);
                    }
                  } else if (
                    (this.params.formList[i].type == "select" &&
                      this.params.formList[i].multiple) ||
                    this.params.formList[i].type == "tag" ||
                    this.params.formList[i].type == "checkbox"
                  ) {
                    this.params.formList[i].value = [];
                    this.paramsData[
                      this.params.formList[i]["field"].replace(/\./, "-")
                    ] = [];
                    data[j].split(",").forEach(item => {
                      this.params.formList[i].value.push(item);
                    });
                    data[j].split(",").forEach(item => {
                      this.paramsData[
                        this.params.formList[i]["field"].replace(/\./, "-")
                      ].push(item);
                    });
                  } else if (this.params.formList[i].type == "switch") {
                    this.params.formList[i].value =
                      data[j] == 0 ? false : true || false;
                    this.paramsData[
                      this.params.formList[i]["field"].replace(/\./, "-")
                    ] =
                      data[j] == 0 ? false : true || false;
                  } else {
                    this.params.formList[i].value = data[j] || "";
                    this.paramsData[
                      this.params.formList[i]["field"].replace(/\./, "-")
                    ] =
                      data[j] || "";
                  }
                }
              }
            }
            setTimeout(() => {
              this.showForm = true;
            }, 201);
          } else {
          }
        });
      } else {
        //添加
        for (var i in this.params.formList) {
          if (this.params.formList[i].type == "upload") {
            this.params.formList[i].value = [];
            this.paramsData[
              this.params.formList[i]["field"].replace(/\./, "-")
            ] = [];
          } else if (this.params.formList[i].type == "time") {
            if (this.params.formList[i].dataType == "datetimerange") {
              //时间范围 必须存放数组
              this.params.formList[i].value = [];
              this.paramsData[
                this.params.formList[i]["field"].replace(/\./, "-")
              ] = [];
            } else {
              this.params.formList[i].value = "";
              this.paramsData[
                this.params.formList[i]["field"].replace(/\./, "-")
              ] =
                "";
            }
          } else if (
            (this.params.formList[i].type == "select" &&
              this.params.formList[i].multiple) ||
            this.params.formList[i].type == "tag"
          ) {
            this.params.formList[i].value = [];
            this.paramsData[
              this.params.formList[i]["field"].replace(/\./, "-")
            ] = [];
          } else if (this.params.formList[i].type == "adddelInput") {
            this.params.formList[i].value = 0;
            this.paramsData[
              this.params.formList[i]["field"].replace(/\./, "-")
            ] = 0;
          } else {
            this.params.formList[i].value = "";
            this.paramsData[
              this.params.formList[i]["field"].replace(/\./, "-")
            ] =
              "";
          }
        }
        this.showForm = true;
      }

      //因为页面部分数据是异步加载过来的    nextTick页面是 200毫秒内
    },

    //初始化  验证
    initValidate() {
      var obj = {};
      var validateNum = "";
      var verifyArr = {
        password: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"], //密码
        tel: [/^1[3|4|5|8][0-9]\d{4,8}$/, "不是完整的11位手机号或者正确的手机号前七位"], //手机号
        gtNum: [/^\d+$/, "请填写非负数"], //非负数
        pInt: [/^[0-9]*[1-9][0-9]*$/, "请填写正整数"], //正整数
        stre: [/^[A-Za-z]+$/, "请填写英文"], //英文
        streB: [/^[A-Z]+$/, "请填写大写英文"], //大写英文
        streS: [/^[a-z]+$/, "请填写小写英文"], //小写英文
        email: [/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, "请填写正确的邮箱"], //邮箱
        url: [/[a-zA-z]+:\/\/[^\s]* /, "请填写正确的url地址"], //url
        china: [/[^\x00-\xff]/, "请填写中文"], //中文
        qq: [/^\d{5,10}$/, "请填写正确的qq"], //qq
        idCard: [/\d{15}|\d{18}/, "请填写正确的身份证"], //身份证
        idCard: [/\d+\.\d+\.\d+\.\d+ /, "请填写正确的ip"], //ip地址
        mzero: [/^[1-9]\d*(\.\d+)?$/, "请输入大于零的数"] //大于零包含小数
      };
      this.params.formList.forEach((item, index) => {
        for (let i in verifyArr) {
          if (item.validate) {
            if (item.validate == i) {
              validateNum = (rule, value, callback) => {
                if (!verifyArr[i][0].test(value)) {
                  callback(new Error(verifyArr[i][1]));
                } else {
                  callback();
                }
              };
              obj[item.field.replace(/\./, "-")] = [
                {
                  required: true,
                  validator: validateNum,
                  trigger: item.blur || "blur"
                }
              ];
            } else if (item.validate == "required") {
              if (
                item.type != "select" &&
                !item.multiple &&
                item.type != "upload"
              ) {
                // console.log(obj[item.field.replace(/\./, "-")])
                //单选下拉是字符串
                validateNum = validateNum = (rule, value, callback) => {
                  if (!value) {
                    callback(new Error("不能为空!"));
                  } else {
                    callback();
                  }
                };
                obj[item.field.replace(/\./, "-")] = [
                  {
                    required: true,
                    validator: validateNum,
                    message: "请填写或者选择",
                    trigger: "blur"
                  }
                ];
              } else if (item.type == "upload") {
                // console.log(obj[item.field.replace(/\./, "-")])
                //单选下拉是字符串
                validateNum = validateNum = (rule, value, callback) => {
                  if (value.length == 0) {
                    callback(new Error("不能为空!"));
                  } else {
                    callback();
                  }
                };
                obj[item.field.replace(/\./, "-")] = [
                  {
                    required: true,
                    validator: validateNum,
                    message: "请填写或者选择",
                    trigger: "blur"
                  }
                ];
              } else {
                if (item.type == "select" && item.multiple) {
                  //多选下拉时 是数组
                  validateNum = validateNum = (rule, value, callback) => {
                    if (value.length == 0) {
                      callback(new Error("请填写或者选择"));
                    } else {
                      callback();
                    }
                  };
                  obj[item.field.replace(/\./, "-")] = [
                    {
                      validator: validateNum,
                      message: "请填写或者选择",
                      trigger: "change"
                    }
                  ];
                } else {
                  if (item.type != "switch" && item.type != "select") {
                    validateNum = validateNum = (rule, value, callback) => {
                      if (value.length == 0) {
                        callback(new Error("请填写或者选择"));
                      } else {
                        callback();
                      }
                    };
                    //上传图片  异步操作诗句 延迟0.2s
                    setTimeout(() => {
                      obj[item.field.replace(/\./, "-")] = [
                        {
                          validator: validateNum,
                          message: "请填写或者选择",
                          trigger: "change"
                        }
                      ];
                    }, 200);
                  } else if (item.type == "select" && !item.multiple) {
                    obj[item.field.replace(/\./, "-")] = [
                      {
                        required: true,
                        message: "请填写或者选择",
                        trigger: "change"
                      }
                    ];
                  }
                }
              }
            }
          }
        }
      });
      this.validata = obj;
    },
    
    initEditor() {
				var imgHandler = async function(state) {
					if(state) {
						let editorUpload = document.getElementById('editorUpload');
						console.log(editorUpload);
						editorUpload.click();
					}
				}
				setTimeout(() => {
					//判断是否有富文本   延迟是为了 等页面渲染出来才绑定事件
					if(this.$refs.myEditor) {
						this.$refs.myEditor[0].quill.getModule("toolbar").addHandler("image", imgHandler);
					}
				},300);
      },
      initList() {
          this.addList = this.params;
          
          this.baseUrl = type.BASEURL +"/api/api_common1/upload_file";
          this.pageinit();
      }
  },
  watch:{
	  'params.showModel'(curVal) {
		  if(curVal) {
        // this.pageinit();
        this.initEditor();
        
		  }
	  },
  },
  components: {
    tagGroup,
    adddelInput
  },
  created() {
    this.initList();
    this.initValidate();
  },
  mounted() {}
};
</script>
