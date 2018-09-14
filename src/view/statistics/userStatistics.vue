<template>
    <div class="userstatis">
        <particle style="position: absolute;top:0;bottom:0;left:0;right:0; z-index:1" :drawOption="drawOption"></particle>
        <div class="canvaslist">
            <div>
                <canvasCir v-model="canvasdata[0].value" :data="canvasdata[0].data"></canvasCir>
            </div>
            <div>
                <canvasCir v-model="canvasdata[1].value" :data="canvasdata[1].data"></canvasCir>
            </div>
            <div>
                <canvasCir v-model="canvasdata[2].value" :data="canvasdata[2].data"></canvasCir>
            </div>
            <div>
                <canvasCir v-model="canvasdata[3].value" :data="canvasdata[3].data"></canvasCir>
            </div>
        </div>
    </div>
</template>

<script>
import canvasCir from '../../components/userMonitor';
import particle from '../../components//particle.vue'
export default {
    data(){
        return {
            drawOption:{
                cirAutoColor:"#00FF7F"
            },
            canvasdata:[{
                value:0,
                data:{
                    size:"60",
                    speed:1,
                    color:"#05a6da",
                    text:"在线量",
                    deawCirckeColor:["#00BFFF","#00FFFF"]
                }
            },{
                value:0,
                data:{
                    size:"60",
                    speed:1,
                    color:"#ADFF2F",
                    text:"在线量1",
                    deawCirckeColor:["#26AEF2","#00ccff"]
                }
            },{
                value:0,
                data:{
                    size:"60",
                    speed:1,
                    color:"red",
                    text:"在线量2",
                    deawCirckeColor:["#90EE90","#00FF00"]
                }
            },{
                value:0,
                data:{
                    size:"60",
                    speed:1,
                    color:"#fff",
                    text:"在线量3",
                    deawCirckeColor:["	#1E90FF","#006699"]
                }
            }]
        }
    },
    mounted(){
        setTimeout(() => {
            this.canvasdata[0].value = 33;
            this.canvasdata[1].value = 55;
            this.canvasdata[2].value = 70;
            this.canvasdata[3].value = 90;
        },1000)
    },
    components:{
        canvasCir,
        particle
    }
}
</script>

<style>
.userstatis{
    position: relative;
    position: absolute;top:0;bottom:0;left:0;right:0;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #f4f4f4;
}
.canvaslist{
     position: absolute;top:0;bottom:0;left:0;right:0;
    display: flex;
    z-index: 101;
    
}
.canvaslist div{
    flex: 1;
}
</style>
