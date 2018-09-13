<template>
    <div>
        <canvas ref="canvas" style="width:1000px;height:1000px;background:#000;" ></canvas>
        123
    </div>
</template>

<script>
import DrawParticle from './particle';
export default {
    data(){
        return {
            
        }
    },
    mounted(){
        new DrawParticle({
            el:this.$refs.canvas
        })
    }
}
</script>

<style>

</style>
