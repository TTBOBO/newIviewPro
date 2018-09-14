<template>
    <canvas ref="canvas" style="width:100%;height:100%;z-index:100;" :style="{background:bgcolor}" ></canvas>
</template>

<script>
import DrawParticle from './particle';
export default {
    data(){
        return {
            drawLine:false,
            cirAutoColor:"#ff0000",
            defaultOption:{
                    drawLine:true,  //   2点之间画布线条   默认true   画布    false  不画布
                    cirCount:200,   //  图层画布默认200个点   必填
                    drawLineWid:50,  //  多长距离划线  drawLine => false  可不传  drawLine => true  必填 
                    cirAutoColor:false,   //默认false  就是随机颜色   不想随机颜色 传颜色值  rgb  rgba  16进制  （字符串）
                    moveW:1,  //移动速率  默认3倍
            }
        }
    },
    props:{
        bgcolor:{
            type:String,
            default:function(){
                return "rgba(100,149,237,.3)"   //canvas  节点的背景颜色 
            }
        },
        
        drawOption:{
            type:Object,
            default:function(){
                return {};
            }
        }
    },
    mounted(){
        let data = {
            el:this.$refs.canvas
        }
        data = Object.assign(data,this.defaultOption,this.drawOption);
        console.log(data);
        this.draw = new DrawParticle(data)

        setInterval(() => {
            this.drawLine = !this.drawLine;
            this.cirAutoColor = this.cirAutoColor ? false  : "#ff0000"; 
            this.draw.changeOption({
                cirAutoColor:this.cirAutoColor,
                drawLine:this.drawLine
            });
        }, 5000);
    },
    destroyed(){
        //页面销毁的时候 销毁粒子实例
        this.draw.setDestory();
    }
}
</script>

<style>

</style>
