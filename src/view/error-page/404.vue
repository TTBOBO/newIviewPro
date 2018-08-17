<template>
	<div class="container">
		<div class="main">
			<div class="centerContent">
                <div class="error-body" style="">
                    4
                        <span   class=" cus-icon" style="color:#eb5757;"><Icon class="cus-icon" type="ios-navigate-outline"></Icon></span>
                    4
                   
                </div>
                 <p style="font-size:24px;text-align:center;color:#dddde2">页面不存在</p>
                <div class="error-foot">
                    <i-button class="err-btn" type="text" style="padding:0px 20px;" @click="goHome()">返回首页</i-button>
                    <i-button style=" width: 150px;height: 40px;" type="warning" @click="goBack()">返回上一页</i-button>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      show: false,
      loading: false
    };
  },
  methods: {
    goHome() {
      this.$router.next({
        path: "/Info"
      });
    },
    goBack() {
      this.$router.back();
    }
  },
  mounted() {
    this.show = !this.show;
  }
};
</script>

<style>
.title {
  width: 100%;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 18px;
  margin-bottom: 25px;
}
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  bottom: 0px;
  overflow: hidden;
}
.main {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 700px;
  /*background: #fafafa;*/
  color: #000;
  height: 400px;
  margin: auto;
  border: 1px solid #d7dde4;
  border-radius: 2px;
  transition: 0.3s linear;
  padding: 16px;
}
.main:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
}
.centerContent {
  width: 100%;
  height: 100%;
  
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.error-body {
  width: 100%;
  height: 250px;
  font-size: 200px;
  text-align: center;
  font-weight: 700;
  color: rgba(45, 140, 240, 0.9);
}
.error-foot {
  width: 100%;
  /* height: 100px; */
  display: flex;
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding: 16px;
}
.err-btn {
    height: 40px;
  color: #999;
}
.err-btn:hover {
     
  color: #f90;
}
.cus-icon {
    transition: 3s;
    animation: errbounce 3s infinite;
}
@keyframes errbounce {
  from, 20%, 53%, 80%, to {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transform: translate3d(0,0,0);
          }

          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -30px, 0);
          }

          70% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -15px, 0);
          }

          90% {
            transform: translate3d(0,-4px,0);
          }
}

</style>