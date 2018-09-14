<template>
    <div id="">
        <canvas id="canvas" ref="canvas"  style="width:150px;height:150px;" ></canvas>
    </div>
</template>

<script>
import Draw from "./canvas.js";
export default {
    data() {
        return {
            falg:true,
            defaultData:{
                drawBgColor:"#2d4264", //外圈背景颜色
                deawCirckeColor:["#0f6cd9","#05a6da"],  //外圈进度条背景颜色渐变  1 => 2
                drawCenterColor:["#0f6cd9","#05a6da"]
            }
        };
    },
    props: {
        data: {
            type: Object,
            default: function() {
                return {
                    
                };
            }
        },
        value: {
            type: Number,
            default: function*() {
                return 60;
            }
        }
    },
    methods: {},
    mounted() {
        let data = {
            el:this.$refs.canvas,
            value:this.value
        }
        data = Object.assign(this.defaultData,data,this.data);
        
        this.canvas = new Draw(data);
    },
    watch: {
        value(now,old) {
            //大于等于100 取100 
            now = now >= 100 ? 100 : now;
            //小于等于0  取0
            now = now <= 0 ? 0 : now;
            if(now != old){
                this.canvas.change(now);
            }
        }
    }
};
</script>

<style>
</style>
