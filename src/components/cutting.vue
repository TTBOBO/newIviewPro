<template>
  <!-- width:500px; -->
  <div>
    <Modal
      v-model="cuttingModal"
      title=""
      :mask-closable="maskClosable"
      @on-cancel="cancel"
      width='600px'>
      <div class="edit-image">
        <div class="upload-one">
          <img id="cropimg" alt="">
        </div>
        <div class="upload-two">
          <div class="preview-box">
            <div id="preview"></div>
          </div>
          <div class="btn-tool">
            <input type="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="handleChange"
                   id="fileinput" class="fileinput"/>
            <label class="filelabel" for="fileinput">
              <Icon type="image"></Icon>&nbsp;选择图片</label>
            <span><Button @click="handlecrop" type="primary" icon="crop">裁剪</Button></span>
          </div>
        </div>
      </div>
      <!-- <div slot="close"></div> -->
      <div slot="footer"></div>
    </Modal>

    <Modal v-model="showCropedImage" @on-ok="upload" @on-cancel="cancel">
      <p slot="header">预览裁剪之后的图片</p>
      <img :src="cropedImg" alt="" v-if="showCropedImage" style="width: 100%;">
    </Modal>
  </div>
</template>

<script>
  import Cropper from 'cropperjs';

  export default {
    data() {
      return {
        showCropedImage: false,
        cropedImg: "",
        cuttingModal: false,
        maskClosable: false,
        cropper1:""
      }
    },
    props:{
      avatar:{
        defaut:false,
      },
      floatAd:{
        defaut:false,
      }
    },
    methods: {
      showcuttingModal() {
        this.cuttingModal = !this.cuttingModal;
      },
      handleChange(e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = () => {
          this.cropper1.replace(reader.result);
          reader.onload = null;
        };
        reader.readAsDataURL(file);
      },
      handlecrop() {
//        console.log(this.cropper1)
        if (!this.cropper1.getCroppedCanvas()) {
          this.$Message.error('请上传图片再裁剪!');
          return false;
        }
        let file = this.cropper1.getCroppedCanvas().toDataURL();
        this.cropedImg = file;
        this.showCropedImage = true;
      },
      upload() {
        this.$emit('editSuccess', this.cropedImg);
      },
      cancel() {
        this.destroy();
      },
      //销毁裁剪
      destroy() {
        this.cropedImg = "";
        this.showCropedImage = false;
        this.showcuttingModal();
        this.cropper1.destroy();
      }
    },
    computed: {},
    mounted() {
      let img1 = document.getElementById('cropimg');
      let obj = {
        dragMode: 'move',
        preview: '#preview',
        restore: false,
        center: false,
        highlight: false,
        cropBoxMovable: false,
        cropBoxResizable: false,  //可拖拽裁剪框
        toggleDragModeOnDblclick: false,
        aspectRatio : 5/3
      };
      if (this.avatar) {
        obj.aspectRatio = 1/1;
      }
      if(this.floatAd){
        obj.aspectRatio = 142/35;
      }

      this.cropper1 = new Cropper(img1, obj);
    },
    created() {

    }
  }
</script>

<style>
  @import "/static/css/cropper.min.css";

  .upload-one {
    width: 300px;
    height: 300px;
    margin-right: 20px;
    position: relative;
    border: 1px solid #c3c3c3;
  }

  .upload-two {
    width: 230px;
    height: 300px;
    position: relative;

    overflow: hidden;
    padding-left: 10px;
  }

  #cropimg {
    width: 100%;
    height: 100%;
  }

  .preview-box {
    width: 100%;
    height: 200px;
    border: 1px solid #c3c3c3;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  #preview {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #preview img {
    width: 100%;
    /* height: 100% !important; */
  }

  .edit-image {
    width: 549px;
    height: 290px;
    position: relative;
    display: flex;
    flex-flow: row;
    margin-top: 30px;

  }

  .fileinput {
    display: none;
  }

  .filelabel {
    padding: 6px 15px;
    background: #2d8cf0;
    display: inline-block;
    border: 1px solid #2d8cf0;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    font-size: 12px;
    text-align: center;
    transition: all .2s;
  }

  .btn-tool {
    margin-top: 10px;
  }
</style>
