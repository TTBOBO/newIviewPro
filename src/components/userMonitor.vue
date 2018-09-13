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
            falg:true
        };
    },
    props: {
        data: {
            type: Object,
            default: function() {
                return {};
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
        this.data.el = this.$refs.canvas;
        this.data.value = this.value;
        this.canvas = new Draw(this.data);
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
